'use strict';

let ReactDOM = require('react-dom');

import React, {PureComponent}           from 'react';
import {Provider}                       from 'react-redux'
import {connect}                        from 'react-redux';
import {bindActionCreators}             from 'redux';
import R                                from 'ramda';
import Radium                           from 'radium';
import PropTypes                        from 'prop-types';


import Chat                             from '../Chat';
import InfoMessage                      from '../InfoMessage';

import {onSwitchChannel}                from '../../utils';


const chainIndexed = R.addIndex( R.chain )
const listOfSideBars = ['newChat', 'channels', 'newGroupUsers', 'newGroupConfig'];
const getChannel= R.pipe(
    R.split('/'),
    R.drop(2),
    chainIndexed( (x, i) => (i === 0 && R.contains(x,listOfSideBars)) ? [null, x ] : x ),
    R.head,
);





@Radium
class MainContent extends PureComponent {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let {channel} = this.props;

        if( !R.isNil(channel) ) {
            this.props.history.push({pathname:`/chat/${channel.item.id}/channels`, state: {item: channel.item, type: channel.type}});
            onSwitchChannel(channel);
        }
    }

    render() {
        let ChannelId = getChannel(this.props.location.pathname);

        if(R.isNil(this.props.location.state) && R.isNil(ChannelId)) {
            return(
                <InfoMessage cubeInstance={this.props.cubeInstance} text = {'Select a chat to start'}/>
            )
        }
        else {
            return(
                <Chat
                    history                     = { this.props.history }
                    openInformationSection      = { () => this.props.openInformationSection()}
                    isOpenInformationSection    = { this.props.isOpenInformationSection}
                    cubeInstance                = { this.props.cubeInstance}
                    room                        = { this.props.currentRoom}
                    moveChannelToTop            = { this.props.moveChannelToTop}
                />
            );
        }
    }
}

export default MainContent;
