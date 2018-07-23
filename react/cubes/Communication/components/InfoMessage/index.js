'use strict';

let ReactDOM = require('react-dom');

import React, {PureComponent}       from 'react';
import R                            from 'ramda';
import Radium                       from 'radium';
import PropTypes                    from 'prop-types';

import {COLORS}                     from '../../../../globals/colors.js';

import {onSwitchChannel}            from '../../utils';


const api                           =   require('../../../../../../app/js/devel/modules-system/api-calls').apiv2;


const avatarSize    = 60;
// const sideBarWidth  = '300px';

const getAreaStyle = R.cond([
        [ R.equals('left'),           R.always({container:{padding:'10px 25px', width: 'auto'}})],
        [ R.equals('right'),          R.always({container:{position: 'absolute',top: 40, bottom: 0, zIndex: 1,right: 0, display:'flex', padding:5,}})],
        [ R.T,                        R.always({container:{position: 'absolute',top: 40, bottom: 0, zIndex: 1,right: 0, display:'flex', padding:5,}})],
]);


const getPositionStyle = R.cond([
        [ R.equals('topLeft'),            R.always({style: {justifyContent:'flex-start', alignItems: 'flex-start'}})],
        [ R.equals('topCenter'),          R.always({style: {justifyContent:'center', alignItems: 'flex-start'}})],
        [ R.equals('topRight'),           R.always({style: {justifyContent:'flex-end', alignItems: 'flex-start'}})],
        [ R.equals('center'),             R.always({style: {justifyContent:'center', alignItems: 'center'}})],
        [ R.equals('bottomLeft'),         R.always({style: {justifyContent:'flex-start', alignItems: 'flex-end'}})],
        [ R.equals('bottomCenter'),       R.always({style: {justifyContent:'center', alignItems: 'flex-end'}})],
        [ R.equals('bottomRight'),        R.always({style: {justifyContent:'flex-end', alignItems: 'flex-end'}})],
        [ R.T,                            R.always({style: {justifyContent:'center', alignItems: 'center'}})],
]);



@Radium
class InfoMessage extends PureComponent {

    constructor(props){
        super(props)
    }

    componentDidMount() {

        if(!R.isNil(this.props.channelId)) {
            api.get(`user/channels/${this.props.channelId}`)
                .then( (channel) => {
                    onSwitchChannel(channel, null);

                    this.props.history.replace({ pathname: `/channels/${this.props.channelId}` });
                })

        }
    }

    render(){

        let {area, position, text} = this.props

        let {container}    = getAreaStyle(area)
        let {style}        = getPositionStyle(position);
        return (
            <div
                style = { [style, container]  }
                className = {'right-side-communication-cube'}
            >
                    <span>{text}</span>
            </div>
        );
    }

}


InfoMessage.defaultProps = {
    text        : 'No results found.',
    area        : 'right',
    position    : 'center',
    channelId   : null,
};

InfoMessage.propTypes = {
    text        : PropTypes.string,
    area        : PropTypes.string,
    position    : PropTypes.string,
    channelId   : PropTypes.number,
}


export default InfoMessage;
