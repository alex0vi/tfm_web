'use strict';

let ReactDOM = require('react-dom');

import R                        from 'ramda';
import React, {PureComponent}   from 'react';
import PropTypes                from 'prop-types';
import {connect}                from 'react-redux';
import {bindActionCreators}     from 'redux';

import Radium                   from 'radium';
import autobind                 from 'autobind-decorator';



const mapStateToProps = (state, ownProps) => {
    return {
        notifications: state.notifications.notifications,
    }
};



@connect(mapStateToProps, null)
@Radium
class NotificationWithButton extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            show: true,
        }
    }


    render() {
        let notificationCounter = this.props.notifications[this.props.text].cont;

        return (
            <div className="information-bar">
                <div className="info-bar-wrapper">

                    <div className="info-bar-icon">
                        <i className="material-icons">{ this.props.icon }</i>

                        {
                            notificationCounter > 1 ?
                                    <div className="info-bar-number">
                                        <span>{ notificationCounter }</span>
                                    </div>
                                :
                                    null
                        }

                    </div>


                    <div className="info-bar-text">{ this.props.text }</div>

                    {
                        !R.isNil(this.props.acceptCallback) ?
                            <div className="info-bar-other">
                                <button onClick={ () => this.onAccept() }>{ this.props.buttonText }</button>
                            </div>
                            :
                            null
                    }


                    <div
                        className="info-bar-close-button"
                        onClick={ () => this.onClose() }
                    >
                        <i className="material-icons">close</i>
                    </div>

                </div>

                {
                    this.props.isAudioActive ?
                        <audio
                            id          = { "notification-audio" }
                            ref         = { 'notification-audio' }
                            autoPlay    = { this.props.isAutoPlay }
                            controls    = { false }
                            loop        = { this.props.loop }
                            src         = { this.props.audioSrc }
                        />
                    :
                        null
                }


            </div>
        );
    }

    onAccept() {
        this.props.acceptCallback();
        this.props.closeAction();
    }

    onClose() {
        this.props.closeCallback();
        this.props.closeAction();
    }
}


NotificationWithButton.defaultProps =  {
    // notification props
    icon:               "update",
    text:               "Test notification",
    buttonText:         "Accept",
    acceptCallback:     null,
    closeCallback:      R.T,
    closeAction:        R.T,

    // audio props
    isAudioActive:      false,
    isAutoPlay:         false,
    controls:           false,
    loop:               false,
    audioSrc:           '',
};

NotificationWithButton.propTypes = {
    icon:               PropTypes.string,
    text:               PropTypes.string,
    buttonText:         PropTypes.string,
    acceptCallback:     PropTypes.func,
    closeCallback:      PropTypes.func,
    closeAction:        PropTypes.func,
    isAudioActive:      PropTypes.bool,
    isAutoPlay:         PropTypes.bool,
    controls:           PropTypes.bool,
    loop:               PropTypes.bool,
    audioSrc:           PropTypes.string,
};

export default NotificationWithButton;
