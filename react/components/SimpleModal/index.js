'use strict';

let ReactDOM      = require('react-dom');

import R from 'ramda';
import React, { PureComponent }     from 'react';
import PropTypes                    from 'prop-types';
import Radium                       from 'radium';
import {connect}                    from 'react-redux';
import {bindActionCreators}         from 'redux';

import {setSimpleModal}             from '../../../store/actionsCreators/communication/setSimpleModal';
import {setMessages}                from '../../../store/actionsCreators/communication/setMessages';
import {setChannels}                from '../../../store/actionsCreators/communication/setChannels';
import {resetCommunication}         from '../../../store/actionsCreators/communication/resetCommunication';
import {setActiveChannel}           from '../../../store/actionsCreators/communication/setActiveChannel';


const api                           =   require('../../../js/devel/modules-system/api-calls').apiv2;

const mapStateToProps = (state, ownProps) => {
    return {
        activeChannel       :   state.communication.activeChannel,
    }
}

const mapDispatchToProps = dispatch => {

    return bindActionCreators({
        dispatchSetSimpleModal          : setSimpleModal,
        dispatchSetMessages             : setMessages,
        dispatchSetChannels             : setChannels,
        dispatchResetCommunication      : resetCommunication,
        dispatchSetActiveChannel        : setActiveChannel,
    }, dispatch)
};


@connect(mapStateToProps, mapDispatchToProps)
@Radium
class SimpleModal extends PureComponent {

    constructor(props){
        super(props);

        this.onClickAccept               = this.onClickAccept.bind(this);
        this.onClickCancel               = this.onClickCancel.bind(this);
        this.onClickDeleteMessages       = this.onClickDeleteMessages.bind(this);
        this.onClickDeleteChat           = this.onClickDeleteChat.bind(this);
        this.onClickExitGroup            = this.onClickExitGroup.bind(this);
        this.onClickLightbox             = this.onClickLightbox.bind(this);
        this.onClickBlockUser            = this.onClickBlockUser.bind(this);
        this.onClickUnBlockUser          = this.onClickUnBlockUser.bind(this);
    }

    render(){
        let {isVisible, title, description, actionType} = this.props;

        if(!isVisible) return null;

        return (
            <div className='simple-modal' onClick={ this.onClickLightbox }>

                <div className='content-wrapper'>
                    <div className='title'>{title}</div>
                    <div className='description'>{description}</div>

                    <div className='action-buttons'>
                        <div className='button button-cancel' onClick={ this.onClickCancel }>Cancel</div>
                        <div className='button button-accept' onClick={ this.onClickAccept }>Accept</div>
                    </div>
                </div>
            </div>
        )
    }

    onClickLightbox(event) {
        if(R.equals(event.target.className, 'simple-modal')){
            this.onClickCancel();
        }
    }

    onClickCancel() {
        this.props.dispatchSetSimpleModal(false);
    }

    onClickAccept() {

        R.cond([
            [ R.equals('DELETE_MESSAGES'),      this.onClickDeleteMessages  ],
            [ R.equals('EXIT_GROUP'),           this.onClickExitGroup       ],
            [ R.equals('DELETE_CHAT'),          this.onClickDeleteChat      ],
            [ R.equals('BLOCK_USER'),           this.onClickBlockUser       ],
            [ R.equals('UNBLOCK_USER'),         this.onClickUnBlockUser     ],
            [ R.T,                              x => console.log(x)         ],
        ])(this.props.actionType);

        this.props.dispatchSetSimpleModal(false);
    }

    onClickDeleteMessages() {
        let channelId = this.props.activeChannel.item.id;

        Promise.all([
            api.get('user/channels'),
            api.put(`user/channels/${channelId}/clear`),
        ])
            .then( (data) => {
                this.props.dispatchSetChannels(data[0]);
                this.props.dispatchSetMessages();
            })
    }

    onClickDeleteChat() {
        let channelId = this.props.activeChannel.item.id;

        api.delete(`user/channels/${channelId}`)
            .then( () => {
                this.props.dispatchResetCommunication();

                api.get(`user/channels/`)
                    .then( (channels) => {
                        this.props.dispatchSetChannels(channels);
                        this.props.history.replace({pathname: '/'});
                    })
            })
    }

    onClickExitGroup() {
        let channelId = this.props.activeChannel.item.id;

        api.put(`user/channels/${channelId}/leave`)
            .then( () => {
                api.get(`user/channels/${channelId}`)
                    .then( (channel) => {
                        this.props.dispatchSetActiveChannel(channel.type, channel.item, this.props.activeChannel.title);
                    })
            })
    }

    onClickBlockUser() {
        let channelId = this.props.activeChannel.item.id;

        api.put(`user/channels/${channelId}/block`)
            .then( () => {
                Promise.all([
                    api.get(`user/channels/`),
                    api.get(`user/channels/${channelId}`)
                ])
                    .then( ([channels, channel]) => {
                        this.props.dispatchSetChannels(channels);
                        this.props.dispatchSetActiveChannel(channel.type, channel.item, this.props.activeChannel.title);
                    })
            })
    }

    onClickUnBlockUser() {
        let channelId = this.props.activeChannel.item.id;

        api.put(`user/channels/${channelId}/unblock`)
            .then( () => {
                Promise.all([
                    api.get(`user/channels/`),
                    api.get(`user/channels/${channelId}`)
                ])
                    .then( ([channels, channel]) => {
                        this.props.dispatchSetChannels(channels);
                        this.props.dispatchSetActiveChannel(channel.type, channel.item, this.props.activeChannel.title);
                    })
            })
    }

}



SimpleModal.defaultProps = {
    isVisible:          false,
    title:              '',
    description:        '',
    actionType:         'NOT_DEFINED',
    history:            {},
};

SimpleModal.propTypes = {
    isVisible:          PropTypes.bool,
    title:              PropTypes.string,
    description:        PropTypes.string,
    actionType:         PropTypes.string,
    history:            PropTypes.object,
};



export default SimpleModal;
