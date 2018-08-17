'use strict'

import Ru from 'rutils'

import React, { PureComponent } from 'react'

import { connect } from 'react-redux'

import { Grid, Row , Col } from 'react-bootstrap';

import { socket } from '../../services'

import PeerConnection from './components/PeerConnection';
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

        this.state = {
          clientId: '',
          callWindow: '',
          callModal: '',
          callFrom: '',
          localSrc: null,
          peerSrc: null
        };

        this.pc = {};
        this.config = null;
        this.startCallHandler = this.startCall.bind(this);
        this.endCallHandler = this.endCall.bind(this);
        this.rejectCallHandler = this.rejectCall.bind(this);
        this.setClientId = this.setClientId.bind(this)
    }

    setClientId() {
        let user = this.props.profile
        let clientId = user.firstName+'-'+user.lastName+'-'+user.id
        this.setState({ clientId })
        return clientId
    }

    componentWillMount() {


    }



    componentDidMount() {
        // let joinPayload = null;
        socket
        .emit('INIT_CONTEXT', this.setClientId() )
        .on('INIT_REQUEST_CALL', data => this.setState({ callModal: 'active', callFrom: data.from }))
        .on('INIT_CALL', (data) => {
            if (data.sdp) {
            this.pc.setRemoteDescription(data.sdp);
            if (data.sdp.type === 'offer') this.pc.createAnswer();
            } else this.pc.addIceCandidate(data.candidate);
        })
        .on('END_CALL', this.endCall.bind(this, false))

    }

    startCall(isCaller, friendId, config) {


        this.config = config;
        this.pc = new PeerConnection(friendId)
       .on('localStream', (src) => {
           const newState = { callWindow: 'active', localSrc: src };
           if (!isCaller) newState.callModal = '';
           this.setState(newState);
       })
       .on('peerStream', src => this.setState({ peerSrc: src }))
       .start(isCaller, config);

    }

    rejectCall() {
        socket.emit('END_CALL', { to: this.state.callFrom });
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
                    mediaDevice={this.pc.mediaDevice}
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
