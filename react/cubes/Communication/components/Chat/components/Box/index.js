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

import {COLORS}                     from '../../../../../../globals/colors.js';



const {ipcRenderer}                 = require('electron')


const avatarSize = 60;

const styles = {
    container: {
        display:        'flex',
        width:          '100%',
        height:         '100%',
        // borderTop:      '1px solid #E0E0E0',
        alignItems:     'center',
        borderTop:      '0.5px solid #E0E0E0',
        padding:        '0px 10px',
    },
    message: {
        flex:           1,
    },
    button: {
        width:          '50px',
        cursor:         'pointer',

    },
    buttonText: {
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        height:         '50px',
        color:          COLORS.primary,
        fontSize:       '14px'
    },

    pickerWrapper: {
        position:           'absolute',
        left:               0,
        bottom:             '50px',
        backgroundColor:    'white',
        width:              '100%',
        padding:            '.3em .6em',
        zIndex:             '2'
    },
    emojiButton: {
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        height:         '50px',
        cursor:         'pointer',

    },
}


const mapStateToProps = (state, ownProps) => {

    return {
        activeChannel      :   state.communication.activeChannel,
    }
}


@connect(mapStateToProps, null)
@Radium
class Box extends PureComponent {

    constructor(props){
        super(props);

        this.state = {
            inputText: '',
            showEmojiPicker : false,
        }

        this.sendNewByEnter     = this.sendNewByEnter.bind(this);
        this.sendMessage        = this.sendMessage.bind(this);
        this.emojiPicker        = this.emojiPicker.bind(this);
        this.toggleEmojiPicker  = this.toggleEmojiPicker.bind(this);
        this.onAddEmoji         = this.onAddEmoji.bind(this);
    }

    componentDidMount() {
        ipcRenderer.on('EscKey',() => this.setState({showEmojiPicker: false}) );
    }

    componentUnMount() {
        ipcRenderer.removeListener('EscKey',() => this.setState({showEmojiPicker: false}));
    }


    render(){
        let iconEmojis = this.state.showEmojiPicker ? 'keyboard_arrow_down' : 'sentiment_very_satisfied';
        return (
            <div
                style = {   [styles.container]  }
            >
                <div style = {   [styles.message] }>

                    <input
                        type        = { "text" }
                        onChange    = { (text) => this.onChangeMessageText(text) }
                        style       = { {border: 'none' ,width: '100%'} }
                        placeholder = { "Write a message..." }
                        value       = { textWithEmojisToNative(this.state.inputText) }
                        onKeyDown   = { (e) => this.sendNewByEnter(e.key) }
                    />

                </div>

                <div>
                    <div
                        style = { styles.emojiButton }
                        onClick={ () => this.toggleEmojiPicker() }
                    >
                        <i style ={{color:'#9E9E9E', fontSize: 22,}} className="material-icons">{iconEmojis}</i>
                    </div>

                    { this.emojiPicker() }
                </div>

                <div
                    style   = { [styles.button] }
                    onClick = { () => this.sendMessage() }
                >
                    <span style = {styles.buttonText}>SEND</span>
                </div>
            </div>
        );
    }



    onChangeMessageText(text){
        this.setState({
            inputText:  text.target.value,
        });
    }

    sendMessage() {
        let room = getCurrentRoom();
        let {scrollToBottom, moveChannelToTop} = this.props;

        if(!R.isEmpty(this.state.inputText)) {
            sendNewByType(this.props.activeChannel, this.props.myself, room, this.props.type, this.state.inputText);
            this.setState({
                inputText: '',
                showEmojiPicker: false,
            });
            scrollToBottom();
            moveChannelToTop();
        }
    }

    sendNewByEnter(key) {
        if(key === 'Enter') {
            this.sendMessage();
        }
    }

    emojiPicker() {
        if(this.state.showEmojiPicker) {

            return (
                <Picker
                    title   = {''}
                    set     = {'twitter'}
                    style   = {{position: 'absolute', right: 0, bottom: '50px'}}
                    i18n    = {{ search: 'Recherche', categories: { search: 'Results', recent: 'Recents' } }}
                    onClick = { (emoji, event) => this.onAddEmoji(emoji) }
                />
            )
        }
    }

    onAddEmoji(emoji) {
        this.setState({
            inputText:  `${this.state.inputText}${emoji.colons}`

        })
    }

    toggleEmojiPicker() {
        this.setState({showEmojiPicker: !this.state.showEmojiPicker});
    }


}



Box.childContextTypes = {
    // item:               PropTypes.object,
    // type:               PropTypes.string,
    // isActiveChannel:    PropTypes.bool,
    // onClickChannel:     PropTypes.func,
}

export default Box;
