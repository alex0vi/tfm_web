'use strict';

let ReactDOM = require('react-dom');

import React, {PureComponent}       from 'react';
import {Provider}                   from 'react-redux'
import {connect}                    from 'react-redux';
import R                            from 'ramda';
import Radium                       from 'radium';
import PropTypes                    from 'prop-types';
import { Picker }                   from 'emoji-mart';
import { emojicss }                 from 'emoji-mart/css/emoji-mart.css';


import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import {sendNewByType}              from '../../utils';
import {getCurrentRoom}             from '../../../../utils/';
import {textWithEmojisToNative}     from '../../../../utils/Emojify';

import AddapsText                   from '../../../../../../AddapsComponents/AddapsText';
import {COLORS}                     from '../../../../../../globals/colors.js';



const {ipcRenderer}                 = require('electron')


const avatarSize = 60;

const styles = {
    container: {
        display:        'flex',
        width:          '100%',
        height:         '100%',
        alignItems:     'center',
        borderTop:      '0.5px solid #E0E0E0',
        padding:        '0px 10px',
    },
}




@connect(null, null)
@Radium
class BoxWithMessage extends PureComponent {

    constructor(props){
        super(props);

        this.state = {
        }

        // this.sendNewByEnter     = this.sendNewByEnter.bind(this);
    }



    render(){
        let {text} = this.props;

        return (
            <div
                className   = {'box-with-message'}
                style       = {   [styles.container]  }
            >
                <div className={'text'}>{text}</div>
            </div>
        );
    }
}



BoxWithMessage.defaultProps = {
    text     :  '',
};

BoxWithMessage.propTypes = {
    text    :   PropTypes.string,
}

export default BoxWithMessage;
