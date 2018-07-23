'use strict';

let ReactDOM                    = require('react-dom');

import React, { PureComponent } from 'react';
import _                        from 'lodash';
import R                        from 'ramda';
import Radium                   from 'radium';
import autobind                 from 'autobind-decorator';

import {COLORS}                   from '../../globals/colors.js';
import CONSTANTS                from '../../globals/constants.js';

import {
    MdPersonAdd,
    MdRssFeed
} from 'react-icons/lib/md';

const api           =   require('../../../../app/js/devel/modules-system/api-calls').apiv2;


let styles = {
    containerButton: {
        position: 'relative',
        display: 'flex',
        height: 27,
        borderRadius: 20,
        justifyContent: 'center',
        margin: '0 5px',
        minWidth: 120,
    },
    button: {
        display: 'flex',
        height: 25,
        borderRadius: 20,
        outline: 'none',
        border: 'none',
        justifyContent: 'center',
        width: '100%',
    },
    icon: {
        marginRight: 5,
        position: 'relative',
        top: 2,
        fontSize: 17,
    }
}


/**
    Component to render a social button depending on the type
**/
// @autobind
@Radium
class ButtonSocial extends PureComponent {

    constructor(props){
      super(props);

    }


    //buttons types

    getButtonInformation(type,status){
        return R.cond([
            [ R.equals('friend'),                (type,status) => this.getFriendInformationStatus(status)],
            [ R.equals('following'),             (type,status) => this.getFollowingInformationStatus(status)],
            [ R.equals('request'),               (type,status) => this.getRequestInformationStatus(status)],
            [ R.T,                               R.I],
        ])(type,status);
    }

    getRequestInformationStatus(status){
        return R.cond([
            [ R.equals('CANCEL'),             R.always({icon: ''       , text: 'Cancel'           , style: 'whiteButton'    , funcClick: () => this.props.cancelFunct()})],
            [ R.equals('ACCEPT'),             R.always({icon: ''       , text: 'Send Comment'     , style: 'redButton'      , funcClick: () => this.props.acceptFunct()})],

        ])(status);
    }




    getFriendInformationStatus(status){
        return R.cond([
            [ R.equals('FRIEND'),                              R.always({icon: CONSTANTS.ICONS.DONE       , text: CONSTANTS.FEED.SOCIAL_BUTTON_FRIENDS         , style: 'whiteButton'    , funcClick: () =>{}})],
            [ R.equals('FRIENDSHIP_REQUEST_SENT'),             R.always({icon: CONSTANTS.ICONS.SEND       , text: CONSTANTS.FEED.SOCIAL_BUTTON_CANCEL_REQUEST  , style: 'redButton'      , funcClick: () => this.onPressCancelFriendshipRequest()})],
            [ R.equals('FRIENDSHIP_REQUEST_RECEIVED'),         R.always({icon: CONSTANTS.ICONS.ACCESS_TIME, text: CONSTANTS.FEED.SOCIAL_BUTTON_ACCEPT          , style: 'redButton'      , funcClick: () => this.onPressAccept()})],
            [ R.equals('NOT_FRIEND'),                          R.always({icon: CONSTANTS.ICONS.PERSON_ADD , text: CONSTANTS.FEED.SOCIAL_BUTTON_ADD_FRIEND      , style: 'redButton'      , funcClick: () => this.onPressAddFriend()})],
            [ R.T,                                             R.I],
        ])(status);
    }


    getFollowingInformationStatus(status){
        return R.cond([
            [ R.equals(true),          R.always({icon: CONSTANTS.ICONS.RSS_FEED, text: CONSTANTS.FEED.SOCIAL_BUTTON_FOLLOWING   , style: 'whiteButton'  , funcClick: () => this.onPressFollowing()})],
            [ R.equals(false),         R.always({icon: CONSTANTS.ICONS.RSS_FEED, text: CONSTANTS.FEED.SOCIAL_BUTTON_FOLLOW      , style: 'redButton'    , funcClick: () => this.onPressFollow()})],
            [ R.T,                     R.I],
        ])(status);
    }


    //buttons functions

    onPressCancelFriendshipRequest() {
        api.delete('user/friendshipPending/sent/' + this.props.id)
        .then(data => {
          this.props.onChange( 'NOT_FRIEND')
        })
      }
      onPressAccept() {
        api.put('user/friends/' + this.props.id)
        .then(data => {
          this.props.onChange('FRIEND')
        })
      }
      onPressAddFriend() {
          api.put('user/friendshipPending/sent/' + this.props.id)
          .then(data => {
            this.props.onChange('FRIENDSHIP_REQUEST_SENT')
          })
      }
      onPressFollowing() {
        api.delete('user/following/users/' + this.props.id)
        .then(data => {
         this.props.onChange(false)
        })
      }
      onPressFollow() {
        api.put('user/following/users/' + this.props.id)
        .then(data => {
          this.props.onChange(true)
        })
      }


   render() {

       let item = this.getButtonInformation(this.props.type, this.props.status);
       let borderContainerColor  = item.style === 'whiteButton' ? `1px solid ${COLORS.primary}` : 'none';
       let buttonBackgroundColor = item.style === 'whiteButton' ? {backgroundColor:'white'} : {backgroundColor:COLORS.primary};
       let buttonColor           = item.style === 'whiteButton' ? COLORS.primary : 'white';
       let iconStyle = R.merge(styles.icon, {color: buttonColor});


        return (
            <div
                style = {[styles.containerButton,{border: borderContainerColor}]}
            >
                <button
                  style = {[styles.button,buttonBackgroundColor, this.props.style ]}
                  onClick={ item.funcClick }
                >
                    <i style={iconStyle} className="material-icons">{item.icon}</i>
                    <span style={{color: buttonColor}}>{item.text}</span>
                </button>
            </div>


        );
   }
}

export default ButtonSocial;
