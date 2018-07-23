'use strict';

let ReactDOM                    = require('react-dom');

import R                        from 'ramda';
import React, { Component }     from 'react';
import Radium                   from 'radium';
import _                        from 'lodash';
import autobind                 from 'autobind-decorator';

import {COLORS}                                       from '../../../../globals/colors.js';
import CONSTANTS                                    from '../../../../globals/constants.js';
import PopUpWithHeader                              from '../../../../components/PopUpWithHeader';
import { openPopUpGeneral  }                               from '../../../../../js/devel/entities/cubes/reactCubes/Functions/ReactToElectron.js';
import { closePopUpGeneral }                               from '../../../../../js/devel/entities/cubes/reactCubes/Functions/ReactToElectron.js';
import ReactToElectron                              from '../../../../../js/devel/entities/cubes/reactCubes/Functions/ReactToElectron.js';

let styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        margin: '7px 15px 0 10px'
    },
    cardActivityInput: {
        cursor: 'pointer',
        fontSize: '12px',
        paddingLeft: '5px'
    },
    hoverText: {
        color: COLORS.primary,
        textDecoration: 'underline'
    }
}

// Bottom part of a card, where the emotions, comments and shares of the card are printed
@Radium
class ActionsInformationAreaCard extends Component {

    constructor(props){
      super(props);

      this.state = {
          hoverEmotionsText: false,
          hoverCommentsText: false,
          hoverSharesText: false,
          isEmotionsPopUpOpen: false,
          isSharesPopUpOpen: false,
      }
      this.renderIcon = this.renderIcon.bind(this);
      this.openShareDialog = this.openShareDialog.bind(this);

    }

    render() {
        let auxTypeStyleColorIsBlack = {
            color: this.props.typeStyleBlack ? 'white' : COLORS.secondary ,
        }
        let hoverStyleTextEmotions, hoverStyleTextComments, hoverStyleTextShares;
        if(this.state.hoverEmotionsText) hoverStyleTextEmotions = styles.hoverText;
        if(this.state.hoverCommentsText) hoverStyleTextComments = styles.hoverText;
        if(this.state.hoverSharesText) hoverStyleTextShares = styles.hoverText;

        return (

            <div style={styles.container} >
                {this.renderMostUsedIcons(this.props.item.emotions)}
                <span
                    key = {`informationAreaEmotionsText`}
                    style={[styles.cardActivityInput, auxTypeStyleColorIsBlack, hoverStyleTextEmotions]}
                    onClick={()=>this.handleSetState( 'isEmotionsPopUpOpen', true)}
                    onMouseEnter={() => this.handleSetState('hoverEmotionsText', true) }
                    onMouseLeave={() => this.handleSetState('hoverEmotionsText', false) }
                >
                    {`${this.props.item.emotions.total} ${CONSTANTS.FEED.EMOTIONS_TEXT_INFO}`}
                </span>
                <span
                    key = {`informationAreaCommentsText`}
                    style={[styles.cardActivityInput, auxTypeStyleColorIsBlack, hoverStyleTextComments]}
                    onClick={()=>this.props.funcOpenComments()}
                    onMouseEnter={() => this.handleSetState('hoverCommentsText', true) }
                    onMouseLeave={() => this.handleSetState('hoverCommentsText', false) }
                >
                    {`${this.props.item.comments} ${CONSTANTS.FEED.COMMENTS_TEXT_INFO}`}
                </span>
                <span
                    key             = { `informationAreaSharesText`}
                    style           = { [styles.cardActivityInput, auxTypeStyleColorIsBlack, hoverStyleTextShares] }
                    onClick         = { () =>this.handleSetState('isSharesPopUpOpen', true) }
                    onMouseEnter    = { () => this.handleSetState('hoverSharesText', true)  }
                    onMouseLeave    = { () => this.handleSetState('hoverSharesText', false) }
                >
                    {`${this.props.item.shares} ${CONSTANTS.FEED.SHARES_TEXT_INFO}`}
                </span>

                {this.state.isEmotionsPopUpOpen ? this.openShareDialog('emotions') : null}
                {this.state.isSharesPopUpOpen ? this.openShareDialog('shares') : null}

            </div>
        );
    }


    getPopUpCharacteristics(type){
        return R.cond([
            [ R.equals('emotions'),               R.always({type:'EMOTIONS'  ,state: 'isEmotionsPopUpOpen'      , content: {emotions:this.props.item.emotions, fakeIcons: this.props.fakeIcons }})],
            [ R.equals('shares'),                 R.always({type:'SHARES'    ,state: 'isSharesPopUpOpen'        , content: this.props.item.shares})],
        ])(type);
    }

    handleSetState(type, value){
        this.setState({[type]: value})
    }


    openShareDialog(type){
        let item = this.getPopUpCharacteristics(type);
        this.handleSetState(item.state, false)

        let props = {
            isVisible:      this.state[item.state],
            content:        item.content,
            type:           item.type,
            onClick:        () => { this.closeShareDialog( type) },
            cubeInstance:   this.props.cubeInstance,
        }

        openPopUpGeneral(this.props.cubeInstance, PopUpWithHeader, props );
    }

    closeShareDialog(type){
        let item = this.getPopUpCharacteristics(type);
        this.handleSetState( item.state, false)
        let props = {
            isVisible: this.state[item.state],
            content: item.content,
            type: item.type,
            cubeInstance: this.props.cubeInstance,
        }
        closePopUpGeneral(this.props.cubeInstance, props )
    }

    getMostUsedIcons(emotions){
        let emotionsWithoutTotal = R.omit(['total'],emotions);
        let emotionsWithout0interactions = R.filter(emotion => !R.equals(emotion, 0) , emotionsWithoutTotal);
        let sortFunction = (key1, key2) => {return emotionsWithout0interactions[key1] < emotionsWithout0interactions[key2]}
        return R.take(3, R.sort(sortFunction, R.keys(emotionsWithout0interactions)))
    }

    renderMostUsedIcons(emotions){
        let mostUsedIcons = this.getMostUsedIcons(emotions);
        return(
            <div
                style={{ justifyContent: 'center', position: 'relative',top: -5, cursor: 'pointer'}}
                onClick={()=>this.handleSetState( 'isEmotionsPopUpOpen', true)}
            >
                 { R.map(this.renderIcon, mostUsedIcons) }
            </div>
        )
    }

    renderIcon(icon){
        let adaptedName = R.toUpper(R.splitAt(-8, icon)[0]);
        let iconItem = R.find((icon) => icon.text === adaptedName, this.props.fakeIcons)
        return(
            <img
                key     = {icon}
                src     = {iconItem.url}
                style   = {{width: 15, height: 15}}
            />
        )
    }

}

export default ActionsInformationAreaCard;
