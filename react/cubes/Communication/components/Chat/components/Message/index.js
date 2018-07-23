'use strict';

let ReactDOM = require('react-dom');

import React, {PureComponent}       from 'react';
import {Provider}                   from 'react-redux'
import {connect}                    from 'react-redux';
import R                            from 'ramda';
import Radium                       from 'radium';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import PropTypes                    from 'prop-types';
// import ReactEmoji                   from 'react-emoji';
// import { toArray }                  from 'react-emoji-render';

import {COLORS}                     from '../../../../../../globals/colors.js';
import {emojify}                    from '../../../../utils/Emojify';
import {getTime}                    from '../../../../utils';

const avatarSize = 30;

const styles = {
    container: {
        display:            'flex',
        alignItems:         'flex-end',
        margin:             '10px',
        position:           'relative',
    },
    avatar: {
        width:              avatarSize,
        height:             avatarSize,
        borderRadius:       avatarSize/2,
        marginRight:        '10px'
    },
    text: {
        borderRadius:       '30px',
        padding:            '10px 15px 0px 15px',
        fontSize:           '14px',
        display:            'flex',
    },
    time: {
        color:              '#757575',
        fontFamily:         "Avenir Next",
        fontSize:           10,
        display:            'flex',
        marginLeft:         10,
        marginTop:          20,
    },
}

const mapStateToProps = (state, ownProps) => {

    return {
        myself:           state.user,
    }
}


@connect(mapStateToProps, null)
@Radium
class Message extends PureComponent {

    constructor(props){
        super(props);

        this.state = {
            text: '',
        }
    }


    render(){
        let { item, user, insertedAt } = this.props;
        let isMyself = user.id === this.props.myself.id;
        let time = getTime(insertedAt);

        return (
            <div
                key = {'wrapperMsg'}
                className = { 'selectable-element' }
                style = { [styles.container, {justifyContent: isMyself ? 'flex-end' : 'flex-start'} ]  }
            >
                {
                    isMyself ?
                        null
                        :
                        <img key = {'imgMsg'} style={styles.avatar} src={user.avatar.xs} />
                }


                <span
                    key = {'textMsg'}
                    className = { 'selectable-element' }
                    style = {[
                        styles.text,
                        {backgroundColor:   isMyself ? COLORS.primary   : '#EDECED' },
                        {color:             isMyself ? '#ffffff'        : '#000000' }
                    ]}
                >

                    { R.map(this.renderText, emojify(item.text)) }

                    <div>
                        <span
                            key = {'timeMsg'}
                            style={[
                                styles.time,
                                {color: isMyself ? '#ffffff' : '#757575'}
                            ]}
                        >{time}</span>
                    </div>
                </span>

            </div>
        );
    }

    renderText(word){
        // return (emojify(item.text));
        if(R.equals(R.type(word), "String" )) return R.concat(word, ' ');
        return word;
    }
}

Message.defaultProps = {
    item        : {},
    user        : {},
    insertedAt  : '',
};

Message.propTypes = {
    text        : PropTypes.object,
    user        : PropTypes.object,
    insertedAt  : PropTypes.string,
}

export default Message;
