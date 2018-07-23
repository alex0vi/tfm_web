import React, { PureComponent } from 'react';

import R                                from 'ramda';
import Radium                           from 'radium';
import autobind                         from 'autobind-decorator';

import addapsMedia                      from '@addaps/addaps_media';

import PopUpWithHeader                  from '../../../../components/PopUpWithHeader';
import eventEmitter                     from '../../../../services/eventEmitterService';

import {commentsStyle}                               from '../../../../components/Social/styles/comments.js'
import {footerStyles}                                from '../../../../components/Social/styles/footerCard.js'
import {openPopUpGeneral, closePopUpGeneral, openBoardAdapter}     from '../../../../../js/devel/entities/cubes/reactCubes/Functions/ReactToElectron.js';
import { openWeblinkAdapter}                         from '../../../../../js/devel/entities/cubes/reactCubes/Functions/ReactToElectron.js';


import SocialUser                                    from '../SocialUser';
import SocialBoard                                   from '../SocialBoard';
import SocialApp                                     from '../SocialApp';
import SocialWebLink                                 from '../SocialWebLink';
import CardHover                                     from '../CardHover';
import CardFooter                                    from '../CardFooter';

import {COLORS}                           from '../../../../globals/colors.js';

const api           =   require('../../../../../../app/js/devel/modules-system/api-calls').apiv2;


import {
    MdTagFaces,
    MdSend
} from 'react-icons/lib/md';

import {
    FaComment, FaMailForward
} from 'react-icons/lib/fa';


const avatarSize    = 40;
const basePath      = window.location.href.split( '/' ).slice( 0, -2 ).join( '/' );



const styles = {
    container: {
      marginTop: 15,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      flex: 1,
      backgroundColor: '#ffffff'
    },
    topActivity: {
      flex: 1,
      position: 'relative',
    },
    card: {
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#BDBDBD',
      margin: '10px',
      // backgroundColor: 'yellow'
    },
    userInformation: {
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      height: 'auto',
      margin: '5px 10px',
    },
    avatar: {
        width: avatarSize,
        height: avatarSize,
        borderRadius: avatarSize/2,
        marginHorizontal: 10,
        cursor: 'pointer',
    },
    cardHover:{
        position: 'fixed',
        top: 15,
        left: 5,
        zIndex: 4,
        opacity: 1,
        'transition': 'opacity 0.3s',
    },
    cardHoverTaggedUsers:{
        position: 'fixed',
        top: 15,
        left: 5,
        zIndex: 4,
        opacity: 1,
        'transition': 'opacity 0.3s',
    },
    nameText:{
        fontWeight: 600,
        cursor: 'pointer',
        zIndex: 4,
    },
    listContainerTaggedUsers:{
        position:'fixed',
        zIndex: 4,
        display:'block',
        backgroundColor: COLORS.secondary,
        boxShadow: '0 0 8px 0 rgba(0,0,0,0.12), 0 8px 8px 0 rgba(0,0,0,0.24)',
        borderRadius: 4,
        padding: '10px 10px 10px 10px',
    }
}


const OBJECT_MAPPING = {
  'USER': SocialUser,
  'BOARD': SocialBoard,
  'WEBLINK': SocialWebLink,
  'APP': SocialApp,
};

// const ACTION_MAPING = {
//   'LIKE'    : 'likes',
//   'SHARE'   : 'shared',
//   'COMMENT' : 'commented',
//   'LOVE'    : 'loved',
//   'FUN'     : 'is laughting about',
//   'ANGRY'   : 'is angry about',
//   'WOW'     : 'is surprised about',
//   'SAD'     : 'is sad about',
// }

const ACTION_MAPING = {
  'FRIENDSHIP_REQUEST_SENT' : {
    text : '',
    url: '',
    type:''
  },
  'FRIENDSHIP_ACCEPTED' : {
    text : 'and',
    additionalText: 'are now friends',
    url: '',
    type:'',
  },
  'LIKE'    : {
      text  :  'reacted on',
      url   :  addapsMedia.getImagePath(basePath, 'SOCIAL_IMAGES' ,'LIKE'),
      type  : 'addapsImage'
  },
  'SHARE'   : {
      text  : 'shared',
      icon  : 'reply',
      type  : 'icon'
  },
  'COMMENT' : {
      text  : 'commented',
      icon  : 'comment',
      type  : 'icon'
  },
  'LOVE'    : {
      text  : 'reacted on',
      url  : addapsMedia.getImagePath(basePath,'SOCIAL_IMAGES' , 'LOVE'),
      type  : 'addapsImage'
  },
  'FUN'     : {
      text  : 'reacted on',
      url  : addapsMedia.getImagePath(basePath,'SOCIAL_IMAGES' , 'FUN'),
      type  : 'addapsImage'
  },
  'ANGRY'   : {
      text  : 'reacted on',
      url   :  addapsMedia.getImagePath(basePath,'SOCIAL_IMAGES' , 'ANGRY'),
      type  : 'addapsImage'
  },
  'WOW'     : {
      text  : 'reacted on',
      url  : addapsMedia.getImagePath(basePath,'SOCIAL_IMAGES' , 'WOW'),
      type  : 'addapsImage'

  },
  'SAD'     : {
      text  : 'reacted on',
      url  : addapsMedia.getImagePath(basePath,'SOCIAL_IMAGES' , 'SAD'),
      type  : 'addapsImage'
  },
}

// @autobind
@Radium
class Activity extends PureComponent {
    constructor(props){
      super(props);

      this.state = {
        isHoverAvatar: false,
        isHoverPersonalProfile: false,
        isHoverFirstTaggedUser: false,
        isHoverSecondTaggedUser: false,
        isHoverFirstTaggedUserProfile: false,
        isHoverSecondTaggedUserProfile: false,
        activePopUpMoreUsers: false,
        isHoverMorePersons: false,
        posHoverMorePersons: null,
        posHoverAvatar: null,
        posHoverTaggedUser: null,
        isHoverPersonalProfileOpen: null,
        underlineOnButtonText: false,
      }
    }

    componentDidUpdate(prevProps, prevState){

      let isOpenTheComments = this.state.commentsAreOpen && !prevState.commentsAreOpen;
      if(!R.isNil(this.state.comments) && this.state.comments.length > prevState.comments.length || isOpenTheComments){
        this._commentsDiv.scrollTop = this._commentsDiv.scrollHeight;
      }
    }




    render() {

      let RenderType = OBJECT_MAPPING[this.props.activity.object.type];
      if(R.equals(this.props.activity.action.type,'FRIENDSHIP_REQUEST_SENT')) return null;
      return(
        <div style={ styles.container}>
            { this.renderTopActivity(this.props.activity) }

            <div style={styles.card}>
              <RenderType
                  key           = {`activity-${this.props.activity.object.type}-${this.props.activity.object.item.id}`}
                  item          = {this.props.activity.object.item}
                  fromActivity  = {true}
                  history       = {this.props.history}
              />
            </div>
            <CardFooter
              key           = {`cardFooterActivity-${this.props.activity.object.type}-${this.props.activity.object.item.id}`}
              type          = {this.props.activity.object.type}
              item          = {this.props.activity.object.item}
              cubeInstance  = {this.props.cubeInstance}
              typeStyle     = {'whiteStyle'}
            />
        </div>

      )
    }


    openBoard(board) {
        openBoardAdapter(board);
    }

    openWeblink(weblink){
        openWeblinkAdapter(weblink);
    }

    getNameItemShared(type,item){
        return R.cond([
            [ R.equals('WEBLINK'),            R.always({text: item.title ,                              funcClick: () => this.openEntityPage(item, 'weblinks'   , 'WEBLINK' )})],
            [ R.equals('BOARD'),              R.always({text: item.label ,                              funcClick: () => this.openEntityPage(item, 'boards'     , 'BOARD'   )})],
            [ R.equals('USER'),               R.always({text: `${item.firstName} ${item.lastName}` ,    funcClick: () => this.goToUsers(item.id)})],
            [ R.T,                            R.I],
        ])(type,item);
    }

    openEntityPage(item, apyType, type) {
        this.props.history.push({ pathname:`/${apyType}/${item.id}`, state: { item: item, apiType: apyType, type: type } });
    }

    createNameItemButton(object){

        let button = this.getNameItemShared(object.type,object.item)
        let auxUnderlineStyleButtonText;
        if(this.state.underlineOnButtonText){
            auxUnderlineStyleButtonText = {textDecoration: 'underline'}
        }

        return(
            <span
                onMouseEnter={()=> this.setUnderlineOnButtonText()}
                onMouseLeave={()=> this.unsetUnderlineOnButtonText()}
                style={[styles.nameText, auxUnderlineStyleButtonText]}
                onClick={() => button.funcClick() }
            >{ button.text }</span>
        )
    }

    setUnderlineOnButtonText(){this.setState({underlineOnButtonText: true})}
    unsetUnderlineOnButtonText(){this.setState({underlineOnButtonText: false})}

    isShared(activity){
        return (activity.action.type === 'SHARE' && !R.isNil(activity.action.item.taggedUsers) && activity.action.item.taggedUsers.length > 0)
    }

    handlerOpenPopUpMoreUsersOnClick(item){
        this.setState({ activePopUpMoreUsers: true});
        let props = {
            isVisible: true,
            content: item.taggedUsers,
            type:'USERS',
            onClick : ()=> this.handlerClosePopUpMoreUsersOnClick(item),
            history: this.props.history,
            cubeInstance: this.props.cubeInstance,
        }
        openPopUpGeneral(this.props.cubeInstance, PopUpWithHeader, props )
    }

    handlerClosePopUpMoreUsersOnClick(item){
        this.setState({ activePopUpMoreUsers: true});
        let props = {
            isVisible: false,
            content: item.taggedUsers,
            type:'USERS',
            onClick : ()=> this.setState({activePopUpMoreUsers: false}),
            history: this.props.history,
            cubeInstance: this.props.cubeInstance,
        }
        closePopUpGeneral(this.props.cubeInstance, props )
    }

    renderUserItemListOnlyName(user, i){
        return(
            <span
                style={{display:'block', color:'white', fontSize: 13}}
                key = {i}
            >
                {`${user.firstName} ${user.lastName}  `}
            </span>
        )
    }

    showListOfOtherTaggedUsers(item){
        let { taggedUsers } = item;
        let taggedUsersSliced =  R.slice(2, 9, taggedUsers);
        let left = this.state.posHoverMorePersons.x;
        let top = this.state.posHoverMorePersons.y + 15;

        return(
            <div style={[styles.listContainerTaggedUsers, {left: left, top:top}]}>
                {R.addIndex(R.map)(this.renderUserItemListOnlyName ,taggedUsersSliced)}
            </div>
        )
    }

    ifHasThreeOrMoretaggedUsersCreateList(item){
        let numberOftaggedUsersWithoutFirstAndSecond = item.taggedUsers.length - 2;
        let text = `and ${numberOftaggedUsersWithoutFirstAndSecond} more.`;

        let hoverListMoreStyles;
        if(this.state.isHoverMorePersons){
            hoverListMoreStyles={
                color: COLORS.primary,
            }
        }

        return(
            <span
                style={[styles.text, {cursor: 'pointer'}, hoverListMoreStyles]}
                onClick={()=> this.handlerOpenPopUpMoreUsersOnClick(item)}
                onMouseEnter={(event)=> this.setHoverMorePersonsToTrue(event)}
                onMouseLeave={()=> this.setHoverMorePersonsToFalse()}
            >
                {text}
                { !R.isNil(item.taggedUsers) && this.state.isHoverMorePersons   ? this.showListOfOtherTaggedUsers(item) : null}
            </span>
        )
    }


    getHoverStatusCharacteristics(type){
        return R.cond([
            [ R.equals('first'),            R.always({
                                                    condition: this.state.isHoverFirstTaggedUser || this.state.isHoverFirstTaggedUserProfile,
                                                    funcLeave: () => this.setHoverFirstTaggedUserProfileToFalse(),
                                                    styleAux : this.state.isHoverFirstTaggedUserProfile ? {textDecoration :'underline'} : {},
                                            })],
            [ R.equals('second'),            R.always({
                                                    condition: this.state.isHoverSecondTaggedUser || this.state.isHoverSecondTaggedUserProfile,
                                                    funcLeave: () => this.setHoverSecondTaggedUserProfileToFalse(),
                                                    styleAux : this.state.isHoverSecondTaggedUserProfile ? {textDecoration :'underline'} : {}
                                            })],
            [ R.T,                          R.I],
        ])(type);
    }

    createCardHoverFirstAndSecond(state , item){
        let hoverCharacteristics = this.getHoverStatusCharacteristics(state);
        if(hoverCharacteristics.condition){
            return(
                <div
                    style={[styles.cardHoverTaggedUsers, {top: this.state.posHoverTaggedUser.y + 15, left: this.state.posHoverTaggedUser.x}]}
                >
                  <CardHover
                      type={'USER'}
                      item={item}
                      onLeavePersonalProfile={hoverCharacteristics.funcLeave}
                      history = {this.props.history}
                  />
                </div>
            )
        }
    }


    createTaggedUser(unionText, text, state, item ){
        let subjectId = item.id
        let hoverCharacteristics = this.getHoverStatusCharacteristics(state);
        return (
            <span>
                <span style={styles.text}> {unionText} </span>
                <span style={[styles.nameText, {cursor :'pointer', fontWeight: 600}, hoverCharacteristics.styleAux]}
                        onMouseEnter={(event) =>{ state==='first' ? this.setStateHandlerOnMouseEnterFirstTaggedUser(event) :  this.setStateHandlerOnMouseEnterSecondTaggedUser(event)}}
                        onMouseLeave={(event) =>{ state==='first' ? this.setStateHandlerOnMouseLeaveFirstTaggedUser(): this.setStateHandlerOnMouseLeaveSecondTaggedUser()}}
                        onClick={ () => this.goToUsers(subjectId) }
                > {text}</span>
                {this.createCardHoverFirstAndSecond(state, item)}
            </span>

        )
    }



    createUsersToShares(item){
        let hasTwoTaggedUser = item.taggedUsers.length > 1
        let hasThreeOrMoreTaggedUser = item.taggedUsers.length > 2
        let secondUnion = hasThreeOrMoreTaggedUser ? ', ' : 'and ';

        return(
            <span>
                {this.createTaggedUser('with', item.taggedUsers[0].firstName + " " + item.taggedUsers[0].lastName + " ", 'first', item.taggedUsers[0] )}
                {hasTwoTaggedUser ? this.createTaggedUser(secondUnion, item.taggedUsers[1].firstName + " " + item.taggedUsers[1].lastName + " ", 'second', item.taggedUsers[1]) : null}
                {hasThreeOrMoreTaggedUser ? this.ifHasThreeOrMoretaggedUsersCreateList(item) : null}
            </span>
        )
    }

    goToUsers(userId) {
        this.props.history.push({ pathname:`/users/${userId}`, state: { userId: userId } });
    }


    renderTopActivity(activity) {
        let date = R.split('T', activity.published)[0];
        let reaction = ACTION_MAPING[activity.action.type].text;
        let name = activity.subject.item.firstName + " " + activity.subject.item.lastName + " ";
        let reactionString =  reaction + " ";
        let subjectId = activity.subject.item.id
        let additionalText = ACTION_MAPING[activity.action.type].additionalText;

        let auxTimeContainerType, auxTopActivityNotShare, auxOpenPersonalProfile;
        if(activity.action.type !== 'SHARE') auxTimeContainerType = {fontSize: 8, position:'relative', bottom: -1, margin: 0, };
        else auxTimeContainerType = {fontSize: 8, margin: 0};

        if(activity.action.type !== 'SHARE') auxTopActivityNotShare = { borderBottom: '1px solid #d2d2d2'}
        if(this.state.isHoverPersonalProfile) auxOpenPersonalProfile = {textDecoration: 'underline'}

      return (
        <div style={[styles.topActivity, auxTopActivityNotShare]}>

          <div style={styles.userInformation}>
            {
                this.renderTopImage(activity)
            }
            <div style={{flexDirection: 'column', flex: 8, marginLeft: 10}}>
                <div style={styles.textContainer}>
                    <span
                        style={[styles.nameText, auxOpenPersonalProfile]}
                        onMouseEnter={(event) => this.setHoverAvatarToTrue(event)}
                        onMouseLeave = {()=> this.setHoverAvatarToFalse()}
                        onClick={ () => this.goToUsers(subjectId) }
                    >{ name }</span>
                    <span style={styles.text}>{ reactionString }</span>
                    {this.createNameItemButton(this.props.activity.object)}
                    {this.isShared(activity) ? this.createUsersToShares(activity.action.item) : null}
                    {!R.isNil(additionalText) ? <span style={styles.text}>{ ` ${additionalText}` }</span> : null}
                </div>
                <div style={styles.timeContainer}>
                    <p style={auxTimeContainerType}> {date} </p>
                </div>
            </div>
          </div>

          <div style={styles.comments}>
            {
              activity.action.type === 'SHARE' ?
                <p style={{fontSize: '12px',marginLeft: 10, overflow:'hidden'}}> {activity.action.item.text} </p>
                :
                null
            }
          </div>


              {

                this.state.isHoverAvatar ||  this.state.isHoverPersonalProfile ?
                  <div
                      style={[styles.cardHover,{top: this.state.posHoverAvatar.y, left: this.state.posHoverAvatar.x}]}
                  >
                    <CardHover
                        type={activity.subject.type}
                        item={activity.subject.item}
                        onLeavePersonalProfile={() => this.setHoverPersonalProfileToFalse()}
                        history = {this.props.history}
                    />
                  </div>
                  :
                  null
              }

      </div>

    )
  }

    renderTopImage(activity) {
        if(activity.action.type === 'SHARE') {
            return(
                <img
                    src={activity.subject.item.avatar.xs}
                    style= {styles.avatar}
                    onMouseEnter={(event) => this.setHoverAvatarToTrue(event)}
                    onMouseLeave = {()=> this.setHoverAvatarToFalse()}
                    value={activity.subject}
                    onClick={ () => this.goToUsers(subjectId) }
                />
            )
        }
        else {
            return(
                ACTION_MAPING[activity.action.type].type === 'addapsImage' ?
                    <img src={ACTION_MAPING[activity.action.type].url} style={{color: '#56a4de', width: 15, height: 15, position: 'relative', top:5, left: 3}} />
                    :
                    <i className="material-icons" style={{fontSize: 15, top:5, position:'relative', left: 3, color: COLORS.primary}}>{ACTION_MAPING[activity.action.type].icon}</i>

            )
        }
    }


    setHoverMorePersonsToTrue(event){
      this.setState({isHoverMorePersons: true, posHoverMorePersons:{x: event.clientX, y: event.clientY}});
    }
    setHoverMorePersonsToFalse(){this.setState({isHoverMorePersons: false})}

    setHoverPersonalProfileToFalse(){ this.setState({isHoverPersonalProfile: false})}

    setHoverAvatarToTrue(event){
      this.setState({isHoverPersonalProfile: true, isHoverAvatar: true, posHoverAvatar: {x: event.clientX, y: event.clientY}});
    }

    setHoverAvatarToFalse(){
      this.setState({isHoverAvatar: false});
    }

    setStateHandlerOnMouseEnterFirstTaggedUser(event){
        this.setState({
            isHoverFirstTaggedUser: true,
            posHoverTaggedUser:{x: event.clientX -20 , y:  event.clientY -20},
            isHoverFirstTaggedUserProfile: true,
        })
    }

    setStateHandlerOnMouseEnterSecondTaggedUser(event){
        this.setState({
            isHoverSecondTaggedUser: true,
            posHoverTaggedUser:{x: event.clientX -20, y:  event.clientY -20},
            isHoverSecondTaggedUserProfile: true,
        })
    }

    setStateHandlerOnMouseLeaveFirstTaggedUser(){ this.setState({ isHoverFirstTaggedUser: false})}
    setStateHandlerOnMouseLeaveSecondTaggedUser(){ this.setState({isHoverSecondTaggedUser: false})}

    setHoverFirstTaggedUserProfileToFalse(){
        this.setState({ isHoverFirstTaggedUserProfile: false, posHoverTaggedUser:{x: null, y: null}})
    }

    setHoverSecondTaggedUserProfileToFalse(){
        this.setState({ isHoverSecondTaggedUserProfile: false, posHoverTaggedUser:{x: null, y: null}})
    }



}
export default Activity;
