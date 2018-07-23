'use strict';

let ReactDOM = require('react-dom');

import React, {PureComponent}       from 'react';
import {Provider}                   from 'react-redux'
import {connect}                    from 'react-redux';
import R                            from 'ramda';
import Radium                       from 'radium';
import PropTypes                    from 'prop-types';




/*
This component use the sames styles as Channel
 */
@Radium
class Contact extends PureComponent {

    constructor(props){
        super(props)

        this.state = {
            isHover:  false,
        }

        this.onClickOpenNewChannel = this.onClickOpenNewChannel.bind(this);
        this.handlerSetState = this.handlerSetState.bind(this);
    }

    render(){
        let { item } = this.props;

        return (
            <div
                key            = { item.id }
                style          = { [ {backgroundColor: this.state.isHover ? 'rgb(245, 245, 245)' : ''}]}
                onClick        = { () => this.onClickOpenNewChannel() }
                onMouseEnter   = { () => this.handlerSetState('isHover', true)}
                onMouseLeave   = { () => this.handlerSetState('isHover', false)}
                className      = { 'channel' }
            >
                <div className = { 'channel-avatar' }>
                    <img src={item.avatar.sm} />
                </div>

                <div className = { 'channel-information'}>
                    <div className='channel-row'>
                        <div className="channel-name">{`${item.firstName} ${item.lastName}`}</div>
                    </div>
                </div>
            </div>
        );
    }


    onClickOpenNewChannel() {

        let {listType, currentRoomId, onClickUserOnNewGroup, openNewChannel, history  } = this.props;

        if(R.equals(listType,'newGroup')){
            onClickUserOnNewGroup();
        }
        else{
            //new chat, open existing chat or open existing group
            openNewChannel()
                .then(res => {
                    history.push(`/chat/${res.channel.item.id}/channels`)
                })
        }
    }

    handlerSetState(state, value){
        this.setState({[state]: value})
    }
}

Contact.defaultProps = {
    item                    : {},
    listType                : null,
    openNewChannel          : () => console.log('openNewChannel not exist'),
    onClickUserOnNewGroup   : () => console.log('onClickUserOnNewGroup not exist'),
    history                 : {},
};

Contact.propTypes = {
    item                    : PropTypes.object,
    listType                : PropTypes.string,
    openNewChannel          : PropTypes.func,
    onClickUserOnNewGroup   : PropTypes.func,
    history                 : PropTypes.object,
};

export default Contact;
