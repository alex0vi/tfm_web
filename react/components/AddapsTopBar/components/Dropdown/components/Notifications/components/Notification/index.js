'use strict'
import React, { PureComponent }                 from 'react';
import Radium                                   from 'radium';
import R                                        from 'ramda';
import {connect}                                from 'react-redux';
import {Link, hashHistory}                      from 'react-router'

import addapsMedia                              from '@addaps/addaps_media';

import {COLORS}                                 from '../../../../../../../../globals/colors.js';
import CONSTANTS                                from '../../../../../../../../globals/constants.js';
import {getDifferenceBetweenNowAndDate}         from '../../../../../../../../utils/time.js';
import {openBoardAdapter, openWeblinkAdapter}   from '../../../../../../../../../js/devel/entities/cubes/reactCubes/Functions/ReactToElectron.js';
import {openCubeSocialProfileById, openCubeSocialEntityByObject}                     from '../../../../../../../../../js/devel/entities/cubes/reactCubes/Functions/ReactToElectron.js';


// const USER_SETTINGS =   require('../../../../../../../../../../app/js/devel/modules-system/module-user-settings');
// const CUBE_TYPES    =   require('../../../../../../../../../../app/js/devel/constants/cubeTypes/cubeTypesConstants.js');

const api           =   require('../../../../../../../../../../app/js/devel/modules-system/api-calls').apiv2;


const basePath = window.location.href.split( '/' ).slice( 0, -2 ).join( '/' );


const mapStateToProps = (state, ownProps) => {
    return {
        myself:              state.user
    }
}


@connect(mapStateToProps, null)
@Radium
class Notification extends PureComponent {

    constructor(props){
        super(props);
        this.state = {
            areFriends: null
        }

        this.openContent         = this.openContent.bind(this);
    }

    render() {
        let {item}                      = this.props;
        let {subject, action, object}   = item.activity;

        let date                = getDifferenceBetweenNowAndDate(item.published);
        let itemCharacteristics = this.getTextByAccionType(item);

        let actionsWithPlainText = ["FRIENDSHIP_REQUEST_SENT", "FRIENDSHIP_ACCEPTED"];

        let myText, componentToOpen;
        if(R.indexOf(action.type, actionsWithPlainText) === -1 ){
             myText = itemCharacteristics.text();
             componentToOpen = itemCharacteristics.componentToOpen();
        }
        else{
             myText = itemCharacteristics.text;
             componentToOpen = itemCharacteristics.componentToOpen;
        }
        if(R.equals(action.type, 'FRIENDSHIP_ACCEPTED')){
            let object = item.activity.subject
            componentToOpen = {object};
        }
        if(R.equals(action.type,'FRIENDSHIP_REQUEST_SENT')) return null;

        return(
            <div
                className      = { 'social-notification' }
                key            = { this.props.item.id }
                style          = { { backgroundColor: this.state.isHover ? '#f2f2f2': 'white' } }
                onMouseEnter   = { () => this.setStateGeneral('isHover', true ) }
                onMouseLeave   = { () => this.setStateGeneral('isHover', false ) }
                onClick        = { ()=> this.openContent(componentToOpen.object) }
             >
                <div className='social-notification-image-div'>
                    <img src={subject.item.avatar.s} />
                </div>

                <div
                    className   = 'social-notification-content-div'
                    style       = {{borderBottom: this.state.isHover ? 0 : '1px solid #d2d2d2'}}
                >
                    <div className='content-information-div'>

                        <span className='notifications-text-bold'>
                            {`${subject.item.firstName} ${subject.item.lastName}`}
                        </span>

                        <span className='notifications-text'>{` ${ myText} `}</span>

                        { this.renderNotificationElement(componentToOpen)}

                    </div>

                    <div className='content-date-div'>
                        {
                            itemCharacteristics.type === 'addapsImage' ?
                                <img src={itemCharacteristics.url} />
                                :
                                <i className="material-icons" style={{color: itemCharacteristics.color, transform: itemCharacteristics.transform}}>{itemCharacteristics.name}</i>
                        }
                        <span>{`${date}`}</span>
                    </div>


                </div>
            </div>
        )
    }


    renderNotificationElement(item){
        let myText = item.text
        if(R.isNil(myText)) return ;
        return(
            <span className='notifications-text-bold'>{`${myText}`}</span>
        )
    }


    setStateGeneral(type, value){
        this.setState({ [type]: value});
    }

    getTextByAccionType(item){
        let actionType = item.activity.action.type;
        let type = R.toLower(item.activity.object.type)

        return R.cond([
            [ R.equals('LIKE'),                         R.always({
                                                            text: () =>this.getTextOfEmotionByComponent(item).text,
                                                            type: 'addapsImage',
                                                            url: addapsMedia.getImagePath(basePath,'SOCIAL_IMAGES' , 'LIKE'),
                                                            componentToOpen: () =>this.getTextOfEmotionByComponent(item).componentToOpen,
                                                        })],
            [ R.equals('LOVE'),                         R.always({
                                                            text: () =>this.getTextOfEmotionByComponent(item).text,
                                                            type: 'addapsImage',
                                                            url:addapsMedia.getImagePath(basePath,'SOCIAL_IMAGES' , 'LOVE'),
                                                            componentToOpen: () =>this.getTextOfEmotionByComponent(item).componentToOpen,
                                                        })],
            [ R.equals('FUN'),                          R.always({
                                                            text: () =>this.getTextOfEmotionByComponent(item).text,
                                                            type: 'addapsImage',
                                                            url:addapsMedia.getImagePath(basePath,'SOCIAL_IMAGES' , 'FUN'),
                                                            componentToOpen: () =>this.getTextOfEmotionByComponent(item).componentToOpen,
                                                        })],
            [ R.equals('WOW'),                          R.always({
                                                            text: () =>this.getTextOfEmotionByComponent(item).text,
                                                            type: 'addapsImage',
                                                            url:addapsMedia.getImagePath(basePath,'SOCIAL_IMAGES' , 'WOW'),
                                                            componentToOpen: () =>this.getTextOfEmotionByComponent(item).componentToOpen,
                                                        })],
            [ R.equals('SAD'),                          R.always({
                                                            text:() =>this.getTextOfEmotionByComponent(item).text,
                                                            type: 'addapsImage',
                                                            url:addapsMedia.getImagePath(basePath,'SOCIAL_IMAGES' , 'SAD'),
                                                            componentToOpen: () =>this.getTextOfEmotionByComponent(item).componentToOpen,
                                                        })],
            [ R.equals('ANGRY'),                        R.always({
                                                            text: () =>this.getTextOfEmotionByComponent(item).text,
                                                            type: 'addapsImage',
                                                            url: addapsMedia.getImagePath(basePath,'SOCIAL_IMAGES' , 'ANGRY'),
                                                            componentToOpen: () =>this.getTextOfEmotionByComponent(item).componentToOpen,
                                                        })],
            [ R.equals('SHARE'),                        R.always({
                                                            text:() => this.getTextOfShareByComponent(item).text(),
                                                            type: 'materialIcon',
                                                            name:'reply',
                                                            color: '#2196F3',
                                                            transform: 'scaleX(-1)',
                                                            componentToOpen: () => this.getTextOfShareByComponent(item).componentToOpen,
                                                        })],
            [ R.equals('COMMENT'),                      R.always({
                                                            text: () => this.getTextOfCommentByComponent(item).text,
                                                            type: 'materialIcon',
                                                            name:'comment',
                                                            color: '#2196F3',
                                                            transform: 'inherit',
                                                            componentToOpen: () => this.getTextOfCommentByComponent(item).componentToOpen,
                                                        })],
            [ R.equals('FRIENDSHIP_REQUEST_SENT'),      R.always({
                                                            text: '',
                                                            type: '',
                                                            name:'',
                                                            color: '',
                                                            transform: '',
                                                            componentToOpen: () => {},
                                                        })],
            [ R.equals('FRIENDSHIP_ACCEPTED'),      R.always({
                                                            text: 'accept your friend request',
                                                            type: 'materialIcon',
                                                            name:'person',
                                                            color: '#4CAF50',
                                                            transform: 'inherit',
                                                            componentToOpen: () => {},
                                                        })],
        ])(actionType);
    }

    getTextOfCommentByComponent(item){
        let type = item.activity.object.type
        let lowerType = R.toLower(type)
        let object = item.activity.object;

        return R.cond([
            [ R.equals('BOARD'),         R.always({
                                                    text: 'commented on your board',
                                                    componentToOpen:{object: object ,text: object.item.label },
                                                })],
            [ R.equals('WEBLINK'),       R.always({
                                                    text: 'commented on this weblink',
                                                    componentToOpen:{object: object ,text: object.item.title },
                                                })],
            [ R.equals('USER'),          R.always({
                                                    text:  'commented on your',
                                                    componentToOpen:{object: object ,text: 'user profile' },
                                                })],
            [ R.equals('ACTIVITY'),      R.always({
                                                    text:  'commented on your',
                                                    componentToOpen:{object: object ,text: 'post' },
                                                })],
        ])(type);
    }

    getTextOfEmotionByComponent(item){
        let type = item.activity.object.type
        let lowerType = R.toLower(type)
        let object = item.activity.object;

        return R.cond([
            [ R.equals('BOARD'),         R.always({
                                                    text: 'reacted on your board',
                                                    componentToOpen:{object: object ,text: object.item.label },
                                                })],
            [ R.equals('WEBLINK'),       R.always({
                                                    text: 'reacted on this weblink',
                                                    componentToOpen:{object: object ,text: object.item.title },
                                                })],
            [ R.equals('USER'),          R.always({
                                                    text: 'reacted on your ',
                                                    componentToOpen:{object: object ,text: 'user profile' },
                                                })],
            [ R.equals('ACTIVITY'),      R.always({
                                                    text: 'reacted on your',
                                                    componentToOpen:{object: object ,text: 'post' },
                                                })],
        ])(type);
    }

    getTextOfShareByComponent(item){
        let isSharedWithMe = R.equals(item.activity.object.item.id, item.activity.userId)
        let type = item.activity.object.type
        let lowerType = R.toLower(type)
        let object = item.activity.object;


        return R.cond([
            [ R.equals('BOARD'),      R.always({
                                                text: () => isSharedWithMe ? 'share your board' : 'tagged you on share this board',
                                                componentToOpen:{object: object ,text: object.item.label },
                                            })],
            [ R.equals('WEBLINK'),    R.always({
                                                text: () => isSharedWithMe ? '' : 'tagged you on share this weblink',
                                                componentToOpen:{object: object ,text: object.item.title },
                                            })],
            [ R.equals('USER'),       R.always({
                                                text: () => isSharedWithMe ? 'share your' : 'tagged you on share this user profile',
                                                componentToOpen:{object: object ,text: isSharedWithMe ? 'user profile' : `${object.item.firstName} ${object.item.lastName}` },
                                            })],
            [ R.equals('ACTIVITY'),   R.always({
                                                text: () => isSharedWithMe ? 'share your' : 'tagged you on share this post',
                                                componentToOpen:{object: object ,text: 'post' },
                                            })],
        ])(type);
    }

    openContent(object){

        R.cond([
            [ R.equals('BOARD'),         () => openCubeSocialEntityByObject(object,  'boards') ],  //openBoardAdapter(object.item)
            [ R.equals('WEBLINK'),       () => openCubeSocialEntityByObject(object, 'weblinks') ],  //inset open weblink
            [ R.equals('USER'),          () => openCubeSocialProfileById(object.item.id) ],  //inset open weblink
            [ R.equals('ACTIVITY'),      () => {}],  //inset open weblink
        ])(object.type);

        this.props.onClose();
    }

}

export default Notification;
