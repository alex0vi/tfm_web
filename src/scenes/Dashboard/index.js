'use strict'

import Ru from 'rutils'

import React, { PureComponent } from 'react'

import { connect } from 'react-redux'

import { Grid, Row , Col } from 'react-bootstrap';

import { socket } from '../../services'

socket.initRT()
import classnames from 'classnames';
import MediaDevice from './components/MediaDevice';
import MainWindow from './components/MainWindow';
import CallWindow from './components/CallWindow';
import CallModal from './components/CallModal';

const mapStateToProps = ( state, ownProps ) => {

    return {
      profile : state.user.profile,
      accessToken : state.user.accessToken,
    }
}

let friendId;
let temp = [
    'alex-oviedo-2',
    'alex-oviedo-1'
]

@connect(mapStateToProps, null)
class Dashboard extends PureComponent {

    constructor(props) {
        super(props)
    this.setInitialContext();

    console.log(':::mediaDevice', MediaDevice);

        this.state = {
          clientId: '',
          callWindow: '',
          callModal: '',
          callFrom: '',
          localSrc: null,
          peerSrc: null
        };


        this.config = null;
        this.startCallHandler = this.startCall.bind(this);
        this.endCallHandler = this.endCall.bind(this);
        this.rejectCallHandler = this.rejectCall.bind(this);
        this.setRemoteDescription = this.setRemoteDescription.bind(this)
        this.setLocalDescription = this.setLocalDescription.bind(this)
        //this.addIceCandidate =  this.addIceCandidate.bind(this)
        //this.createAnswer = this.createAnswer.bind(this)
        this.onCandidateSignal = this.onCandidateSignal.bind(this)
        this.onicecandidate             = this.onicecandidate.bind( this );
        this.onaddstream                = this.onaddstream.bind( this );
        this.callWithVideo              = this.callWithVideo.bind(this)
        this.acceptWithVideo =  this.acceptWithVideo.bind(this)
        this.createPC = this.createPC.bind(this)
        this.setClientId = this.setClientId.bind(this)
        this.generateLocalMediaStream  = this.generateLocalMediaStream.bind(this)
        this.setInitialContext          = this.setInitialContext.bind( this );

        }

    setClientId() {
        let user = this.props.profile
        let clientId = user.firstName+'-'+user.lastName+'-'+user.id
        this.setState({ clientId })
        return clientId
    }

    componentWillMount() {

         //
    }


    setInitialContext(){

        this.pc = null;

    }


    componentDidMount() {
        // let joinPayload = null;
        console.log('jeje estoy aqui',this.state.clientId);

        // console.log(socket.getNsWebRTC());
        socket.getNsWebRTC().emitInitContext( this.setClientId() )
        socket.getNsWebRTC().onInitRequestCall( data => {
            console.log('jeje estoy aqui',data);
            this.setState({ callModal: 'active', callFrom: data.from })
        })

        socket.getNsWebRTC().onInitCall( (data) => {
            console.log('aexl', data);

            if (data.sdp) {
                if( data.sdp.type === 'offer') {
                    console.log('lol');
                    this.onSdpOfferSignal(data)
                }
                // this.setRemoteDescription( data.sdp )
                // .then ( () => this.pc.createAnswer() )
                // .then( sd => {
                //     console.log('jajaj');
                //     this.setLocalDescription(sd);
                //     socket.getNsWebRTC().emitInitCall({ to: data.to, sdp: answer });
                //
                // } )
                    // if (data.sdp.type === 'offer') {
                    //     this.pc.createAnswer()
                    //     .then( answer => {
                    //         // let rtcSD = new RTCSessionDescription(answer)
                    //         // console.log(':::: nen awnser :::', answer);
                    //
                    //     })
                    //     .catch(err => console.log(err));
                    // }


            }
            else {
                console.log('lala');
                this.onCandidateSignal(data.candidate);
            }
        })

        socket.getNsWebRTC().onEndCall( res => {
            console.log('res end', res);
        } )





        // socket
        // .emit('INIT_CONTEXT', this.setClientId() )
        // .on('INIT_REQUEST_CALL', data => this.setState({ callModal: 'active', callFrom: data.from }))
        // .on('INIT_CALL', (data) => {
        //     if (data.sdp) {
        //     this.pc.setRemoteDescription(data.sdp);
        //     if (data.sdp.type === 'offer') this.pc.createAnswer();
        //     } else this.pc.addIceCandidate(data.candidate);
        // })
        // .on('END_CALL', this.endCall.bind(this, false))

    }


    componentWillMount(){

    }


    onSdpOfferSignal( data ){
        // console.log('onSDPOfferSignal payload', roomPayload);
        let mediaConstraints = {
          video: {
            facingMode: 'user',
            height: { min: 360, ideal: 720, max: 1080 }
          },
          audio: true
        };
        console.log('on onSdpOfferSignal');
        console.log('data : onSdpOfferSignal', data);

        this.createPC(data.to);

        // let mediaConstraints = {
        //     // audio: true,
        //     video: true
        // }

        return(
            this.setRemoteDescription( data.sdp )
            .then( () => this.generateLocalMediaStream( mediaConstraints ) )
            .then( () => this.pc.createAnswer() )
            .then( sessionDescription => {
                this.setLocalDescription( sessionDescription  )
                socket.getNsWebRTC().emitInitCall({ to: data.to, sdp: sessionDescription });

            })
            .catch( err => {
                console.log('onSdpOfferSignal closeVideoCall');

                console.log('err', err)


            } )
        )
    }

    emitCall(friend, config){
        this.config = config;
        socket.getNsWebRTC().emitInitRequestCall({ to: friend, from: this.state.clientId });


    }

    startCall(friendId, config) {
        this.config = config;
        let mediaConstraints = {
          video: {
            facingMode: 'user',
            height: { min: 360, ideal: 720, max: 1080 }
          },
          audio: true
        };


        this.createPC(friendId);


        this.generateLocalMediaStream(mediaConstraints)
        .then( () => {
            this.pc.createOffer()
            .then( offer => {
                this.setLocalDescription( offer );
                socket.getNsWebRTC().emitInitCall({ to: friendId, sdp: offer  });
             })
             .catch(err => console.log(err));
        })




        // } )
       //  this.config = config;
       //  this.pc = new PeerConnection(friendId)
       // .on('localStream', (src) => {
       //     const newState = { callWindow: 'active', localSrc: src };
       //     if (!isCaller) newState.callModal = '';
       //     this.setState(newState);
       // })
       // .on('peerStream', src => this.setState({ peerSrc: src }))
       // .start(isCaller, config);

   }
   onicecandidate( evt ){


       let { candidate } = evt;

       if( Ru.isNil( candidate ) ){
           // console.log('All ICE candidates have been sent')
           return
       }



   }

   onaddstream( evt ){
       let { stream } = evt;

     this.setState({ peerSrc: stream })

   }

   createPC(friendId) {


       let rtcPeerConf = {
           iceServers: [
               {
                   'url'           : 'stun:stun.l.google.com:19302',
                   // 'username'      : 'webrtc',
                   // 'credential'    : 'turnserver',
               },
               {
                   'url'           : 'stun:stun.services.mozilla.com',
                   // 'username'      : 'webrtc',
                   // 'credential'    : 'turnserver',
               },
           ]
       };


       this.pc = new RTCPeerConnection( rtcPeerConf );


       this.pc.onaddstream = this.onaddstream;

       this.pc.onicecandidate =  evt => {
           if( Ru.isNil( evt.candidate ) ){
               // console.log('All ICE candidates have been sent')
               return
           }

           socket.getNsWebRTC().emitInitCall({
             to: friendId,
             candidate: evt.candidate
         })
       }



   }

    // createAnswer(data) {
    //   this.pc.createAnswer()
    // .then( answer => {
    //         let rtcSD = new RTCSessionDescription(answer)
    //         this.pc.setLocalDescription(rtcSD);
    //         socket.getNsWebRTC().emitInitCall({ to: data, sdp: answer,from: this.state.clientId  });
    //     })
    //     .catch(err => console.log(err));
    //   return this;
    // }

    setLocalDescription( initialSessionDescription ){

        let rtcSessionDescription = new RTCSessionDescription( initialSessionDescription );


        return(
            this.pc.setLocalDescription( rtcSessionDescription )
        )
    }

    setRemoteDescription(initialSessionDescription) {

        let rtcSessionDescription = new RTCSessionDescription( initialSessionDescription );

        return(
            this.pc.setRemoteDescription( rtcSessionDescription )
        )
    }

    onCandidateSignal( candidate ){
        // console.log('onCandidateSignal payload', roomPayload)

        if( Ru.isNil( candidate ) ){
            // console.log('All ICE candidates have been sent')
            return
        }

        console.log('on candidate');

        let rtcIceCandidate = new RTCIceCandidate( candidate );

        return(
            this.pc.addIceCandidate( rtcIceCandidate )
            .catch( err => {
                console.log('onCandidateSignal closeVideoCall');

                console.log('err', err)
            } )
        )
    }

    generateLocalMediaStream( mediaConstraints ){
        let { audio, video } = mediaConstraints;

        console.log('mediaConstraints', mediaConstraints)
        return(
            navigator.mediaDevices
            .getUserMedia( mediaConstraints )
            .then( localMediaStream => {
                console.log('localMediaStream', localMediaStream);


                this.setState({ callWindow: 'active', localSrc: localMediaStream });
                return this.pc.addStream( localMediaStream )
            } )
            .catch( err => {
                console.log('generateLocalMediaStream closeVideoCall');

                console.log('err', err)


            } )
        )
    }



    rejectCall() {
        socket.getNsWebRTC().emitEndCall({ to: this.state.callFrom });
        this.setState({ callModal: '' });
    }


    endCall(pc, isStarter) {
        if (_.isFunction(pc.stop)) pc.stop(isStarter);
            this.pc = {};
            this.config = null;
            this.setState({
            callWindow: '',
            localSrc: null,
            peerSrc: null
        });
    }

    callWithVideo(video) {
      const config = {audio: true};
      config.video = video;
      return () => this.emitCall( friendId, config );
    }

    acceptWithVideo(video) {
      const config = { audio: true, video };
      return () => this.startCall( this.state.callFrom, config);
    }


    render(){

        return(
            <section id="dashboard" className="dashboard-section section" >
            <Grid>
                <Row>
                <Col md={ 4 } mdOffset={ 4 }>
                    <h2 className="section-heading">
                     hi { this.props.profile.firstName } { this.props.profile.lastName }

                    </h2>
                    <p>You account  ID: <input type="text" className="txt-clientId" value={this.state.clientId} /></p>
                    <div>
                      <input
                        type="text"
                        className="txt-clientId"
                        spellCheck={false}
                        placeholder="Your friend ID"
                        onChange={event => friendId = event.target.value}
                      />
                      <div>
                        <button
                          className="btn-action fa fa-video-camera"
                          onClick={this.callWithVideo(true)}
                        />
                        <button
                          className="btn-action fa fa-phone"
                          onClick={this.callWithVideo(false)}
                        />
                      </div>
                    </div>
                </Col>
                </Row>

                <CallWindow
                    status={this.state.callWindow}
                    localSrc={this.state.localSrc}
                    peerSrc={this.state.peerSrc}
                    config={this.config}

                    endCall={this.endCallHandler}
                />


                <div className={classnames('call-modal', this.state.callModal)}>
                  <p>
                    <span className="caller">{this.state.callFrom}</span> is calling ...
                  </p>
                  <button
                    className="btn-action fa fa-video-camera"
                    onClick={this.acceptWithVideo(true)}
                  />
                  <button
                    className="btn-action fa fa-phone"
                    onClick={this.acceptWithVideo(false)}
                  />
                  <button
                    className="btn-action hangup fa fa-phone"

                  />
                </div>


            </Grid>
            </section>
        )
    }
}

export default Dashboard
