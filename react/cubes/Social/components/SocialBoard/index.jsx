'use strict';

let ReactDOM                        = require('react-dom');

import React, { PureComponent }     from 'react';
import R                            from 'ramda';
import _                            from 'lodash';
import autobind                     from 'autobind-decorator';
import Radium                       from 'radium';

import eventEmitter                 from '../../../../services/eventEmitterService';
import {COLORS}                       from '../../../../globals/colors.js';

import ButtonSocial                 from '../../../../components//ButtonSocial';
import ActionsInformationAreaCard   from '../ActionsInformationAreaCard';
import CardHover                    from '../CardHover'

import {openBoardAdapter}           from '../../../../../js/devel/entities/cubes/reactCubes/Functions/ReactToElectron.js';

import { MdPersonAdd, MdRssFeed
} from 'react-icons/lib/md';

const api                           =   require('../../../../../../app/js/devel/modules-system/api-calls').apiv2;

const WINDOW_WIDTH = window.innerWidth;
const avatarSize = 40;


let styles = {
  container: {
      flex:1,
      height: 'auto',
      position:'relative',
  },
  avatarWrapper: {
    display: 'flex',
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    background: 'linear-gradient(0deg, rgba(35,37,38, 0.8), rgba(65,67,69,0))', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  },
  avatar: {
      width: avatarSize,
      height: avatarSize,
      borderRadius: avatarSize/2,
      marginHorizontal: 10,
      cursor: 'pointer',
  },
  informationArea: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      background: 'linear-gradient(180deg, rgba(35,37,38, 0.8), rgba(65,67,69,0))',
  },
  titleContainer: {
    flex: 2.6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  title: {
    fontSize: '23px',
    color: '#ffffff',
    fontWeight: '500',
    marginLeft: 15,
    // cursor: 'pointer'
  },
  name: {
    cursor: 'pointer',
    fontSize: '16px',
    color: '#ffffff',
    marginLeft: 8,
  },
  description: {
    fontSize: '15px',
    color: 'white',
    margin: '10px 0px 15px 15px',
    textShadow: '0 0 20px rgba(0, 0, 0, 0.29), 0 0 10px rgba(0, 0, 0, 0.49), 0 0 2px rgba(0, 0, 0, 0.59), 0 0 1px rgba(0, 0, 0, 0.55)',
  },
  cardActivityPosition: {
      alignSelf: 'flex-end',
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
  buttonsArea: {
    flex: 1.5,
    marginTop: 5,
  },
  followersText: {
    fontSize: '9px',
    color: '#757575',
    marginTop: 3,
    marginRight: 25,
  },
  swiper: {
    //   display: 'flex',
    //   flex: 1,
    position: 'relative',
    overflow: 'hidden',
    height: 250,
    width: 478,
  },
  swiperPage: {
    display: 'inline-flex',
    flexWrap: 'wrap',
    flex: 1,
    position: 'relative',
    top: 35,
    paddingLeft: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: 550,
    height: 300,
  },
  swiperItem: {
    height: 90,
    width: 120,
    margin: '0 5px'
  },
  swiperItemCover: {
    height: 80,
    width: 100,
  },
  swiperItemTitle: {
    height: 30,
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  },
  itemTitle: {
    fontSize: '15px',
    marginLeft: 8,
    marginTop: 5,
    marginBottom: 0,
    position: 'relative',
    overflow:'hidden',
    height: 20,
  },
  cardHover:{
      position: 'fixed',
    //   top: avatarSize + 10,
    // top: '-100px',
      left: 5,
      zIndex: 2,
      'transition': 'opacity 0.3s',
  },
  boardTagsWrapper:{
      width: '100%',
      overflow: 'hidden',
      display: 'flex',
      position: 'absolute',
      flexWrap: 'wrap',
      paddingLeft: '5px',
      bottom: 55,
  },
  tagStyle:{
     padding: '5px 10px 5px 10px',
     margin: '5px 5px',
    //  border: '1px solid',
     borderRadius: 10,
     backgroundColor: COLORS.primary,
     height: 25,
     justifyContent: 'center',
     position: 'relative',
     alignItems: 'center',
     display: 'flex',
     color: 'white',
     fontSize: 14,
  }
};


@Radium
class SocialBoard extends PureComponent {

    constructor(props){
      super(props);

      this.state = {
        followButtonIsActive: false,
        isHoverAvatar: false,
        isHoverPersonalProfile: false,
        user: null,
        ready: false,
        posHoverMorePersons: null,
      }

      this.openBoard = this.openBoard.bind(this);
    }

    componentDidMount() {
        let {item, type} = this.props;

        if(R.isNil(item.user)) {
            api.get(`users/${item.userId}`)
                .then(data => {
                    this.setState({
                        ready: true,
                        user: data,
                    })
                })
        }
        else {
            this.setState({
                ready: true,
                user: this.props.item.user,
            })
        }

    }

    render() {
        if(!this.state.ready){
          return null
        }

        let {item} = this.props;
        let type = item.type;
        let user = item.user;


        let headerStyles = {
            position: 'relative',
            height: !this.props.fromModal ? 393 : 250,
            width: '100%',
            backgroundSize: 'cover',
            backgroundImage: item.background.type === 'ADDAPS_IMG' ? 'url('+item.background.item.lm+')' : {},

            backgroundRepeat: 'no-repeat',
            cursor: 'pointer',
        }
        let swiper;

        if(!R.isNil(this.props.isElementToShare) && this.props.isElementToShare){
            swiper = styles.swiper;
        }
        return (
            <div style={ styles.container}>

                <div style={headerStyles} onClick={(event) => this.openBoard(event, item ) } >
                    <div style={swiper}>

                        <div style={styles.informationArea}>
                          <div style= {styles.titleContainer}>

                              <span style={styles.title}> {item.label} </span>

                              <div style={styles.buttonsArea}>
                                  {
                                    // this._renderButtons()
                                  }
                              </div>
                          </div>
                        </div>


                        <div style={styles.descriptionContainer}>
                              { !this.props.fromActivity ?
                                <p style={styles.description}>{item.description}</p>
                                :
                                null
                              }
                        </div>

                        {this.renderBoardTags()}

                        <div
                            style= {styles.avatarWrapper}
                        >
                            <img
                                src={this.state.user.avatar.xs}
                                style={ styles.avatar }
                                onMouseEnter={(event) => this.setHoverAvatarToTrue(event)}
                                onMouseLeave={() => this.setHoverAvatarToFalse()}
                            />
                            <p
                                onMouseEnter={(event) => this.setHoverAvatarToTrue(event)}
                                onMouseLeave={() => this.setHoverAvatarToFalse()}
                                style= { styles.name }
                            >
                                {this.state.user.firstName} {this.state.user.lastName}
                            </p>

                            { this.state.isHoverAvatar || this.state.isHoverPersonalProfile ? this.renderCardHover() : null }
                        </div>

                    </div>
                </div>
            </div>


        );
   }

   openBoard(event,item){
       if(R.isNil(event.target.closest('.hoverType'))){
            openBoardAdapter(item,event)
       }
   }


   renderCardHover(){
       let left = this.state.posHoverMorePersons.x;
       let top = this.state.posHoverMorePersons.y;
       let {item} = this.props;
       let type = item.type;
       let user = item.user;
       return(
           <div
               style={[styles.cardHover, {left: left, top:top}]}
           >
             <CardHover
               type={type}
               item={user}
               history={this.props.history}
               onLeavePersonalProfile={() => this.setHoverPersonalProfileToFalse()}
             />
           </div>
       )
   }

   // setHoverPersonalProfileToTrue(){
   //     this.setState({ isHoverPersonalProfile: true})
   // }

   setHoverPersonalProfileToFalse(){
       this.setState({ isHoverPersonalProfile: false})
   }

   setHoverAvatarToTrue(event){
       this.setState({
            isHoverAvatar: true,
            isHoverPersonalProfile: true,
            posHoverMorePersons:{x: event.clientX, y: event.clientY}
        })
   }

   setHoverAvatarToFalse(){
       this.setState({isHoverAvatar: false})
   }

   _renderButtons() {
    let fakeNumberOfFriends = 12330;
    let fakeNumberOfFollowers = 30;
    return (
      <div style={styles.buttonsWrapper}>
        <div style={styles.buttonWrapper}>
          <ButtonSocial
            type ={'following'}
            status = {this.state.followButtonIsActive}
            onChange={ this.onPressFollow }
          />
          <span style = { styles.followersText }>
            {fakeNumberOfFollowers + ' followers'}
          </span>
        </div>
      </div>
    )
  }

  renderBoardTags(){
      if(R.isNil(this.props.item.labels)) return; //wait backend to send labels into activity item
      return(
          <div
              key = {'boardTagsWrapper'}
              style={styles.boardTagsWrapper}
          >
              {R.addIndex(R.map)((tag,i)=>this.renderBoardTag(tag, i) ,this.props.item.labels)}
          </div>
      )
  }

  renderBoardTag(tag, i){
      if(R.isEmpty(tag)) return;
      return(
          <div
            style={styles.tagStyle}
            key = {`boardTag-${i}`}
          >
              {tag}
          </div>
      )
  }



    onPressFollow() {
      this.setState({
          followButtonIsActive: !this.state.followButtonIsActive
      })
    }

}

export default SocialBoard;
