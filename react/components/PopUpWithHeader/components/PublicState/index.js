'use strict';

import R from 'ramda';
import React, { Component }     from 'react';
import _                        from 'lodash';
import Radium                   from 'radium';
import { connect }              from 'react-redux';
import { MdInfo }               from 'react-icons/lib/md';
import { bindActionCreators }   from 'redux';
import autobind                 from 'autobind-decorator';

import eventEmitter             from '../../../../services/eventEmitterService';

import {COLORS}                   from '../../../../globals/colors.js';
import CONSTANTS                from '../../../../globals/constants.js';
import {openBoardAdapter}       from '../../../../../js/devel/entities/cubes/reactCubes/Functions/ReactToElectron.js';

import {setPublicBoards}        from '../../../../../store/actionsCreators/social/setPublicBoards.js'


const api           =   require('../../../../../../app/js/devel/modules-system/api-calls').apiv2;

const styles = {
    container: {
        display: 'flex',
        flex: 1,
        flexWrap: 'wrap'
    },
    boardContainer: {
        width: 'calc(50% - 10px)',
        height: '200px',
        padding: '5px',
        backgroundSize: 'cover',
        border: 'none',
        position: 'relative',
        margin: '5px'
    },
    cover: {
        width: '100%',
        height: 'auto',
        padding: 0
    },
    avatar: {
        marginHorizontal: 10,
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        backgroundColor: 'white',
        marginRight: 10
    },
    topbar: {
        display: 'flex',
        position: 'absolute',
        top: 0,
        left: 0,
        flexDirection: 'row',
        height: '40px',
        backgroundColor: 'transparent',
        alignItems: 'center',
        width: '100%'
    },
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        flexDirection: 'row',
        height: 40,
        backgroundColor: 'transparent',
        // justifyContent: 'center',
        paddingLeft: 10,
        alignItems: 'center'
    },
    topBarWrapper: {
        display: 'flex',
        top: 7,
        position: 'relative'
    },
    textTop: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '600'
    },
    textBottom: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '500'
    },
    materialIconPublicStatus: {
        color: '#ffffff',
        fontSize: 14,
        marginRight: 10
    },
    materialIconInfo: {
        color: '#ffffff',
        fontSize: 20,
        marginRight: 10
    },
    wrapperMoreOpcionsIcon: {
        position: 'absolute',
        right: 10,
        fontSize: 20,
        color: 'white',
        cursor: 'pointer'
    },
    wrapperInformationIcon: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        fontSize: 20,
        color: 'white',
        cursor: 'pointer'
    },
    wrapperPrivatePublicIcon: {
        color: 'white',
        marginLeft: 10,
        position: 'relative',
        backgroundColor: 'rgba(0,0,0,0.25)',
        borderRadius: 7,
        cursor: 'pointer'
    },
    iconsPrivatePublicMaterialIcons: {
        fontSize: 15,
        marginLeft: 2,
        top: 3,
        position: 'relative'
    },
    editButtonStyle: {
        width: 110,
        marginRight: 10,
        fontSize: 13,
        height: 25,
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 64,
        border: '1px solid #d2d2d2',
        cursor: 'pointer',
        zIndex: 3
    },
    wrapperEditButtonsSaveAndCancel: {
        display: 'flex',
        marginTop: 23,
        justifyContent:'center',
    },
    wrapperAlertChangePublicPrivate: {
        position: 'absolute',
        background: 'white',
        padding: 5,
        borderRadius: 4,
        // top: 25,
        zIndex: 3,
        width: '90%',
        // margin: '0px 0px 0px 14px'
    },
    changeAlertTextTitle: {
        width: '100%',
        justifyContent: 'center',
        display: 'flex'
    }
}

const mapStateToProps = (state, ownProps) => {
    let myself      = state.user;
    return {
        myself,
    }
}

const mapDispatchToProps = dispatch => {

    return bindActionCreators({
        dispatchSetPublicBoards: setPublicBoards,
    }, dispatch)
}

@connect( mapStateToProps, mapDispatchToProps )
@autobind
@Radium
class PublicState extends Component {

  constructor(props){
    super(props);
  }


  render(){
      let board = this.props.board;

      let isPublic              = R.isNil(board.publicData) ? false : true
      let icon                  = isPublic ? CONSTANTS.ICONS.PUBLIC :  CONSTANTS.ICONS.PRIVATE
      let boardState            = isPublic ? CONSTANTS.BOARD.PUBLIC : CONSTANTS.BOARD.PRIVATE
      let boardOppositeState    = !isPublic ? CONSTANTS.BOARD.PUBLIC : CONSTANTS.BOARD.PRIVATE

      return(
          <div style= {styles.wrapperAlertChangePublicPrivate}>
                  <div style={styles.changeAlertTextTitle}>{`${CONSTANTS.BOARD.YOUR_BOARD_IS} ${boardState}`}!</div>
                  <div>{`${CONSTANTS.BOARD.ARE_SURE_MAKE_BOARD_TO} ${boardOppositeState}`}?</div>
                  <div style = {styles.wrapperEditButtonsSaveAndCancel}>
                      <div
                          style = {[styles.editButtonStyle, {color: '#212121', border: '1px solid'}]}
                          onClick= { () => this.props.setNullOpenDialogChangePublicPrivateBoard()}
                      >
                          {CONSTANTS.GENERAL.NO}
                      </div>
                      <div
                          style = {[styles.editButtonStyle, {color: COLORS.primary, border: '1px solid'}]}
                          onClick= {() => this.acceptChanges()}
                      >
                          {CONSTANTS.GENERAL.YES}
                      </div>
                  </div>
          </div>
      )
  }

  acceptChanges(){
      if(R.isNil(this.props.refreshFilesystem)){
          this.saveChangesEditProfileMode(this.props.board)
          this.props.setNullOpenDialogChangePublicPrivateBoard()
      }
      else{
          this.props.refreshFilesystem()
          this.props.setNullOpenDialogChangePublicPrivateBoard()
      }
  }


  saveChangesEditProfileMode(board){
      let isPublic = R.isNil(board.publicData) ? false : true;
        let url = 'user/public/boards/' + board.id;

        api.delete(url)
        .then((res) => {
            api.get(`users/${this.props.myself.id}/boards`)
                .then((publicBoards) => {
                    this.props.dispatchSetPublicBoards(publicBoards)
                    this.props.setNullOpenDialogChangePublicPrivateBoard()
                })
        })
    }

}




export default PublicState;
