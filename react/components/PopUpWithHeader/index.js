'use strict';

import React, { Component } from 'react';
import autobind             from 'autobind-decorator';

import R                    from 'ramda';
import _                    from 'lodash';
import Radium               from 'radium';


import ListOfShares         from './components/ListOfShares';
import ListOfEmotions       from './components/ListOfEmotions';
import ListOfUsers          from './components/ListOfUsers';
import PublicState          from './components/PublicState';

const USER_SETTINGS         = require("../../../js/devel/modules-system/module-user-settings");




const styles = {
  container: {
      display: 'flex',
      flex: 1,
      flexWrap: 'wrap',
      position: 'absolute',
      zIndex: 10,
      width: 433,
      height: 'auto',
      backgroundColor: 'white',
      boxShadow: '0 0 8px 0 rgba(0,0,0,0.12), 0 8px 8px 0 rgba(0,0,0,0.24)',
      borderRadius: 3,
  },
  topBarContainer:{
      position: 'relative',
      display: 'flex',
      width: '100%',
      height: 30,
      borderBottom: 'solid 1px #d2d2d2',
      alignItems: 'center',
  },
  contentWrapper:{
        position: 'relative',
        width: '100%',
        margin: 10,
        overflow: 'scroll',
  },
  closeIconWrapper:{
        position: 'absolute',
        width: 15,
        height: 15,
        borderRadius: '50%',
        backgroundColor: '#f5f5f5',
        right: 10,
        cursor: 'pointer',
  },
  closeIcon:{
      position: 'relative',
      fontSize: 15,
  },
}


// @autobind
@Radium
class PopUpWithHeader extends Component{

    constructor(props){

        super(props);

        this.renderEmotion = this.renderEmotion.bind(this);
        this.renderChangeStatusPublicPrivate= this.renderChangeStatusPublicPrivate.bind(this);
        // this.closePopUp = this.closePopUp.bind(this);
        this.hidePopup = this.hidePopup.bind(this);

    }

    hidePopup(){
        this.props.onClick();
    }


    getRenderInformation(type){
        return R.cond([
            [ R.equals('USERS'),                        R.always({title: 'Users'  ,funcClick: () => this.renderContentUsers()})],
            [ R.equals('EMOTIONS'),                     R.always({title: 'Emotions'  ,funcClick: () => this.renderEmotions()})],
            [ R.equals('SHARES'),                       R.always({title: `People who has shared this`  ,funcClick: () => this.renderShares()})],
            [ R.equals('PUBLIC_STATE_POPUP'),           R.always({title: 'Privacy change'  ,funcClick: () => this.renderChangeStatusPublicPrivate()})],
            [ R.T,                                      R.always({title: 'Undefined'  ,funcClick: () => this.renderUndefined()})],
        ])(type);
    }

    render(){
        return(
            this.props.isVisible ? this.renderWrapper() : null
        )
    }

    renderWrapper(){
        let popUpContent = this.getRenderInformation(this.props.type)

        return(
            <div
                style       = {styles.container}
                className   = {'PopUpGeneral'}
            >
                <div style={styles.topBarContainer}>
                    <span style={[styles.textTop, {paddingLeft: 10}]}>{popUpContent.title}</span>
                    <div
                        style={styles.closeIconWrapper}
                        onClick= { () => this.hidePopup() }
                    >
                        <i className="material-icons" style={styles.closeIcon}>close</i>
                    </div>
                </div>
                <div style={styles.contentWrapper} >{popUpContent.funcClick()}</div>
            </div>
        )
    }



    renderChangeStatusPublicPrivate(){
        return(

            <div style={{width: '100%', alignItems: 'center', display: 'flex', justifyContent: 'center', height: 130 }}>
            <PublicState
                  board = {this.props.content.board}
                  setNullOpenDialogChangePublicPrivateBoard = { () => this.props.content.setNullOpenDialogChangePublicPrivateBoard() }
                  refreshFilesystem = { R.isNil(this.props.content.refreshFilesystem) ? null : () => this.props.content.refreshFilesystem() }
              >
              </PublicState>
            </div>

        )
    }

    renderUndefined(){
        return (
            <div style={{width: 100, height: 100}}></div>
        )
    }

    renderShares(){
        return(
            <ListOfShares
                content = { this.props.content }
            />
        )
    }

    renderEmotions(){
        return (
            R.addIndex(R.map)((emotion, i) => this.renderEmotion(emotion,i),this.props.content.fakeIcons)
        )
    }



    renderEmotion(emotion, i){
        return(
            <ListOfEmotions
                i       = {i}
                emotion = {emotion}
                content = {this.props.content}
            />
        )
    }

    renderContentUsers(){
        return (
            R.addIndex(R.map)((user, i) => this.renderUser(user, i),this.props.content)
        )
    }

    renderUser(user, i){
        return(
            <ListOfUsers
                key  = {i}
                user = {user}
                history = {this.props.history}
                hidePopup = {() => this.hidePopup()}
            />
        )
    }

}

export default PopUpWithHeader;
