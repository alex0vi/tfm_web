import React, { PureComponent }     from 'react';
import R                            from 'ramda';
import Radium                       from 'radium';
import autobind                     from 'autobind-decorator';
import {connect}                    from 'react-redux';
import {bindActionCreators}         from 'redux';
import PropTypes                    from 'prop-types';

import {COLORS}                       from '../../../../globals/colors.js';
import CONSTANTS                    from '../../../../globals/constants.js';

import ButtonSocial                 from '../../../../components/ButtonSocial';
import ActionsInformationAreaCard   from '../ActionsInformationAreaCard';

import {setActiveTab}               from '../../../../../store/actionsCreators/social/setActiveTab';


const WINDOW_WIDTH = window.innerWidth;
const screenWidth = WINDOW_WIDTH/4;

const avatarSize = 100;


let styles = {
    container: {
      flex:1,
    },
    coverContainer: {
      flex: 2.5,
      position: 'relative'
    },
    avatarAndButtonsWrapper: {
      display: 'flex',
      position: 'absolute',
      bottom: -avatarSize / 1.5,
      flexDirection: 'row',
      width: '100%',
    },
    avatarWrapper: {
      flex: 3
    },
    avatar: {
      width: avatarSize,
      height: avatarSize,
      borderRadius: avatarSize/ 1.5,
      margin: '0 10px 0 10px',
      borderStyle: 'solid',
      borderColor: '#cccccc',
      cursor: 'pointer',
    },
    buttonsWrapper: {
      display: 'flex',
      flexDirection: 'row',
      flex: 1,
    },
    buttonWrapper: {
      flex: 1,
      alignItems: 'center',
      marginLeft: 2,
      marginRight: 2,
    },
    informationArea: {
        display: 'flex',
        flexDirection: 'column',
        marginHorizontal: 15,
        marginLeft: 15,
        marginTop: avatarSize/ 1.5,
    },
    buttonsArea: {
      flex: 1.4,
      marginTop: avatarSize / 1.5,
    },
    nameSection: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    name: {
        cursor: 'pointer',
        fontSize: '23px',
        margin: '0px 0px 0px 0px',
    },
    descriptionSection: {
        flex: 1.5,
    },
    description: {
        fontSize: '12px',
      color: '#353535',
      margin: '0px 0px 10px 0px',
    },
    // TODO, improve the button position and the followers and friends index
    followersText: {
      fontSize: 9,
      color: '#757575',
      marginTop: 3,
      justifyContent: 'center',
      width: '100%',
      position: 'relative',
      display: 'flex',
  },


}

const mapDispatchToProps = dispatch => {

    return bindActionCreators({
        dispatchSetActiveTab: setActiveTab,
    }, dispatch)

};

const mapStateToProps = state => {
  return {
    myself: state.user
  }
};

@connect(mapStateToProps, mapDispatchToProps)
// @autobind
@Radium
class SocialUser extends PureComponent {

    constructor(props){
      super(props);

      this.state = {
        id: this.props.item.id,
        followButtonStatus: this.props.item.status.following,
        addFriendButtonStatus: this.props.item.status.friend,
      }

      this._renderButtons = this._renderButtons.bind(this);
      this.onPressAddFriend = this.onPressAddFriend.bind(this);
      this.onPressFollow = this.onPressFollow.bind(this);
      this.changeHandlerFollowing = this.changeHandlerFollowing.bind(this);
      this.changeHandlerFriend = this.changeHandlerFriend.bind(this);

    }


   render() {
      let {item} = this.props;
      let flexInformationArea = R.isEmpty(item.description) ? 0.3 : 1

      let headerStyles = {
          height: !this.props.fromModal ? 393 : 250,
          width: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: 'url('+item.cover.lm+')',
          cursor: 'pointer',
      }
      let fromModal = true;
      if(!R.isNil(this.props.fromModal) && this.props.fromModal){
          fromModal = false;
      }

      let ismyself =  this.props.myself.id === this.props.item.id

      return (
        <div style={ styles.container} >

          <div style={styles.coverContainer}>

            <div
                style={headerStyles}
                onClick  = { () => this.goToUsers(item.id) }
            ></div>

            <div style = {styles.avatarAndButtonsWrapper}>
              <div style = {styles.avatarWrapper}>
                <img
                    src = {item.avatar.sm}
                    style = {styles.avatar}
                    onClick  = { () => this.goToUsers(item.id) }
                />
              </div>

              <div style={styles.buttonsArea}>
                {fromModal  && !ismyself ? this._renderButtons() : null}
              </div>

            </div>

          </div>

          <div style={[styles.informationArea, {flex: flexInformationArea}]}>
            <div style={styles.nameSection}>
              <p style={styles.name} onClick={ () => this.goToUsers(item.id) }>{item.firstName} {item.lastName}</p>
            </div>

            <div style={styles.descriptionSection}>
              {
                !R.isEmpty(item.description) ?
                  <p style={styles.description}>{item.description}</p>
                  :
                  null
              }
            </div>
          </div>
        </div>
      );
   }

    goToUsers(userId) {
        let {history, myself} = this.props;
        if(R.equals(userId, myself.id)) history.push({ pathname:'/me/', state: { userId: userId } });
        else history.push({ pathname:`/users/${userId}`, state: { userId: userId } });
    }


    changeHandlerFollowing(value) {
        this.setState({followButtonStatus: value});
    }

    changeHandlerFriend (value) {
        this.setState({addFriendButtonStatus: value});
    }

   _renderButtons() {
    return (
      <div style={styles.buttonsWrapper}>

        <div style={styles.buttonWrapper}>
          <div>
            <ButtonSocial
                type ={'friend'}
                status={this.state.addFriendButtonStatus}
                id = {this.state.id}
                onChange = {this.changeHandlerFriend.bind() }
            />
          </div>

          <span style = { styles.followersText }>
            {this.props.item.friends + CONSTANTS.FEED.SOCIAL_USER_FRENDS_INFO}
          </span>
        </div>

        <div style={styles.buttonWrapper}>

          <div>
            <ButtonSocial
                type ={'following'}
                status = {this.state.followButtonStatus}
                id = {this.state.id}
                onChange = {this.changeHandlerFollowing.bind() }
            />
          </div>

          <span style = { styles.followersText }>
            {this.props.item.followers + CONSTANTS.FEED.SOCIAL_USER_FOLLOWERS_INFO}
          </span>
        </div>

      </div>
    )
  }

  onPressFollow() {
    this.setState({followButtonIsActive: !this.state.followButtonIsActive})
  }

  onPressAddFriend() {
    this.setState({addFriendButtonIsActive: !this.state.addFriendButtonIsActive})
  }

}

// SocialUser.contextTypes = {
//   history: PropTypes.object
// };

export default SocialUser;
