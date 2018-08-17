'use strict';

import React, { PureComponent } from 'react';

let ReactDOM                    = require('react-dom');
let Radium = require('radium');

import {connect}                    from 'react-redux';
import {bindActionCreators}         from 'redux';
import R                            from 'ramda';
import Ru                           from 'rutils';

import {COLORS}                       from '../../../../globals/colors.js';

import {getNsWebRTC}                from '../../../../services/RealTime';

import {setWebRTC}                  from '../../../../../store/actionsCreators/webRTC/setWebRTC';
import {setStatus}                  from '../../../../../store/actionsCreators/communication/setStatus';
import {setAspectRatio}             from '../../../../../store/actionsCreators/webRTC/setAspectRatio';

import CircularButton               from './components/CircularButton';
import Chronometer                  from './components/Chronometer';

const api                           =   require('../../../../../js/devel/modules-system/api-calls').apiv2;




const mapStateToProps = (state, ownProps) => {
    let isVideoNeed = state.webRTC.callType === 'NEW_VIDEO_CALL';

    return {
        channel         :   state.webRTC.channel,
        hasVoice        :   state.webRTC.hasVoice,
        hasVideo        :   state.webRTC.hasVideo,
        hasRemoteVideo  :   true,
        callType        :   state.webRTC.callType,
        isVideoNeed,
        myself          :   state.user,
    }
}


const mapDispatchToProps = dispatch => {

    return bindActionCreators({
        dispatchSetWebRTC              : setWebRTC,
        dispatchSetStatus              : setStatus,
        dispatchSetAspectRatio         : setAspectRatio,
    }, dispatch)
};


@connect(mapStateToProps, mapDispatchToProps)
@Radium
class WebRTCContainer extends PureComponent {

    constructor(props) {
        super(props);

        this.setInitialContext();

        this.initialState = {
            notification                    : this.defaultNotificationState,
            localVideoConnected             : true,
            localAudioConnected             : true,
            remoteVideoConnected            : true,
            callOnLine                      : false,
            remoteUserOnline                : false,
            remoteUserId                    : null,
        }

        this.state = {
            showAvatar                      : true,
            connected                       : false,
        }

        this.initCall                   = this.initCall.bind( this )

        this.generateLocalMediaStream   = this.generateLocalMediaStream.bind( this );

        this.setRemoteDescription       = this.setRemoteDescription.bind( this );
        this.setLocalDescription        = this.setLocalDescription.bind( this );

        this.closeVideoCall             = this.closeVideoCall.bind( this );
        this.hangup                     = this.hangup.bind( this );
        this.createPC                   = this.createPC.bind( this );

        this.setInitialContext          = this.setInitialContext.bind( this );


        this.onicecandidate             = this.onicecandidate.bind( this );
        this.onaddstream                = this.onaddstream.bind( this );
        this.onremovestream             = this.onremovestream.bind( this );
        this.oniceconnectionstatechange = this.oniceconnectionstatechange.bind( this );
        this.onicegatheringstatechange  = this.onicegatheringstatechange.bind( this );
        this.onsignalingstatechange     = this.onsignalingstatechange.bind( this );
        this.onnegotiationneeded        = this.onnegotiationneeded.bind( this );


        this.onJoinedWEBRTCRoom         = this.onJoinedWEBRTCRoom.bind( this );
        this.onLeftWEBRTCRoom           = this.onLeftWEBRTCRoom.bind( this );




        this.onCandidateSignal              = this.onCandidateSignal.bind( this );
        this.onSdpAnswerSignal              = this.onSdpAnswerSignal.bind( this );
        this.onSdpOfferSignal               = this.onSdpOfferSignal.bind( this );
        this.onRemoteConnectVideoSignal     = this.onRemoteConnectVideoSignal.bind( this );
        this.onRemoteDisconnectVideoSignal  = this.onRemoteDisconnectVideoSignal.bind( this );


        this.onClickToggleVideo             = this.onClickToggleVideo.bind( this );
        this.onClickToggleAudio             = this.onClickToggleAudio.bind( this )

        this.getChannelId               = this.getChannelId.bind( this );


        this.webRTCRoom = null;
    }

    componentWillMount() {
        let joinPayload = null;


        if(this.props.isRemote) {
            let { userId, mediaConstraints } = this.props.payload;

            joinPayload = {mediaConstraints}
            this.remoteUserId = userId;
            this.setState({connected: true})
        }
        else {
            let mediaConstraints = {
                audio   : {
                    echoCancellation: false,
                    noiseSuppression: false
                },
                video: this.props.callType === 'NEW_VIDEO_CALL' ? true : false,

            };

            joinPayload = {mediaConstraints}
        }

        this.webRTCRoom = getNsWebRTC().joinRoom( this.getChannelId(), joinPayload );

        this.webRTCRoom.onJoinedRoom( this.onJoinedWEBRTCRoom );
        this.webRTCRoom.onLeftRoom( this.onLeftWEBRTCRoom );
        this.webRTCRoom.onSdpAnswerSignal( this.onSdpAnswerSignal );
        this.webRTCRoom.onSdpOfferSignal( this.onSdpOfferSignal );
        this.webRTCRoom.onCandidateSignal( this.onCandidateSignal );
        this.webRTCRoom.onConnectVideoSignal( this.onRemoteConnectVideoSignal );
        this.webRTCRoom.onDisconnectVideoSignal( this.onRemoteDisconnectVideoSignal );

        if(!this.props.isRemote) {
            this.initCall(joinPayload.mediaConstraints);
        }
    }


    getChannelId(){
        return this.props.isRemote ?  this.props.payload.channelId : this.props.channel.id
    }


    componentWillUnmount() {

    }

    componentDidMount() {

        //
        // if(!this.props.isRemote) {
        //     this.initCall(initMediaConstraints);
        // }
    }

    render() {
        let {callType, channel, hasVideo, hasVoice} = this.props;

        return (

            <div
                style   = {[styles.container]}
            >
                {
                    this.state.connected ?
                        null
                    :
                        <audio
                            id          = "webrtcAudio"
                            ref         = { self => this.webrtcAudio = self }
                            autoPlay    = { true }
                            controls    = { false }
                            loop        = { true }
                            src         = { './multimedia/audio/video-chat/videocall_notification.mp3' }
                        />
                }

                {
                    this.state.remoteUserOnline ?
                        <div style={{ zIndex: 2 }}>
                            <Chronometer />
                        </div>
                        :
                        null
                }


                {
                    !R.isNil(this.props.channel) && (this.props.callType === 'NEW_AUDIO_CALL' || this.state.showAvatar)   ?

                        <div
                            style   = {[styles.avatarWrapper]}
                        >
                            <img src={this.props.channel.avatar.sm} style={styles.avatar} />
                        </div>
                    :
                    null
                }


                <div style   = {[styles.videoContainer]} >

                    <div style = {[styles.localVideo, {display: this.props.callType === 'NEW_AUDIO_CALL' ? 'none' : 'initial' }]}>

                        <video
                            style   = {{ width: '100%'}}
                            id = "localVideoCam"
                            ref = { self => this.localVideoCam = self }
                        />

                    </div>

                    <div style = {styles.remoteVideo}>
                        <video
                            style   = {{ width: '100%'}}
                            id      = "remoteVideoCam"
                            ref     = { (self) =>  {
                                setTimeout( () => {
                                    if(!R.isNil(self)) {
                                        this.props.dispatchSetAspectRatio(self.videoWidth/self.videoHeight)
                                        this.props.cubeInstance.changeAspectRatio(self.videoWidth/self.videoHeight)
                                    }
                                }, 500)

                                return this.remoteVideoCam = self
                            }}
                        ></video>

                    </div>

                </div>


                <div style = {styles.buttonContainer}>

                    {
                        this.props.isVideoNeed ?
                            <CircularButton
                                onClick         = { this.onClickToggleVideo }
                                icon            = { this.props.hasVideo ? 'videocam' : 'videocam_off' }
                                isInverted      = { false }
                            />
                        :
                            null
                    }

                    <CircularButton
                        onClick         = { this.onClickToggleAudio }
                        icon            = { this.props.hasVoice ? 'mic' : 'mic_off' }
                        isInverted      = { false }
                    />
                    <CircularButton
                        onClick         = { () =>  this.hangup() }
                        icon            = { 'call_end' }
                        isInverted      = { true }
                    />
                </div>

            </div>
        );
    }

    setInitialContext(){
        this.notifSocket = null;
        this.webrtcSocket = null;
        this.pc = null;

        this.defaultNotificationState = {
            active: false,
            data: null
        };

        this.webrtcSignalingData = {
            candidates: [],

            isDTLSServer: false,

            //state to handle Chrome bug
            //https://groups.google.com/forum/#!topic/discuss-webrtc/gsw3OEAwNKo
            remoteSDPMediaSetup: null,

            mediaConstraints: {
                audio   : {
                    echoCancellation: false,
                    noiseSuppression: false
                },
                video   : true,
            }
            // localSDPMediaSetup: null
        };

        this.remoteVideoStream = null;
        this.localVideoStream = null;
    }


    hangup(){
        if(R.has("channel", this.props) && R.has("id", this.props.channel) && !R.isNil( this.props.channel.id)) {
            getNsWebRTC().leaveRoom( this.props.channel.id );
        }

        this.props.dispatchSetWebRTC(null, null, null);
        this.props.dispatchSetStatus('CHAT');
        this.props.cubeInstance.close();

        this.closeVideoCall();
    }

    onicecandidate( evt ){
        let myselfId = this.props.myself.id;

        let { candidate } = evt;

        if( Ru.isNil( candidate ) ){
            // console.log('All ICE candidates have been sent')
            return
        }

        this.webrtcSignalingData.candidates.push( candidate );

        let roomPayload = { candidate, userId: myselfId };

        this.webRTCRoom.emitCandidateSignal( roomPayload );
    }


    onaddstream( evt ){
        let { stream } = evt;

        this.remoteVideoStream = stream;

        const remoteVideoCam = this.remoteVideoCam;

        remoteVideoCam.srcObject = stream;
        remoteVideoCam.onloadedmetadata = e => remoteVideoCam.play();

        this.setState({
            remoteUserOnline:   true,
            showAvatar:         false
        })
    }

    onremovestream( evt ){
        this.closeVideoCall();
        this.setState({remoteUserOnline: false})
    }

    oniceconnectionstatechange( evt ){
        if( Ru.isNil(this.pc) ){
            return
        }

        let iceConnectionState = this.pc.iceConnectionState;

        if( Ru.any( Ru.eq(iceConnectionState), ['closed', 'failed', 'disconnected'] ) ){
            this.closeVideoCall();
        }

    }

    onicegatheringstatechange( evt ){
        // console.log('onicegatheringstatechange evt', evt)
    }

    onsignalingstatechange( evt ){
        // console.log('onsignalingstatechange evt', evt);

        if( Ru.isNil(this.pc) ){
            return
        }

        let signalingState = this.pc.signalingState;

        if( signalingState === 'closed' ){

            this.closeVideoCall()
        }
    }

    //called after this.pc.addStream( localMediaStream )
    onnegotiationneeded( evt ){
        // console.log('onnegotiationneeded evt', evt);

        if( !this.webrtcSignalingData.isDTLSServer ){
            // console.log('onnegotiationneeded evt on client');
            return
        }

        let myselfId = this.props.myself.id;

        return(
            this.pc
            .createOffer()
            .then( offer => this.setLocalDescription( offer ))       //offer : {type: "offer", sdp: <serialized sdp>}
            .then( () =>  {

                let { mediaConstraints } = this.webrtcSignalingData;

                let sessionDescription = this.pc.localDescription;
                let roomPayload = { sessionDescription, userId: myselfId, mediaConstraints };

                return this.webRTCRoom.emitSdpOfferSignal( roomPayload );
            })
            .catch( err => {
                console.log('onnegotiationneeded closeVideoCall');

                console.log('err', err)

                this.closeVideoCall();
            } )
        )
    }


    initCall( mediaConstraints ){
        // console.log('initCall');

        if( Ru.isNotNil( this.pc ) ){
            console.log("You can't start a call because you already have one open!");
            return
        }

        let myselfId    = this.props.myself.id;
        let channelId   = this.getChannelId();

        this.webrtcSignalingData.isDTLSServer = true;

        this.createPC();

        let roomPayload = { channelId, userId: myselfId, mediaConstraints };

        return(
            this.generateLocalMediaStream( mediaConstraints )
            .then( () => {
                getNsWebRTC().emitInitCall( roomPayload );
            } )
        )
    }


    createPC(){
        // console.log('I am in begin createPC')

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

        this.pc.onicecandidate               = this.onicecandidate;
        this.pc.onaddstream                  = this.onaddstream;
        this.pc.onremovestream               = this.onremovestream;
        this.pc.oniceconnectionstatechange   = this.oniceconnectionstatechange;
        this.pc.onicegatheringstatechange    = this.onicegatheringstatechange;
        this.pc.onsignalingstatechange       = this.onsignalingstatechange;
        this.pc.onnegotiationneeded          = this.onnegotiationneeded;

    }


    getRemoteUserId(){
        // console.log('getRemoteUserId')
        // let userId = this.state.remoteUserId;
        let myselfId = this.props.myself.id;

        let userIds = Ru.map( Number , Ru.keys( this.usersByIds ));

        let remoteUserId = Ru.find( id => id !== myselfId)( userIds );

        return remoteUserId;
    }

    generateLocalMediaStream( mediaConstraints ){
        let { audio, video } = mediaConstraints;

        this.webrtcSignalingData.mediaConstraints = mediaConstraints;

        console.log('mediaConstraints', mediaConstraints)
        return(
            navigator.mediaDevices
            .getUserMedia( mediaConstraints )
            .then( localMediaStream => {
                console.log('localMediaStream', localMediaStream)

                this.localMediaStream   = localMediaStream;
                console.log('this', this)

                let localVideoCam       = this.localVideoCam;
                localVideoCam.srcObject = localMediaStream;
                // localVideoCam.autoplay  = true;
                localVideoCam.volume = 0;

                localVideoCam.muted     = !audio;

                console.log('localVideoCam', localVideoCam)

                return this.pc.addStream( localMediaStream )
            } )
            .then( () => {
                this.setState({
                    localVideoConnected : video,
                    localAudioConnected : audio,
                    callOnLine          : true,
                })

            } )
            .catch( err => {
                console.log('generateLocalMediaStream closeVideoCall');

                console.log('err', err)

                this.closeVideoCall();
            } )
        )
    }


    onJoinedWEBRTCRoom( joinPayload, meta ){
        // console.log('----------onJoinedWEBRTCRoom payload------------', joinPayload)
        let { mediaConstraints } = joinPayload;

        let { userId } = meta.tokenObj;

        let myselfId = this.props.myself.id;

        let { candidates } = this.webrtcSignalingData;

        // console.log()
        let sessionDescription = this.pc.localDescription;

        let roomPayload = { sessionDescription, userId: myselfId, mediaConstraints };

        this.webRTCRoom.emitSdpOfferSignal( roomPayload );

        // if( Ru.isEmpty( candidates ) ){
        //     console.log(`There aren't any candidates`);
        //     return
        // }



        const sendCandidates = Ru.forEach( candidate => {

            let candidateRoomPayload = { candidate, userId: myselfId };

            this.webRTCRoom.emitCandidateSignal( candidateRoomPayload );
        } );

        sendCandidates( candidates );


        this.setState({
            remoteVideoConnected:   true,
            connected:              true,
        });

        console.log('this.webrtcAudio', this.webrtcAudio)
    }


    onLeftWEBRTCRoom( leavePayload, meta ) {

        console.log('onLeftWEBRTCRoom leavePayload', leavePayload)
        console.log('onLeftWEBRTCRoom meta', meta)

        let { userId } = meta.tokenObj;

        this.remoteUserId = null;

        let remoteVideoCam = this.remoteVideoCam;

        if( Ru.isNotNil(remoteVideoCam.srcObject) ){
            remoteVideoCam.srcObject.getTracks().forEach( track => track.stop() );
        }
        remoteVideoCam.srcObject = null;

        this.setState({ remoteUserId: null, })

        this.hangup();
    }



    onSdpAnswerSignal( roomPayload ){
        // console.log('onSDPAnswerSignal roomPayload', roomPayload);

        let { sessionDescription } = roomPayload;

        return(
            this.setRemoteDescription( sessionDescription )
            .catch( err => {
                console.log('onSdpAnswerSignal closeVideoCall');

                console.log('err', err)

                this.closeVideoCall();
            } )
        )
    }

    onSdpOfferSignal( roomPayload ){
        // console.log('onSDPOfferSignal payload', roomPayload);

        let myselfId = this.props.myself.id;

        let offerSessionDescription = roomPayload.sessionDescription;
        let { mediaConstraints, userId }     = roomPayload;

        this.createPC();

        // let mediaConstraints = {
        //     // audio: true,
        //     video: true
        // }

        return(
            this.setRemoteDescription( offerSessionDescription )
                .then( () => this.generateLocalMediaStream( mediaConstraints ) )
                .then( () => this.pc.createAnswer() )
                .then( sessionDescription => this.setLocalDescription( sessionDescription ) )
                .then( () => {

                    let answerSessionDescription = this.pc.localDescription;
                    let roomPayload = { sessionDescription: answerSessionDescription, userId: myselfId };

                    this.webRTCRoom.emitSdpAnswerSignal( roomPayload )
                } )
                .catch( err => {
                    console.log('onSdpOfferSignal closeVideoCall');

                    console.log('err', err)

                    this.closeVideoCall();
                } )
        )
    }

    onCandidateSignal( roomPayload ){
        // console.log('onCandidateSignal payload', roomPayload)

        let { candidate } = roomPayload;

        let rtcIceCandidate = new RTCIceCandidate( candidate );

        return(
            this.pc.addIceCandidate( rtcIceCandidate )
            .catch( err => {
                console.log('onCandidateSignal closeVideoCall');

                console.log('err', err)

                this.closeVideoCall();
            } )
        )
    }

    onRemoteConnectVideoSignal(){
        // console.log('onRemoteConnectVideoSignal')

        this.remoteVideoCam.srcObject = this.remoteVideoStream;


        this.setState({
            remoteVideoConnected:   true,
            showAvatar:             false
        });
    }


    onRemoteDisconnectVideoSignal(){
        // console.log('onRemoteDisconnectVideoSignal')

        this.remoteVideoCam.srcObject = null;

        this.setState({
            remoteVideoConnected:   false,
            showAvatar:             true
        });
    }


    closeVideoCall(){
        // console.log('closeVideoCall')
        let remoteVideoCam  = this.remoteVideoCam;
        let localVideoCam   = this.localVideoCam;

        if( Ru.isNotNil( this.pc ) ){

            if( Ru.isNotNil(remoteVideoCam) && Ru.isNotNil(remoteVideoCam.srcObject) ){
                remoteVideoCam.srcObject.getTracks().forEach( track => track.stop() );
                remoteVideoCam.srcObject = null;
            }

            if( Ru.isNotNil(localVideoCam) && Ru.isNotNil(localVideoCam.srcObject) ){
                localVideoCam.srcObject.getTracks().forEach( track => track.stop() );
                localVideoCam.srcObject = null;
            }

            this.pc.close();
            this.pc = null;
        }

        this.webrtcSignalingData = {
            candidates           : [],
            remoteSDPMediaSetup: null,
            isDTLSServer: false,
            mediaConstraints: {
                audio   : {
                    echoCancellation: false,
                    noiseSuppression: false
                },
                video: true,
            }
            // localSDPMediaSetup: null
        }


        this.setState( this.initialState )
    }


    //method to handle Chrome bug
    //https://groups.google.com/forum/#!topic/discuss-webrtc/gsw3OEAwNKo
    setRemoteDescription( initialSessionDescription ){
        // console.log('setRemoteDescription arg', initialSessionDescription)

        // let { sdp, type } = initialSessionDescription;
        //
        // let initialSdpObj = sdpLib.parse( sdp );
        // console.log('previous sdpObj', initialSdpObj)
        //
        // let remoteSDPMediaSetup = this.webrtcSignalingData.remoteSDPMediaSetup;
        // let newSDPMediaSetup = getSDPMediaSetup( initialSdpObj );
        //
        // console.log('remoteSDPMediaSetup', remoteSDPMediaSetup);
        // console.log('newSDPMediaSetup', newSDPMediaSetup);
        //
        //
        // let sdpObj = Ru.clone( initialSdpObj );
        //
        // if( Ru.isNil( remoteSDPMediaSetup ) ){
        //
        //     // console.log('remoteSDPMediaSetup is Nil')
        //
        //     // console.log('newSDPMediaSetup', newSDPMediaSetup);
        //
        //     this.webrtcSignalingData.remoteSDPMediaSetup = newSDPMediaSetup;
        // }
        //
        // else if(
        //     remoteSDPMediaSetup === SDP_MEDIA_SETUP.ACTPASS
        // ){
        //
        //     console.log('initialSdpObj sdpObj', initialSdpObj)
        //     sdpObj = setSDPMediaSetupToPassive( initialSdpObj );
        // }
        //
        // console.log('sdpObj', sdpObj)
        //
        // let newSdp = sdpLib.write( sdpObj );
        //
        // let sessionDescription = { type,  sdp:newSdp };

        let rtcSessionDescription = new RTCSessionDescription( initialSessionDescription );

        return(
            this.pc.setRemoteDescription( rtcSessionDescription )
        )
    }


    //method to handle Chrome bug
    //https://groups.google.com/forum/#!topic/discuss-webrtc/gsw3OEAwNKo
    setLocalDescription( initialSessionDescription ){
        // console.log('setLocalDescription arg', initialSessionDescription)


        // let { sdp, type } = initialSessionDescription;

        // let sdpObj = sdpLib.parse( sdp );
        //
        // let localSDPMediaSetup = this.webrtcSignalingData.localSDPMediaSetup;
        //
        // if( Ru.isNil( localSDPMediaSetup ) ){
        //
        //     console.log('localSDPMediaSetup is Nil')
        //
        //     let SDPMediaSetup = getSDPMediaSetup( sdpObj );
        //     console.log('SDPMediaSetup', SDPMediaSetup);
        //
        //     this.webrtcSignalingData.localSDPMediaSetup = SDPMediaSetup;
        // }
        //
        // else{
        //
        //     console.log('localSDPMediaSetup is not Nil')
        //     console.log('localSDPMediaSetup', localSDPMediaSetup)
        //     console.log('previous sdpObj', sdpObj)
        //
        //
        //     sdpObj = setSDPMediaSetupTo( localSDPMediaSetup, sdpObj );
        //     console.log('new sdpObj', sdpObj)
        // }
        //
        // let newSdp = sdpLib.write( sdpObj );

        // let sessionDescription = { type,  sdp:newSdp };

        let rtcSessionDescription = new RTCSessionDescription( initialSessionDescription );


        return(
            this.pc.setLocalDescription( rtcSessionDescription )
        )
    }





    /**
     * Switch states:
     * On/off video/audio functions
     */

    onClickToggleVideo(){

        let {callType, channel, hasVideo, hasVoice} = this.props;

        this.setState({ localVideoConnected: !this.state.localVideoConnected });
        this.props.dispatchSetWebRTC(callType, channel, !hasVideo, hasVoice)

        this.props.hasVideo ?
                this.webRTCRoom.emitDisconnectVideoSignal()
            :   this.webRTCRoom.emitConnectVideoSignal();
    }

    onClickToggleAudio(){

        let {callType, channel, hasVideo, hasVoice} = this.props;

        let localVideoCam = this.localVideoCam;
        localVideoCam.muted = true;

        this.props.dispatchSetWebRTC(callType, channel, hasVideo, !hasVoice)
        this.setState({ localAudioConnected: !this.state.localAudioConnected })
    }

}

export default WebRTCContainer;
