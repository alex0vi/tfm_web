'use strict';

import React, { PureComponent } from 'react';
import autobind                 from 'autobind-decorator';

import R                        from 'ramda';
import _                        from 'lodash';
import Radium                   from 'radium';

import CardFooter                           from '../../cubes/Social/components/CardFooter';

import CONSTANTS                            from '../../globals/constants.js';
import {COLORS}                               from '../../globals/colors.js';
import {openBoardAdapter}                   from '../../../js/devel/entities/cubes/reactCubes/Functions/ReactToElectron.js';


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
    infoZone:{
        boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        height: '100%',
        width: '100%',
        display: 'flex',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    textInfoZone:{
        background: 'linear-gradient(334.42deg, transparent 0%, rgba(0, 0, 0, 0.78) 78.31%, #000000 100%)',
        height: '100%',
        width: '40%',
        right: 0,
        position: 'absolute',
        display: 'inline',
        color: '#FFFFFF',
        padding: '13px 12px',
        overflow: 'hiddden',
    },
}




@Radium
class PopUpBoardInformation extends PureComponent {

    constructor(props){

        super(props);

        this.state = {
            isEmotionButttonHovered: false,
            isWrapperEmotionsHover: false,
            activeIcon: null,
        }

        this.renderInformationButton = this.renderInformationButton.bind(this);
        this.renderSocialElements = this.renderSocialElements.bind(this);
    }





    render(){
        let popUpContent = this.getRenderInformation(this.props.type)
        return(
            <div
                key = {'informationContainer'}
                style = {{width: '100%', height: '100%'}}
            >
                {this.props.isVisible ? popUpContent.funcClick() : null}

            </div>
        )
    }

    getRenderInformation(type){
        return R.cond([
            [ R.equals('INFORMATION'),                        R.always({title: 'Users'  ,funcClick: () => this.renderInformationButton()})],
        ])(type);
    }

    renderInformationButton(){
        let auxBackgroundImage = {
            backgroundImage: `url(${this.props.board.background.item.m})`,
        };
        let auxAvatarImage = {
            backgroundImage: `url(${this.props.user.avatar.xs})`,
            backgroundSize: 'cover',
        }

        let item = {
            comments: this.props.board.comments,
            shares: this.props.board.shares ,
            emotions: this.props.board.emotions,
        }
        return(
            <div style = {styles.infoZone}>
                <div
                    style = {{top: 10, right: 10, position: 'absolute', zIndex: 1}}
                    className="fs-info-close fs-button"
                    onClick = {() => this.props.closeInformationDialog()}
                >
                    <span className="material-icons">{CONSTANTS.ICONS.CLOSE}</span>
                </div>

                <div style={[{ backgroundColor: 'rgba(0, 0, 255, 0.34)', height: '100%', flex: '1.5', position: 'absolute', width: '60%', backgroundSize: 'cover'}, auxBackgroundImage]} >
                    <div style = {[{ backgroundColor: 'rgb(103, 42, 138)'}]}>
                        <div style ={{ flexWrap: 'wrap', overflow: 'scroll', margin: 10, display: 'flex', position: 'absolute',left: 50, right: 50, top: 50, bottom: 50,justifyContent: 'center',alignItems: 'center'}} >
                            {R.map(this.renderBoardComponents, this.props.board.contents)}
                        </div>
                        <div style = {{ position: 'absolute', color: '#FFFFFF', fontWeight: 'bold', bottom: 10, left: 0, right: 0, display: 'flex', alignItems: 'center', padding: '0 12px'}}>
                            <div
                                onClick = {() => openBoardAdapter(this.props.board)}
                                className="fs-open-button fs-button"
                            >{CONSTANTS.ACTIONS.OPEN}</div>
                        </div>
                    </div>

                    <div className="fs-zone-old-image"></div>
                </div>

                <div style = {styles.textInfoZone}>
                    <div style = {{fontSize: 24, fontWeight: 'bold'}}>{this.props.board.label}</div>
                    <div style ={{display: 'flex', alignItems: 'center', marginBottom: 10}} >
                        <div style = {[{ width: 36, height: 36, borderRadius: '50%', marginRight: 5}, auxAvatarImage ]} ></div>
                        <div>{`${this.props.user.firstName} ${this.props.user.lastName}`}</div>
                    </div>
                    <div style ={{position:'absolute', top: 100, bottom: 100, display:'flex', width: '100%'}} >{this.props.board.description}</div>
                    {this.props.showSocialElements ? this.renderSocialElements() : null}
                </div>
            </div>
        )
    }

    renderSocialElements(){
        return(
            <div style={{ bottom: 0, width: '100%', padding: 10, overflow: 'hidden'}}>
                    <CardFooter
                        key         = {`cardFooter-${'BOARD'}-${this.props.board.id}`}
                        type        = {'BOARD'}
                        item        = {this.props.board}
                        cubeInstance= {this.props.cubeInstance}
                        isEntityPage= {false}
                        typeStyle   = {'blackStyle'}
                    />
            </div>
        )
    }

    renderBoardComponents(boardItem) {
        let styleBoardItem = {
            display: 'flex',
            boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
            borderRadius: 2,
            width: 137,
            height: 119,
            backgroundColor: '#000000',
            flexDirection: 'column',
            margin: 8,
        }
        let styleTitleBoardItem = {
            display: 'flex',
            height: 29,
            backgroundColor: 'white',
            whiteSpace: 'nowrap',
            padding: 3,
            overflow: 'hidden',
            fontSize: "12px",
            alignItems: 'center',
            justifyContent: 'center',
        }
        return(
            <div style = {styleBoardItem}>
                <div style = {{background: "linear-gradient(to bottom, #4c4c4c 49%, #1c1c1c 77%, #1c1c1c 79%, #1c1c1c 79%, #131313 100%)",mixBlendMode: 'screen', display : 'flex'}}></div>
                <div style= {styleTitleBoardItem} >{boardItem.label}</div>
            </div>
        )
    }

    hidePopup() {
        this.props.onClick();
    }

}

export default PopUpBoardInformation;
