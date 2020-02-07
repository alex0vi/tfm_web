'use strict'

import Ru from 'rutils'

import React, { PureComponent } from 'react'

import { connect } from 'react-redux'

import { Grid, Row , Col } from 'react-bootstrap';

import { socket } from '../../services'

import { bindActionCreators } from 'redux'

import { updateMessages } from '../../actionCreators/messages'

import CallModal from "./components/callModal"

import Messages from "./components/messages"

const mapStateToProps = ( state, ownProps ) => {
    return {
      profile : state.user.profile,
      accessToken : state.user.accessToken
    }
}

let mediaConstraints = {
    video: {
        facingMode: 'user',
        height: { min: 360, ideal: 720, max: 1080 }
    },
    audio: true
};

@connect(mapStateToProps, null)
class Dashboard extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            Video: true,
            Audio: true,
            checkError: false,
            clientId: '',
            friendId:  '',
            callWindow: '',
            callModal: '',
            localSrc: null,
            peerSrc: null
        }

        this.btns = [
          { type: 'Video', icon: 'fa-video-camera' },
          { type: 'Audio', icon: 'fa-microphone' }
        ]

        this.config = null

        this.setInitialContext          = this.setInitialContext.bind( this )
        this.setClientId                = this.setClientId.bind(this)

        this.onicecandidate             = this.onicecandidate.bind( this )
        this.onaddstream                = this.onaddstream.bind( this )
        this.createPC                   = this.createPC.bind( this )

        this.generateLocalMediaStream   = this.generateLocalMediaStream.bind( this )
        this.setRemoteDescription       = this.setRemoteDescription.bind( this )
        this.setLocalDescription        = this.setLocalDescription.bind( this)
        this.onCandidateSignal          = this.onCandidateSignal.bind( this )

        this.emitRequestCall            = this.emitRequestCall.bind( this )
        this.acceptWithVideo            = this.acceptWithVideo.bind( this )

        this.toggle                     = this.toggle.bind( this )
        this.toggleMediaDevice          = this.toggleMediaDevice.bind( this )

        this.rejectCall                 = this.rejectCall.bind( this )
        this.endCall                    = this.endCall.bind( this )
    }

    setClientId() {
        let user = this.props.profile
        let clientId = user.firstName+'_'+user.lastName;
        this.setState({ clientId })
        return clientId
    }

    componentDidUpdate() {
      this.setMediaStream()
    }

    setInitialContext() {
        this.pc = null;
    }

    componentDidMount() {
        let { actions } = this.props
        this.setInitialContext()
        this.setMediaStream()

        socket.getNsWebRTC().emitInitContext( this.setClientId())
        socket.getNsWebRTC().onInitRequestCall( data => this.setState({ callModal: 'active', friendId: data.from }))
        socket.getNsWebRTC().onInitCall( (data) => {
            if(! this.pc ) this.onAnswerSignal()
            if ( data.sdp ) {
                this.setRemoteDescription( data.sdp )
            }
            else {
                this.onCandidateSignal( data.candidate )
            }
        })

        socket.getNsWebRTC().onEndCall( () => this.endCall( false ) )

    }

    componentWillMount() {


    }

    onAnswerSignal() {

        this.createPC()

        return(
            this.generateLocalMediaStream( mediaConstraints )
            .then( () => this.pc.createAnswer() )
            .then( ans => {
                this.setLocalDescription( ans  )
                console.log('::::: en awnsercall friend;;;', this.state.friendId )
                console.log('::::: en awnsercall client;;;', this.state.clientId )

                socket.getNsWebRTC().emitInitCall( {
                    to: this.state.friendId,
                    from: this.state.clientId,
                    sdp: ans } )

            })
            .catch( err => {
                console.log('onSdpOfferSignal closeVideoCall')
                console.log('err', err)

            })
        )
    }

    initCall(config) {
        this.config = config;
        this.setState( { callModal: '' } )
        this.setInitialContext()

        this.createPC()

        this.generateLocalMediaStream(mediaConstraints)
        .then( () => {
            this.pc.createOffer()
            .then( offer => {
                this.setLocalDescription( offer )
                console.log('::::: en createoffer friend;;;', this.state.friendId )
                console.log('::::: en createoffer client;;;', this.state.clientId )

                socket.getNsWebRTC().emitInitCall( {
                    to: this.state.friendId,
                    from: this.state.clientId,
                    sdp: offer  } )
             })
             .catch(err => console.log(err))
        })
    }

    onicecandidate( evt ){
       console.log('::::: en icecandidate friend;;;', this.state.friendId )
       console.log('::::: en icecandidate client;;;', this.state.clientId )

       let { candidate } = evt

       if( Ru.isNil( candidate ) ){
           // console.log('All ICE candidates have been sent')
           return
       }

       socket.getNsWebRTC().emitInitCall( {
           to: this.state.friendId,
           from: this.state.clientId,
           candidate: candidate } )
   }

    onaddstream( evt ){
       let { stream } = evt
       this.setState( { peerSrc: stream } )
   }

    createPC() {

       let rtcPeerConf = {
           iceServers: [
               { 'url'           : 'stun:stun.l.google.com:19302' },
               { 'url'           : 'stun:stun.services.mozilla.com' }
           ]
       };

       this.pc                  = new RTCPeerConnection( rtcPeerConf )
       this.pc.onaddstream      = this.onaddstream
       this.pc.onicecandidate   = this.onicecandidate
   }

    setLocalDescription( initialSessionDescription ){

        let rtcSessionDescription = new RTCSessionDescription( initialSessionDescription )

        return(
            this.pc.setLocalDescription( rtcSessionDescription )
        )
    }

    setRemoteDescription(initialSessionDescription) {

        let rtcSessionDescription = new RTCSessionDescription( initialSessionDescription )

        return(
            this.pc.setRemoteDescription( rtcSessionDescription )
        )
    }

    onCandidateSignal( candidate ){

        if( Ru.isNil( candidate ) ){
            // console.log('All ICE candidates have been sent')
            return
        }

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

        return (
            navigator.mediaDevices
            .getUserMedia( mediaConstraints )
            .then( localMediaStream => {

                this.setState( { callWindow: 'active', localSrc: localMediaStream } )
                return this.pc.addStream( localMediaStream )
            })
            .catch( err => {
                console.log('generateLocalMediaStream closeVideoCall');

                console.log('err', err)
            })
        )
    }


    rejectCall() {
        this.setState( { callModal: '' } );
    }

    endCall( isStarted ) {

        if ( isStarted ) socket.getNsWebRTC().emitEndCall({ to: this.state.friendId })
        let remoteVideoCam  = this.peerVideo
        let localVideoCam   = this.localVideo

        console.log('remoteVideo', remoteVideoCam.srcObject)
        console.log('localVideoCam', localVideoCam.srcObject)


        if( Ru.isNotNil( this.pc ) ){

            if( Ru.isNotNil(remoteVideoCam) && Ru.isNotNil(remoteVideoCam.srcObject) ){
                remoteVideoCam.srcObject.getTracks().forEach( track => track.stop() );
                remoteVideoCam.srcObject = null
            }

            if( Ru.isNotNil(localVideoCam) && Ru.isNotNil(localVideoCam.srcObject) ){
                localVideoCam.srcObject.getTracks().forEach( track => track.stop() );
                localVideoCam.srcObject = null
            }


            this.pc.close()
            this.pc = null
            this.config = null;
            this.setState({
                callWindow: '',
                localSrc: null,
                peerSrc: null
            })
        }
    }

    emitRequestCall( video ) {


        if(this.state.friendId === this.state.clientId) {

            this.setState({ checkError: true  })
            return
        }

        this.setInitialContext()

        console.log('::::: antes de iniciar la llamada friend;;;', this.state.friendId )
        console.log('::::: antes de iniciar la llamada client;;;', this.state.clientId )
        const config = { audio: true, video }
        this.config = config;

        socket.getNsWebRTC().emitInitRequestCall({ from: this.state.clientId, to: this.state.friendId });
    }

    acceptWithVideo( video ) {
        const config = { audio: true, video }

        this.initCall( config )
    }

    toggle( type, on ){
        const len = arguments.length;
        if (this.state.localSrc) {
            const manageTracks = (track) => {
                let state = len === 2 ? on : !track.enabled
                track.enabled = state
            }
            let tracks = Ru.map( manageTracks, this.state.localSrc[`get${type}Tracks`]() )
            return tracks
        }
    }

    toggleMediaDevice( deviceType ) {
        this.setState( { [deviceType]: !this.state[deviceType] } )
        this.toggle(deviceType)
    }

    renderControlButtons() {

        const manageButtons = ( btn ) => {
            const manageClass = (icon, type) => {
                let btn = `btn-action fa ${ icon } ${ !this.state[type]? 'disable':'' } } `
                return btn;
            }

            return (
                <button
                    key={ `btn${btn.type}` }
                    className={ manageClass(btn.icon, btn.type) }
                    onClick={ () => this.toggleMediaDevice(btn.type) }
                />
            )
        }

        let btns = Ru.map(  manageButtons, this.btns )

        return btns
    }

    setMediaStream() {
        if (this.peerVideo && this.state.peerSrc) this.peerVideo.srcObject = this.state.peerSrc;
        if (this.localVideo && this.state.localSrc) this.localVideo.srcObject = this.state.localSrc;
    }

    render(){
        return(
            <section id="dashboard" className="dashboard-section section">
                <Grid>
                    <Row>
                        <div className="wrap">
                            <Col md={ 6 } sm= { 6 } className="video-container">
                                <h2 className="section-heading">
                                    Hi { this.state.clientId }
                                </h2>
                                <div  className={'form-group' + (!this.state.friendId ? ' has-error' : '')}>
                                    <input
                                        type="text"
                                        className="txt-frietId"

                                        spellCheck={false}
                                        placeholder="Write the username"
                                        onChange={ event => this.setState({ friendId: event.target.value }) }
                                    />


                                    <div className="buttons-container">
                                        <button
                                            className="btn-action fa fa-video-camera"
                                            onClick={ () => this.emitRequestCall({ video: true }) }
                                        />
                                        {/* <button
                                            className="btn-action fa fa-phone"
                                            onClick={ ()=> this.emitRequestCall({ video: false }) }
                                        /> */}
                                    </div>
                                </div>
                                { (this.state.friendId === this.state.clientId) &&
                                    <div className="help-block">You can not call yourself</div>
                                }
                            </Col>

                            <Messages
                                socket={ socket }
                                clientId={ this.state.clientId }
                            />


                            <CallModal
                                callModal={ this.state.callModal }
                                friendId={ this.state.friendId }
                                acceptWithVideo={ this.acceptWithVideo }
                                rejectCall={ this.rejectCall }
                            />

                            {/* CALL WINDOW */}
                            <div className={'call-window '+ this.state.callWindow }>
                                <video id="peerVideo" ref={ el => this.peerVideo = el } autoPlay />
                                <video id="localVideo" ref={ el => this.localVideo = el } autoPlay muted />
                                <div className="video-control">
                                    { this.renderControlButtons() }
                                    <button
                                        className="btn-action hangup fa fa-phone"
                                        onClick={ () => this.endCall(true) }
                                    />
                                </div>
                            </div>
                        </div>
                    </Row>
                </Grid>
            </section>
        )
    }
}

export default Dashboard
