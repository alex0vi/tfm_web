'use strict';

import R                        from 'ramda';
import React, {PureComponent}   from 'react';
import ReactDOM                 from 'react-dom';
import {bindActionCreators}     from 'redux';
import Radium                   from 'radium';
import autobind                 from 'autobind-decorator';
import Slider                   from 'react-slick';

import Dialog                   from 'material-ui/Dialog';
import FlatButton               from 'material-ui/FlatButton';
import TextField                from 'material-ui/TextField';
import Divider                  from 'material-ui/Divider';
import IconButton               from 'material-ui/IconButton';
import FontIcon                 from 'material-ui/FontIcon';

import {COLORS}                   from '../../globals/colors.js';
import CONSTANTS                from '../../globals/constants.js';

import SocialUser               from '../../cubes/Social/components/SocialUser'
import SocialBoard              from '../../cubes/Social/components/SocialBoard'
import SocialApp                from '../../cubes/Social/components/SocialApp'
import SocialWebLink            from '../../cubes/Social/components/SocialWebLink'
// import eventEmitter             from '../../services/eventEmitterService';

const api           =   require('../../../../app/js/devel/modules-system/api-calls').apiv2;


import {
    MdClose,
} from 'react-icons/lib/md';

const DIALOG_WIDTH = 500;
const DIALOG_BODY_HEIGHT = 'auto';

const TEXT_AREA_DESCRIPTION_HEIGHT = 120;

const avatarSize = 40;

const styles = {
    container: {
        zIndex: 4,
        backgroundColor: 'white',
        width: DIALOG_WIDTH,
        height: DIALOG_BODY_HEIGHT,
        position: 'absolute',
        // transform: 'translate(-50%, -50%)',
        boxShadow: '0 0 4px 0 rgba(0,0,0,0.12), 0 4px 4px 0 rgba(0,0,0,0.24)'
    },
    header: {
        margin: '5px 10px'
    },
    avatar: {
        width: avatarSize,
        height: avatarSize,
        borderRadius: avatarSize / 1.5,
        margin: '0 10px 0 0px',
        borderStyle: 'solid',
        borderColor: '#cccccc'
    },
    avatarFriends: {
        width: 25,
        height: 25,
        borderRadius: 25 / 1.5,
        margin: '0 10px 0 10px',
        borderStyle: 'solid',
        borderColor: '#cccccc'
    },
    userComment: {
        margin: '5px 0'
    },
    inputField: {
        border: 'none'
    },
    cardContainer: {
        border: 'solid 0.5px #BDBDBD',
        margin: '0px 10px',
        display: 'flex',
        // flex: 2.5,
        backgroundColor: 'white'
    },
    card: {},
    line: {
        // position: 'absolute',
        // bottom: 60,
        width: '95%',
        margin: '30px 10px 15px 10px',
        height: '0.5px',
        backgroundColor: '#E0E0E0'
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        margin: '0px 10px',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    mentionButton: {
    //     position: 'absolute',
    //     bottom: '-5px',
    //     left: 15,
        border: 'hidden',
        backgroundColor: 'transparent'
    },
    icon: {
        fontSize: 30,
        color: '#ff6c6f'
    },
    friendsTagContainer: {
        // position: 'absolute',
        // bottom: 10,
        // left: 45
    },
    taggedFriendsRow: {
        display: 'flex',
    },
    inputFieldFriendsTag: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '20px',
        width: 350,
        borderTop: 'none',
        borderRight: 'none',
        borderLeft: 'none',
        borderBottom: 'solid 0.5px #BDBDBD',
        padding: 0
    },
    button: {
        borderWidth: 0.5,
        borderColor: COLORS.primary,
        borderRadius: 4,
        height: 33,
        width: 64,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        // position: 'absolute',
        // bottom: 10,
        // right: 15
    },
    buttonText: {
        fontSize: 14,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    buttonClose: {
        border: 'hidden',
        backgroundColor: 'transparent',
        outline: 'none',
    },
    iconClose: {
        width: 20,
        height: 20,
        color: 'black'
    },
    modalView: {
        width: 350,
        position: 'absolute',
        bottom: 45,
        left: 55,
        backgroundColor: 'white',
    },
    label: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 350,
        height: 30,
        border: 'solid 0.5px #BDBDBD',
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    sharedFriendsContainer: {
        display:'flex',
        flexDirection: 'row',
        paddingVertical: 5,
        backgroundColor: 'transparent'
    },
    materialIconTagFriendContainer: {
        border: 'none',
        backgroundColor: 'transparent',
        margin: '0 5px'
    }
};

const CARD_MAPPING = {
    'USER': SocialUser,
    'BOARD': SocialBoard,
    'WEBLINK': SocialWebLink,
    'APP': SocialApp
};

const API_MAPPING = {
    'USER': 'users',
    'BOARD': 'boards',
    'WEBLINK': 'weblinks',
    'APP': 'apps'
};

// const mapStateToProps = state => {
//
//     let myself = state.profileScreen.myself;
//
//     return {myself};
//
// };


// @connect(mapStateToProps, mapDispatchToProps)
@autobind
@Radium
class PopUpShare extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            textInputText: '',
            post: null,
            friends: [],
            taggedFriends: [],
            modalVisible: false

        }

        this.handleClose = this.handleClose.bind(this);
        this._renderUserInformation = this._renderUserInformation.bind(this);
        this._renderUserComment = this._renderUserComment.bind(this);
        this._renderTaggedFriends = this._renderTaggedFriends.bind(this);
        this._renderCard = this._renderCard.bind(this);
        this._renderFriends = this._renderFriends.bind(this);
        this._getFriends = this._getFriends.bind(this);
        this.onPressShare = this.onPressShare.bind(this);
        this.deleteTaggedFriend = this.deleteTaggedFriend.bind(this);
        this._renderFriendRow = this._renderFriendRow.bind(this);
        this._renderTaggedFriend = this._renderTaggedFriend.bind(this);

    }

    handleClose() {

        this.setState({textInputText: ''});
        this.props.onClick();
    }

    onTextInputChange(e) {

        let textInputText = e.target.value;

        this.setState({textInputText})
    }

    render() {
        let {myself, item, type} = this.props;

        let myAvatar = myself.avatar;
        let myFullName = myself.fullname;

        if(this.props.isOpenShareDialog) {
            return (
                <div
                    style       = {styles.container}
                    className   = {'PopUpGeneral'}
                >

                    <div style={[styles.header]}>
                        { this._renderUserInformation(myself) }
                        { this._renderUserComment() }
                        { this._renderTaggedFriends() }
                    </div>

                    { this._renderCard() }

                    <div style={styles.line}></div>

                    { this._renderFriends() }

                    <div style={styles.actions}>

                        <view style={styles.mentionButton} >
                            <span style={styles.icon}>
                              @
                            </span>
                        </view>

                        <div
                          style={styles.friendsTagContainer}
                        >

                            <input
                                type='text'
                                style={[styles.inputFieldFriendsTag]}
                                onChange={(text) => {
                                    text.target.value.length > 0 ?
                                        this.onChangeHandler('modalVisible', true)
                                        :
                                        this.onChangeHandler('modalVisible', false)
                                    this._getFriends(text.target.value)
                                    this.onChangeHandler('friendToSearch', text.target.value)
                                }}
                                onFocus={(event) => this.onFocusSearchBar()}
                                placeholder={CONSTANTS.ACTIONS.SEARCH_A_FRIEND}
                            />
                        </div>

                        <button
                            onClick = { this.onPressShare.bind() }
                            style =   { styles.button }
                        >
                            <span style={styles.buttonText}>{CONSTANTS.ACTIONS.POST}</span>
                        </button>
                    </div>
                </div>
            );
        }
        else {
            return null
        }
    }

    onChangeHandler(state, value){
        this.setState({[state]: value})
    }

    onFocusSearchBar(){
        this.setState({friendToSearch: '', modalVisible: false})
    }

    _renderUserInformation(myself) {
        return(
            <div style={styles.userInformation}>
                <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}>
                    <div>
                        <img src={myself.avatar.xs} style={styles.avatar} />

                        <span style={styles.name}>
                          {myself.firstName} {myself.lastName }
                        </span>
                    </div>

                    <button
                        onClick = { this.handleClose.bind() }
                        style =   { styles.buttonClose }
                    >
                        <MdClose style={styles.iconClose}/>
                    </button>

                </div>
            </div>
        )
    }

    _renderUserComment() {
        return(
            <div style={styles.userComment}>
                <input
                    type='text'
                    style={[styles.inputField]}
                    onChange={(text) => {
                        this.onChangeHandler('textInputText', text.target.value)
                        if(R.isEmpty(this.state.textInputText)) {
                           this.onChangeHandler('modalVisible', false)
                        }
                    }}
                    onFocus={(event) => this.onChangeHandler('textInputText', '')}
                    placeholder={CONSTANTS.ACTIONS.WRITE_SOMETHING}
                />
            </div>
        )
    }

    _renderCard() {

      let RenderType = CARD_MAPPING[this.props.type];

      return (
        <div style={styles.cardContainer}>
            <RenderType
                fromModal={true}
                item={this.props.item}
                type={this.props.type}
                isElementToShare = {true}
            />
        </div>

      )
    }

    _renderTaggedFriends() {

        var settings = {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1
        };

        return (
            <div style={[styles.sharedFriendsContainer]}>
                <span style={{color: "#757575", fontSize: 14}}>{CONSTANTS.ACTIONS.SHARED_WITH} </span>
                {
                    // <Slider {...settings} >
                    //     {  R.map( this._renderTaggedFriend,  this.state.taggedFriends) }
                    // </Slider>
                }


                <div style={styles.taggedFriendsRow}>
                    {
                        R.map(this._renderTaggedFriend.bind(), this.state.taggedFriends)
                    }
                </div>

            </div>
        )
    }

    _renderTaggedFriend(friend) {
        let name = friend.firstName + " " + friend.lastName

        return(
            <div style={{display: 'flex', flexDirection: 'row', backgroundColor: COLORS.primary, alignItems: 'center', borderRadius: 20, paddingHorizontal: 8, marginRight: 5}}>
                <span style={{color: "#373737", fontSize: 14}}>{name}</span>
                <button
                    style={[styles.materialIconTagFriendContainer]}
                    onClick={ () =>  this.deleteTaggedFriend(friend) }
                >
                    <MdClose  style = {[{fontSize: 15, color: '#373737'}] } />
                </button>
            </div>
        )
    }



    deleteTaggedFriend(friend) {
        let idToDelete = friend.id;
        let newTaggedFriends = R.filter(friend => idToDelete !== friend.id, this.state.taggedFriends)
        this.setState({taggedFriends: newTaggedFriends})
    }

    _renderFriends() {
        let friendsToShow = this._getFriendsToShow(this.state.friends, this.state.taggedFriends)

        if(this.state.modalVisible) {
            return (

                <div style={[styles.modalView]}>
                    {
                        R.map(this._renderFriendRow.bind(), friendsToShow)
                    }
                </div>
            )
        }
        else return null
    }


    _renderFriendRow(friend) {
      let avatarUrl = friend.avatar.xs;
      let name = friend.firstName + " " + friend.lastName;
      return (
        <button
          style={styles.label}
          onClick={() => this._onFriendPress(friend)}
        >
            <div style={{flex:1, alignItems:'center'}}>
                <img src={avatarUrl} style={[styles.avatarFriends]} />
            </div>
            <div style={{flex:7, alignItems:'flex-start'}}>
                <span style={{color: 'black', marginLeft: 15}}>{name}</span>
            </div>
        </button>
      )
    }



    /**
     * OnPress functions
     */

    _onFriendPress(friend) {
        let newFriends = R.append(friend, this.state.taggedFriends)
        this.setState({taggedFriends: newFriends})
        this.setState({friendToSearch: ''})
        this.setState({friends: []})
        this.setState({modalVisible: false})
    }

    onPressShare() {
        let itemId = this.props.item.id;
        let itemType = API_MAPPING[this.props.type];
        let taggedUsersIds = this._getIdTaggedUsers()

        let url = itemType + '/' + itemId + '/shares'

        let body = {
          text: this.state.textInputText,
          taggedUsers: taggedUsersIds
        }

        api.post(url, body)
            .then( data => {
                this.handleClose();
                this.props.onPressAddPost();
            })
            .catch(err => {
                console.log(err)
            });

    }

    /**
     * get functions
     */
    _getIdTaggedUsers() {
      return R.map((taggedFriend) => {
          return taggedFriend.id
      }, this.state.taggedFriends)
    }

    _getFriends(friendToSearch) {
        let url = 'search/user/friends'
        let qs = {
            qTerm: friendToSearch
        }
        api.get(url, qs)
            .then(friends => {
                this.setState({friends: friends})
            })
    }

    _getFriendsToShow(friends, taggedFriends ) {
      let taggedFriendsIds = R.map( taggedFriend => taggedFriend.id, taggedFriends );
      const rejectFn = friend => R.contains( friend.id,  taggedFriendsIds )
      let friendsToShow = R.reject( rejectFn , friends)
      return friendsToShow
    }
}

export default PopUpShare;
