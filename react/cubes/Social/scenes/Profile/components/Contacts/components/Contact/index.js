'use strict';

import R                        from 'ramda';
import React, { PureComponent } from 'react';
import Radium                   from 'radium';
import _                        from 'lodash';
import { connect }              from 'react-redux';
import { bindActionCreators }   from 'redux';
import autobind                 from 'autobind-decorator';

import CONSTANTS                from '../../../../../../../../globals/constants.js';

import ButtonSocial             from '../../../../../../../../components/ButtonSocial'

const avatarSize = 100;

const styles = {
    container: {
        width: '50%',
        height: '266px',
        padding: '5px',
    },
    touch: {
        width: '100%',
        height: '100%',
        position: 'relative',
        backgroundColor: '#ffffff',
    },
    cover: {
        height: '99px',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    avatar: {
        width: avatarSize,
        height: avatarSize,
        position: 'absolute',
        top: 45,
        left: '5px',
        borderRadius: '50%',
        border: 'solid 3px white'
    },
    informationContainer: {
        padding: '20px 0 0 0',
        height:'58%',
    },
    textContainer: {
        justifyContent: 'center',
        width: '100%',
        height: '60%',
        paddingTop: 30,

    },
    buttonContainer: {
        position:'absolute',
        display: 'flex',
        flexDirection: 'row',
        padding: '5px 5px 15px 5px',
        bottom: 0,
        width: '100%',
    },
    nameFriend: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        left: 15,
        cursor: 'pointer'
    },
    descriptionFriend: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        left: 15,
    },
    socialInfoWapper:{
        position: 'absolute',
        width: 150,
        height: 50,
        right: 10,
        top: 99,
        display: 'flex',
    },
    infoContainer:{
        position: 'relative',
        width: 50,
        height: 50,
        textAlign: 'center',
        marginTop: 2,
        marginLeft: 5,
    },
    spanStyleNumber:{
        fontSize: "12px",
        color: '#373737',
        fontWeight: '600',
        display: 'inline-block',
        position: 'relative',
        margin: '0px 5px 0px 5px',
    },
    spanStyleText:{
        fontSize: 10,
        color: '#373737',
        fontWeight: '500',
        display: 'inline-block',
        position: 'relative',
        top: '-8px',
    },
};


const mapStateToProps = (state, ownProps) => {
    let myself      = state.user;
    let user        = ownProps.user;
    let isMyself    = user.id === myself.id;
    return {
        myself,
        isMyself,
    }
}


@connect( mapStateToProps, null )
// @autobind
@Radium
class ContactView extends PureComponent {

  constructor(props){
    super(props);

    this.state = {
        id: this.props.id,
        addFriendButtonStatus: this.props.status.friend,
        followButtonStatus: this.props.status.following,
    }

    this.changeHandlerFriend = this.changeHandlerFriend.bind(this);
    this.changeHandlerFollowing = this.changeHandlerFollowing.bind(this);
    this.renderInfo = this.renderInfo.bind(this);
    this.onFriendPress = this.onFriendPress.bind(this);

  }

  render(){

    let {
      id,
      email,
      avatar,
      firstName,
      lastName,
      tel,
      cover,
      description,
    } = this.props;

    let fullname = `${firstName} ${lastName}`;

    return (
        <div style={styles.container}>

            <div onClick= {() => this.onFriendPress.bind() } style={styles.touch} >

                <div style={[styles.cover, {backgroundImage: 'url('+cover.sm+')'} ]} />

                <img src={avatar.sm} style={styles.avatar}/>

                <div style={styles.informationContainer}>

                    <div>
                        {this.renderSocialInfo()}
                    </div>


                    <div style={styles.textContainer}>
                        <span onClick={() => this.goToUsers(id)} style={styles.nameFriend}> {fullname} </span>
                        <span style={styles.descriptionFriend}> {description} </span>
                    </div>

                    {
                        this.props.isMyself ?
                            <div style={styles.buttonContainer}>

                                <ButtonSocial
                                    key = {`friendButton_friend_${this.props.id}`}
                                    type ={'friend'}
                                    status={this.state.addFriendButtonStatus}
                                    id = {this.state.id}
                                    onChange = {this.changeHandlerFriend.bind()}
                                />

                                <ButtonSocial
                                    key = {`followingButton_friend_${this.props.id}`}
                                    type ={'following'}
                                    style = {{ position: 'absolute'}}
                                    status = {this.state.followButtonStatus}
                                    id = {this.state.id}
                                    onChange = {this.changeHandlerFollowing.bind()}
                                />

                            </div>
                            :
                            null
                    }

                </div>
            </div>

        </div>
    )


  }


  changeHandlerFollowing(value) {
      this.setState({followButtonStatus: value});
  }

  changeHandlerFriend (value) {
      this.setState({addFriendButtonStatus: value});
  }

  renderInfo(info) {
      return (
          <div
            key = {info.text}
            style={styles.infoContainer}
          >
              <span style={styles.spanStyleNumber}>{info.number}</span>
              <span style={styles.spanStyleText}>{info.text}</span>
          </div>
      )
  }

  goToUsers(userId) {
      let {history, myself} = this.props;
      if(R.equals(userId, myself.id)) history.push({ pathname:'/me/', state: { userId: userId } });
      else history.push({ pathname:`/users/${userId}`, state: { userId: userId } });
  }

  renderSocialInfo() {
      let user = this.props;
        let socialInfo =[
          {
              text: CONSTANTS.FEED.FRIENDS_INFO,
              number: user.friends,
          },
          {
              text: CONSTANTS.FEED.FOLLOWING_INFO,
              number: user.following,
          },
          {
              text: CONSTANTS.FEED.FOLLOWERS_INFO,
              number: user.followers,
          }
        ]
        return (
            <div style={styles.socialInfoWapper}>
                { R.map( this.renderInfo.bind(), socialInfo)}
            </div>
        )
  }


  onFriendPress() {
    let userId = this.props.id;

    let isMe = userId === this.props.myself.id;


    if(isMe) {

        let currentTab = {
            name: CONSTANTS.FEED.USER,
            position: 1,
        };

        // this.props.dispatchSetSocialPage(currentTab)
        return
    }

    // this.props.navigator.push({
    //     ident: 'User',
    //     payload: {
    //         userId: userId,
    //     },
    // });

  }


}




export default ContactView;
