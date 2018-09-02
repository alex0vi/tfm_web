'use strict'

import Ru from 'rutils'

import React, { PureComponent } from 'react'

import { Grid, Row , Col } from 'react-bootstrap';

class CallModal extends PureComponent {

    constructor(props) {
        super(props)
    }


    render(){
        return(
            <div className={'call-modal '+ this.props.callModal }>
                <p>
                    <span className="caller">{ this.props.friendId }</span> is calling ...
                </p>
                <button
                    className="btn-action fa fa-video-camera"
                    onClick={ () => this.props.acceptWithVideo(true) }
                />
                <button
                    className="btn-action fa fa-phone"
                    onClick={ () => this.props.acceptWithVideo(false) }
                />
                <button
                    className="btn-action hangup fa fa-phone"
                    onClick={ () => this.props.rejectCall() }
                />
            </div>
        )
    }
}

export default CallModal
