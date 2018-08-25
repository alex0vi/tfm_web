'use strict'

import Ru from 'rutils'

import React, { PureComponent } from 'react'

import { connect } from 'react-redux'

import { Grid, Row , Col } from 'react-bootstrap';

import { socket } from '../../services'

socket.initRT()

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
        this.addIceCandidate =  this.addIceCandidate.bind(this)
        this.createAnswer = this.createAnswer.bind(this)
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

        // console.log(socket.getNsWebRTC());
        socket.getNsWebRTC().emitInitContext( this.setClientId() )
        socket.getNsWebRTC().onInitRequestCall( data => this.setState({ callModal: 'active', callFrom: this.state.clientId }) )
        socket.getNsWebRTC().onInitCall( (data) => {
            console.log('aexl', data);
            if (data.sdp) {
                this.pc.setRemoteDescription( new RTCSessionDescription( data.sdp ))
                if (data.sdp.type === 'offer')
                this.pc.createAnswer()
              .then( answer => {

                  console.log(':::: nen awnser :::', answer);
                      let rtcSD = new RTCSessionDescription(answer)
                      this.pc.setLocalDescription(rtcSD);
                      socket.getNsWebRTC().emitInitCall({ to: data.to, sdp: answer });
                  })
                  .catch(err => console.log(err));
            }
            else this.pc.addIceCandidate(new RTCIceCandidate(data.candidate));
        })

        socket.getNsWebRTC().onEndCall( this.endCall.bind(this, false) )




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

    startCall(isCaller, friendId, config) {
        this.config = config;
        let mediaConstraints = {
          video: {
            facingMode: 'user',
            height: { min: 360, ideal: 720, max: 1080 }
          },
          audio: true
        };

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



        this.pc.onicecandidate = ( event => {
            socket.getNsWebRTC().emitInitCall({
              to: friendId,
              candidate: event.candidate
          })
          })

          this.pc.onaddstream = (event => this.setState({ peerSrc: event.stream }));


        this.generateLocalMediaStream(mediaConstraints)
        .then( () => {
            if (isCaller)
            {
                socket.getNsWebRTC().emitInitRequestCall({ to: friendId });
            }
            else {
                this.pc.createOffer()
                  .then( offer => {
                       const off = new RTCSessionDescription(offer);
                      this.pc.setLocalDescription(off);
                      socket.getNsWebRTC().emitInitCall({ to: friendId, sdp: off });
                  })
                  .catch(err => console.log(err));
             }

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

    createAnswer(data) {
      this.pc.createAnswer()
    .then( answer => {
            let rtcSD = new RTCSessionDescription(answer)
            this.pc.setLocalDescription(rtcSD);
            socket.getNsWebRTC().emitInitCall({ to: data, sdp: answer });
        })
        .catch(err => console.log(err));
      return this;
    }


    setRemoteDescription(sdp) {

        let rtcSessionDescription = new RTCSessionDescription( sdp );

        return(
            this.pc.setRemoteDescription( rtcSessionDescription )
        )
    }

    addIceCandidate(candidate) {
      if (candidate) {
        const iceCandidate = new RTCIceCandidate(candidate);
        this.pc.addIceCandidate(iceCandidate);
      }
      return this;
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


    endCall(isStarter) {
        if (_.isFunction(this.pc.stop)) this.pc.stop(isStarter);
            this.pc = {};
            this.config = null;
            this.setState({
            callWindow: '',
            localSrc: null,
            peerSrc: null
        });
    }


    render(){

        return(
            <section id="dashboard" className="dashboard-section section" >
            <Grid>
                <Row>
                    <MainWindow
                      clientId={this.state.clientId}
                      startCall={this.startCallHandler}
                      profile={this.props.profile}
                    />
                </Row>

                <CallWindow
                    status={this.state.callWindow}
                    localSrc={this.state.localSrc}
                    peerSrc={this.state.peerSrc}
                    config={this.config}
                    mediaDevice={ MediaDevice }
                    endCall={this.endCallHandler}
                />


                <CallModal
                    status={this.state.callModal}
                    startCall={this.startCallHandler}
                    rejectCall={this.rejectCallHandler}
                    callFrom={this.state.callFrom}
                />


            </Grid>
            </section>
        )
    }
}

export default Dashboard
