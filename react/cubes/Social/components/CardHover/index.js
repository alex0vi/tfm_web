import React, { PureComponent }     from 'react';
import R                            from 'ramda';
import Radium                       from 'radium';
import autobind                     from 'autobind-decorator';
import {connect}                    from 'react-redux';


import TextField                    from 'material-ui/TextField';
import { MdTagFaces, MdSend }       from 'react-icons/lib/md';
import { FaComment, FaMailForward } from 'react-icons/lib/fa';

import SocialUser                   from '../SocialUser'
import SocialBoard                  from '../SocialBoard'
import SocialApp                    from '../SocialApp'
import SocialWebLink                from '../SocialWebLink'


/* styles */
import {COLORS}                       from '../../../../globals/colors.js';
import CONSTANTS                    from '../../../../globals/constants.js';
import {commentsStyle}              from '../../../../components/Social/styles/comments.js'
import {footerStyles}               from '../../../../components/Social/styles/footerCard.js'

const avatarSize = 40;

const styles = {
    containerWrapper:{
        height: 290,
        width: 300,
        display: 'flex',
        position:'relative',
        top: -55,
        left: -20,
    },
    container: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      display: 'flex',
      height: 220,
      width: 240,
      flexDirection: 'column',
      backgroundColor: '#ffffff',
      boxShadow: '0 0 4px 0 rgba(0,0,0,0.12), 0 4px 4px 0 rgba(0,0,0,0.24)'
    },
    coverContainer: {
      position: 'relative',
      cursor: 'pointer',
    },
    imgCover: {
      flex: 1,
      height: 'auto',
      width: '100%',
      width: '100%',
      backgroundSize: 'cover',
      height: 66,
    },
    avatarAndButtonsWrapper: {
      display: 'flex',
      marginTop: -avatarSize/2,
      flexDirection: 'row',
      width: '100%',
    },
    avatarWrapper: {
      flex: 3
    },
    avatar: {
        width: avatarSize,
        height: avatarSize,
        borderRadius: avatarSize/2,
        borderStyle: 'solid',
        borderColor: '#cccccc',
        margin: '0 10px 0 10px',
        cursor:'pointer',
    },
    userData: {
        marginLeft: 10,
    },
    nameSection: {},
    name: {
        cursor: 'pointer',
        fontSize: "12px",
        fontWeight: '600'
    },
    descriptionSection: {
    },
    description: {
        fontSize: 12,
        color: '#353535'
    },
    socialData: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        marginTop: 20,
    },
    socialDataColumn: {
        display: 'flex',
        flex: 3,
        flexDirection: 'column',
        alignItems: 'center'
    },
}


const mapStateToProps = (state, ownProps) => {
    return {
        myself:              state.user
    }
}

@connect(mapStateToProps, null)
@Radium
class CardHover extends PureComponent {

    constructor(props){
      super(props);

      this.state = {
          isHoverName: false,
      }

      this.handlerSetState = this.handlerSetState.bind(this);
    }

    render() {
        let {item} = this.props;

        let name = item.firstName + ' ' + item.lastName;
        let auxNameUnderline;
        if(this.state.isHoverName){
            auxNameUnderline={
                textDecoration: 'underline',
            }
        }
        return (
            <div className='hoverType' style={ styles.containerWrapper}
                onMouseLeave={() => this.props.onLeavePersonalProfile()}
            >
                <div style={ styles.container}
                    onMouseLeave={() => this.props.onLeavePersonalProfile()}
                >
                  <div
                        onClick = {() =>  this.goToUsers(item.id)}
                        style={styles.coverContainer}
                  >

                    <img src={item.cover.sm} style={styles.imgCover} />

                    <div style = {styles.avatarAndButtonsWrapper}>
                      <div style = {styles.avatarWrapper}>
                        <img
                            src={item.avatar.xs}
                            style={styles.avatar}
                            onClick = {() =>  this.goToUsers(item.id)}
                        />
                      </div>
                    </div>

                  </div>

                  <div style = {styles.userData}>
                    <div style = {styles.nameSection}>
                      <span
                            style={[styles.name, auxNameUnderline]}
                            onClick = {() =>  this.goToUsers(item.id)}
                            onMouseEnter = {() => this.handlerSetState('isHoverName', true) }
                            onMouseLeave = { () => this.handlerSetState('isHoverName', false)}
                      >{name}</span>
                    </div>
                    <div style = {styles.descriptionSection}>
                      <span style={styles.description}>{item.description}</span>
                    </div>
                  </div>

                  <div style = {styles.socialData}>

                    <div style = {styles.socialDataColumn}>
                        <span style={{fontSize: "12px", fontWeight: '500', color: '#373737'}}>{item.friends}</span>
                        <span style={{fontSize: 10, fontWeight: '500'}}>{CONSTANTS.FEED.FRIENDS_INFO}</span>
                    </div>

                    <div style = {styles.socialDataColumn}>
                      <span style={{fontSize: "12px", fontWeight: '500', color: '#373737'}}>{item.following}</span>
                      <span style={{fontSize: 10, fontWeight: '500'}}>{CONSTANTS.FEED.FOLLOWING_INFO}</span>
                    </div>

                    <div style = {styles.socialDataColumn}>
                      <span style={{fontSize: "12px", fontWeight: '500', color: '#373737'}}>{item.followers}</span>
                      <span style={{fontSize: 10, fontWeight: '500'}}>{CONSTANTS.FEED.FOLLOWERS_INFO}</span>
                    </div>
                  </div>
                </div>
            </div>
       );
    }

    handlerSetState(type, value){
        this.setState({[type]: value})
    }

    goToUsers(userId) {
        let {history, myself} = this.props;
        if(R.equals(userId, myself.id)) history.push({ pathname:'/me/', state: { userId: userId } });
        else history.push({ pathname:`/users/${userId}`, state: { userId: userId } });
    }
}

export default CardHover;
