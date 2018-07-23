'use strict';

let ReactDOM = require('react-dom');

import React, {PureComponent}       from 'react';
import {Provider}                   from 'react-redux'
import {connect}                    from 'react-redux';
import R                            from 'ramda';
import Radium                       from 'radium';
import PropTypes                    from 'prop-types';



import {convertTime}                from '../../cubes/Communication/utils';
import {COLORS}                     from '../../globals/colors.js';
import {emojify}                    from '../../cubes/Communication/utils/Emojify';




const mapStateToProps = (state, ownProps) => {

    return {
        activeChannel       :    state.communication.activeChannel,
    }
}

@connect(mapStateToProps, null)
@Radium
class Channel extends PureComponent {

    constructor(props){
        super(props)
    }

    render(){
        let { type, item, style, activeChannel, unreadMessages } = this.props;

        let title               = type === 'CONTACT' ? `${item.user.firstName} ${item.user.lastName}` : item.label;
        let notificationNumber  = item.unreadMessages;
        let lastMessage         = null;
        let time                = null;

        // if(!R.isNil(item.lastMessage)) {
        //     lastMessage         = item.lastMessage.item.text;
        //     time                = convertTime(item.lastMessage.insertedAt);
        // }


        let avatar = type === 'CONTACT' ? item.user.avatar.sm : item.avatar.sm;

        let auxStyleTitle = {width: 110};
        let auxStyleLastMsg = {width: 150}

        if(this.props.minimizedChannelSM || this.props.minimizedChannelXSM){
            if(this.props.minimizedChannelXSM){
                auxStyleTitle = {width: 75};
                auxStyleLastMsg = {width: 80}
            }
            else{
                auxStyleTitle = {width: 110};
                auxStyleLastMsg = {width: 130}
            }
        }
        let isActiveChannel = R.equals(item.id, activeChannel.item.id)

        return (
            <div
                className   = { 'channel' }
                style       = {[{ backgroundColor: isActiveChannel ? '#F5F5F5' : '#ffffff'}, style]}
                onClick     = { () => this.props.onClick() }
            >

                <div className = { 'channel-avatar' }>
                    <img src={ avatar } />
                </div>

                <div className = { 'channel-information'}>

                    { /* Channel Name */ }
                    <div className='channel-row' >
                        <span className="channel-name" style= {[auxStyleTitle]}>{title}</span>
                        { this.props.minimizedChannelSM || this.props.minimizedChannelXSM ? null : this.renderLastMessgTime(item)}
                    </div>

                    { /* Last Message */ }
                    <div className='channel-row'>

                        <span className='channel-last-message' style = { auxStyleLastMsg} >
                            {!R.isNil(item.lastMessage) ? emojify(item.lastMessage.item.text) : null}
                        </span>

                        {
                            /* unread messages */
                            notificationNumber > 0 ?
                                <div className='channel-number-wrapper'>
                                    <span className='notification-number'>{notificationNumber}</span>
                                </div>
                            :
                                null
                        }
                        {
                            item.bloqued ?
                                <i className="material-icons channel-icon">block</i>
                                :
                                null
                        }


                    </div>

                    { this.props.minimizedChannelSM || this.props.minimizedChannelXSM ? this.renderLastMessgTime(item) : null}

                </div>
            </div>
        );
    }


    renderLastMessgTime(item) {

        return(
             <span className='date-time'>
                {
                    !R.isNil(item.lastMessage) ? convertTime(item.lastMessage.insertedAt) : null
                }
            </span>
        )
    }


}

Channel.defaultProps = {
    style                   : {},
    minimizedChannelSM      : false,
    minimizedChannelXSM     : false,
    item                    : {},
    type                    : '',
    onClick                 : () => {},
};

Channel.propTypes = {
    style                   : PropTypes.object,
    minimizedChannelSM      : PropTypes.bool,
    minimizedChannelXSM     : PropTypes.bool,
    item                    : PropTypes.object,
    type                    : PropTypes.string,
    onClick                 : PropTypes.func,
};

export default Channel;
