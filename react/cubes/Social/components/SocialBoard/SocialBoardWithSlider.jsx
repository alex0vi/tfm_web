'use strict';

let ReactDOM                        = require('react-dom');

import React, { PureComponent }     from 'react';
import R                            from 'ramda';
import _                            from 'lodash';
import autobind                     from 'autobind-decorator';
import Radium                       from 'radium';
import Slider                       from 'react-slick';

import eventEmitter                 from '../../../services/eventEmitterService';
import {COLORS}                       from '../../../globals/colors.js';

import ButtonSocial                 from '../../../components/Social/SocialEntities//ButtonSocial.jsx';
import ActionsInformationAreaCard   from '../../../components/Social/SocialEntities//ActionsInformationAreaCard.jsx';
import CardHover                    from '../../../components/Social/SocialEntities//CardHover'

import {openBoardAdapter}           from '../../../../js/devel/entities/cubes/reactCubes/Functions/ReactToElectron.js';

import { MdPersonAdd, MdRssFeed
} from 'react-icons/lib/md';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const WINDOW_WIDTH = window.innerWidth;
const avatarSize = WINDOW_WIDTH/4;


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
    marginLeft: 15,
  },
  avatar: {
      width: 40,
      height: 40,
      borderRadius: 40/2,
      marginHorizontal: 10,
      cursor: 'pointer',
  },
  informationArea: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
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
    color: '#353535',
    fontFamily: "Avenir Next",
    marginLeft: 15,
    cursor: 'pointer'
  },
  name: {
    cursor: 'pointer',
    fontSize: '12px',
    color: '#000000',
    marginLeft: 8,
  },
  description: {
    fontSize: 15,
    color: '#353535',
    margin: '10px 0px 15px 15px',
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
    fontSize: 9,
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
    fontSize: 15,
    marginLeft: 8,
    marginTop: 5,
    marginBottom: 0,
    position: 'relative',
    overflow:'hidden',
    height: 20,
  },
  cardHover:{
      position: 'absolute',
      top: avatarSize + 10,
      left: 5,
      zIndex: 2,
      opacity: 0,
      'transition': 'opacity 0.3s',
  },
}


@autobind
@Radium
class SocialBoard extends PureComponent {

    constructor(props){
      super(props);

      this.state = {
        followButtonIsActive: false,
        isHoverAvatar: false,
        isHoverPersonalProfile: false,
      }

      this._renderContent = this._renderContent.bind(this);
      this._renderItem = this._renderItem.bind(this);

    }

    render() {
        let {item} = this.props;
        let type = item.type;
        let user = item.user;
        let headerStyles = {
            position: 'relative',
            height: !this.props.fromModal ? 350 : 250,
            width: '100%',
            backgroundSize: 'cover',
            backgroundImage: 'url('+item.user.cover+')',
            backgroundRepeat: 'no-repeat',
        }
        let swiper;

        if(!R.isNil(this.props.isElementToShare) && this.props.isElementToShare){
            swiper = styles.swiper;
        }
        return (
            <div style={ styles.container}>

                <div style={headerStyles}>
                    <div style={swiper}>
                    {
                        this._renderContents()
                    }
                    </div>
                </div>

                <div style={styles.informationArea}>
                  <div style= {styles.titleContainer}>

                      <span onClick={() => openBoardAdapter(item) } style={styles.title}> {item.label} </span>

                      <div style={styles.buttonsArea}>
                          {
                            // this._renderButtons()
                          }
                      </div>
                  </div>
                </div>

                <div
                    style= {styles.avatarWrapper}
                    onClick={ () => this.goToUsers(item.user.id) }
                >
                    <img
                        src={item.user.avatar}
                        style={ styles.avatar }
                        onMouseEnter={() => this.setHoverAvatarToTrue()}
                        onMouseLeave={() => this.setHoverAvatarToFalse()}
                    />
                    {
                      this.state.isHoverAvatar || this.state.isHoverPersonalProfile ?
                        <div
                            style={styles.cardHover}
                            onMouseEnter={() => this.setHoverPersonalProfileToTrue()}
                            onMouseLeave={() => this.setHoverPersonalProfileToFalse()}
                        >
                          <CardHover
                            type={type}
                            item={user}
                          />
                        </div>
                        :
                        null
                    }
                    <p style= { styles.name }> {item.user.firstName} {item.user.lastName}</p>
                </div>


                <div style={styles.descriptionContainer}>
                      { !this.props.fromActivity ?
                        <p style={styles.description}>{item.user.description}</p>
                        :
                        null
                      }
                </div>
            </div>


        );
   }

   setHoverPersonalProfileToTrue(){
       this.setState({ isHoverPersonalProfile: true})
   }

   setHoverPersonalProfileToFalse(){
       this.setState({ isHoverPersonalProfile: false})
   }

   setHoverAvatarToTrue(){
       this.setState({isHoverAvatar: true})
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

    _renderContents() {
        let auxHeightSliderStyle = {
            height: 300,
        }

        let topArrowsIsElementToShare = '60%';

        if(this.props.isElementToShare){
             topArrowsIsElementToShare = '47%'
        }


        let contentsBySixItems = R.splitEvery(6, this.props.item.contents);

        function SampleNextArrow(props) {
          const {className, style, onClick} = props
          return (
            <div
              className={className}
              style={{...style, position: 'absolute', right: 10, top: topArrowsIsElementToShare ,zIndex:1 }}
              onClick={onClick}
            ></div>
          );
        }

        function SamplePrevArrow(props) {
          const {className, style, onClick} = props
          return (
            <div
              className={className}
              style={{...style, position: 'absolute', left: 10, top: topArrowsIsElementToShare, zIndex:1}}
              onClick={onClick}
            ></div>
          );
        }



        let settings = {
            dots: true,
            infinite: true,
            centerPadding: 20,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            centerMode: true,
            className: 'auxHeightSliderStyle',
            adaptiveHeight: true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
        };

        return(
            <Slider {...settings}
            >
                {  R.map( this._renderContent.bind(),  contentsBySixItems) }
            </Slider>

        )
    }

    _renderContent(contentsInPage) {

        let auxSwiperPageStyleIsShared;
        if(this.props.isElementToShare){
            auxSwiperPageStyleIsShared = {
                width: 450,
                height: 250,
                top: -10,
            }
        }

      return (
        <div

            style={[styles.swiperPage, auxSwiperPageStyleIsShared]}
            key={ _.random(0, 10000000000000)}
        >
            { R.map( this._renderItem.bind(), contentsInPage) }
        </div>
      )
    }

    _renderItem(item) {

        let setBackgroundImageStyle = {
            backgroundImage: `url(${item.item.image})`,
            backgroundSize: 'cover',
            margin: '0px 10px 0px 0px',
            cursor: 'pointer',
        }

        return(
        <div
            style={{...styles.swiperItem, ...setBackgroundImageStyle}}
            key={ _.random(0, 10000000000000)}
        >
          <div style={styles.swiperItemTitle}>
            <p style={styles.itemTitle}> {item.item.title} </p>
          </div>
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
