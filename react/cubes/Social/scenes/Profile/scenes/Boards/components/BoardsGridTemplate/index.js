'use strict';

import R from 'ramda';
import React, { Component }     from 'react';
import _                        from 'lodash';
import Radium                   from 'radium';
import { connect }              from 'react-redux';
import { MdInfo }               from 'react-icons/lib/md';
import { bindActionCreators }   from 'redux';
import autobind                 from 'autobind-decorator';

import eventEmitter             from '../../../../../../../../services/eventEmitterService';

import AddapsText               from '../../../../../../../../AddapsComponents/AddapsText.js'
import {COLORS}                   from '../../../../../../../../globals/colors.js';
import CONSTANTS                from '../../../../../../../../globals/constants.js';
import {openBoardAdapter}       from '../../../../../../../../../js/devel/entities/cubes/reactCubes/Functions/ReactToElectron.js';


import {openPopUpGeneral, closePopUpGeneral, openBottomPopUp,closeBottomPopUp}  from '../../../../../../../../../js/devel/entities/cubes/reactCubes/Functions/ReactToElectron.js';
import PopUpWithHeader                    from '../../../../../../../../components/PopUpWithHeader';
import ReactToElectron                    from '../../../../../../../../../js/devel/entities/cubes/reactCubes/Functions/ReactToElectron.js';


import PopUpBoardInformation             from '../../../../../../../../components/PopUpBoardInformation';



const api           =   require('../../../../../../../../../../app/js/devel/modules-system/api-calls').apiv2;

const styles = {
    container: {
        display: 'flex',
        flex: 1,
        flexWrap: 'wrap'
    },
    boardContainer: {
        width: 'calc(50% - 10px)',
        height: '192px',
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
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
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
        display: 'flex',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        flexDirection: 'row',
        height: 40,
        backgroundColor: 'transparent',
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
    wrapperInformationIcon: {
        position: 'absolute',
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
}





const mapStateToProps = (state, ownProps) => {

    // let idInfoModalOpen = state.profileScreen.idInfoModalOpen;
    let myself      = state.user;
    let user        = ownProps.user;
    let isMyself    = user.id === myself.id;
    return {
        user,
        myself,
        isMyself
        // idInfoModalOpen,
    }
}



@connect( mapStateToProps, null )
@autobind
@Radium
class BoardsGridTemplate extends Component {

  constructor(props){
    super(props);

    this.state = {
      userDataReady: false,
      user: null,
      feedItems: null,
      openDialogChangePublicPrivateBoard: null,
      isBoardInfoOpen: null,
    }

    this.renderBoard = this.renderBoard.bind(this);
    this._renderPublicBoardIcon = this._renderPublicBoardIcon.bind(this);
    this.renderInformationButton = this.renderInformationButton.bind(this);
    this.setStateHandler = this.setStateHandler.bind(this);
    this.closeInformationDialog = this.closeInformationDialog.bind(this);

  }


  render(){

    let { boards } = this.props

    return (
      <div style = {styles.container}>
        {
          R.map(this.renderBoard.bind(), boards)
        }


      </div>
    )

  }


  renderBoard(board) {

    let {name, id} = board;
    let user = this.props.user;
    let cover = board.background.item
    let coverBackgroundColor = ''

    if(R.splitAt(1, cover)[0] === '#') {
      coverBackgroundColor = cover
    }
    else {
      coverBackgroundColor = 'transparent'
    }

    let backgroundStyle = board.background.type === 'CSS_COLOR' ?
            {backgroundColor: board.background.item}
            :
            {backgroundImage: 'url('+board.background.item.m+')' }

    return (
        <div  className="boardContainer" key={id} style={[styles.boardContainer, backgroundStyle]}  onClick={(e) => this.openBoard(e, board) }>


            <div className="2" style={styles.topBarWrapper}>
                  <AddapsText style={[styles.textTop, {marginHorizontal: 10, paddingLeft: 10,}]}>{board.label}</AddapsText>

                  { this.props.isMyself ? this._renderPublicBoardIcon(board, user) : null }

                  {this.state.openDialogChangePublicPrivateBoard  === board.id ? this.renderPublicStatePopUp(board) : null }
            </div>


            <div className="3" style={styles.bottomBar} >
                <img src={ user.avatar.xs } style={styles.avatar} />
                <AddapsText style={styles.textBottom}>{user.firstName} {user.lastName}</AddapsText>
                { this.onClickInformationButton(board) }
                { this.state.isBoardInfoOpen === board.id ? this.renderInformationButton(board) : null}
            </div>
        </div>
    )

  }


  onClickInformationButton(board){
        return(
            <i
                key = {'informationButton'}
                style={styles.wrapperInformationIcon}
                className={"material-icons"}
                onClick={() => this.setStateHandler('isBoardInfoOpen', board.id)}
            >
                info
            </i>
        )
    }

    setStateHandler(state, value) {
        this.setState({[state]: value})
    }

    renderInformationButton(board){
        this.setStateHandler('isBoardInfoOpen', false)
        let props = {
            isVisible: true,
            item: board,
            onClickClose : () => this.closeInformationDialog(),
            history: this.props.history,
            cubeInstance: this.props.cubeInstance,
            type:'INFORMATION',
            user: this.props.user,
            showSocialElements: true,

        }

        openBottomPopUp(this.props.cubeInstance, PopUpBoardInformation, props )
    }

    closeInformationDialog(){
        this.setStateHandler('isBoardInfoOpen', null)
        let props = {
            type:           'INFORMATION',
            isVisible:      false,
            cubeInstance: this.props.cubeInstance,
        }
        closeBottomPopUp(this.props.cubeInstance, props )
    }


  renderPublicStatePopUp(board){
      let isOpenBoardChange = this.state.openDialogChangePublicPrivateBoard === board.id ? true : false
      let propsPublicStateComponent = {
          board: board,
          setNullOpenDialogChangePublicPrivateBoard: () => this.setNullOpenDialogChangePublicPrivateBoard(),
      }

      let props = {
          isVisible: true,
          content: propsPublicStateComponent,
          type: 'PUBLIC_STATE_POPUP',
          onClick: () => this.setNullOpenDialogChangePublicPrivateBoard(),
          cubeInstance: this.props.cubeInstance,
      }

      openPopUpGeneral(this.props.cubeInstance, PopUpWithHeader, props )
  }


  closePublicStateDialog(){
      let props = {
          type:           'PUBLIC_STATE_POPUP',
          isVisible:      false,
          onClick: () => this.setNullOpenDialogChangePublicPrivateBoard(),
          cubeInstance: this.props.cubeInstance,
      }
      closePopUpGeneral(this.props.cubeInstance, props )
  }

    openBoard(e, board) {
        if(e.target.className === 'boardContainer') {
            openBoardAdapter(board)
        }
    }

  _renderPublicBoardIcon(board, user) {
    let isPublic = R.isNil(board.publicData) ? false : true
    let icon = isPublic ? CONSTANTS.ICONS.PUBLIC : CONSTANTS.ICONS.PRIVATE
    return (
        <div
            key = {'publicPrivateButton'}
            style = {styles.wrapperPrivatePublicIcon}
            onClick = {() => {this.onPressPublicBoard(isPublic, board) }}
        >
            <i style={styles.iconsPrivatePublicMaterialIcons} className="material-icons">{icon}</i>
            <i style={styles.iconsPrivatePublicMaterialIcons} className="material-icons">arrow_drop_down</i>
        </div>



    )
  }

  /* On press buttons */
  onPressInfoButton(board) {
      this.props.dispatchSetOpenInfoModal(board.id)
  }


  onPressPublicBoard(isPublic, item){
    this.setState({openDialogChangePublicPrivateBoard: item.id})
  }


  setNullOpenDialogChangePublicPrivateBoard(){
      this.closePublicStateDialog()
      this.setState({openDialogChangePublicPrivateBoard: null})
  }

}




export default BoardsGridTemplate;
