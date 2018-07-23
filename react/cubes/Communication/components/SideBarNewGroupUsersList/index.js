'use strict';

let ReactDOM = require('react-dom');

import React, {PureComponent}       from 'react';
import {Provider}                   from 'react-redux'
import {connect}                    from 'react-redux';
import {bindActionCreators}         from 'redux';
import R                            from 'ramda';
import Radium                       from 'radium';


import Slide                        from '../../../../ComponentsWithEffects/Slide';

import {
  MemoryRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom';

import PropTypes                    from 'prop-types';

import {COLORS}                       from '../../../../globals/colors.js';

import Channel                      from '../../../../components/Channel/';
import InfoMessage                  from '../InfoMessage/';
import Search                       from '../Search/';
import AlphabeticalList             from '../AlphabeticalList/';
import Chat                         from '../Chat';

import {
    getUsersContainerSortedByLetter,
    openNewChannel,
    onSwitchChannel,
    openChannelFromNotification,
    openNewGroupChannel
}                                   from '../../utils/';

const FirstChild = (props) => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
}


const api                           =   require('../../../../../../app/js/devel/modules-system/api-calls').apiv2;

const styles = {
    leftSideContainer:{
        position: 'absolute',
        backgroundColor: 'rgb(255, 255, 255)',
        borderRight: '1px solid rgb(224, 224, 224)',
        left: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
    },
    listsContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: '10px 0px',
    },
    listOfUsersContainer:{
        maxHeight: 125,
        overflow:'scroll',
    },
    listUsersToSelectContainer:{
        overflow: 'scroll',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    createGroupButtonContainer:{
        height: 70,
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
    },
    wrapperIconButton:{
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        display: 'flex',
        width: 30,
        height: 30,
        alignItems: 'center',
        borderRadius: 15,
        cursor: 'pointer',
    },
    icon:{
        fontSize: 18,
        color: 'white',
    },
    wrapperUserLabel:{
        position: 'relative',
        height: 20,
        display: 'flex',
        alignItems: 'center',
        margin: '5px 0px 5px 10px',
    },
    userLabel:{
        backgroundColor: '#EDECED',
        borderRadius: 20,
        display: 'flex',
        padding: '0px 5px 0px 0px',
    },
    avatar:{
        height:20,
        width: 20,
        borderRadius: 10,
        display:'flex',
        alignItems: 'center',
        marginRight: 5,
    },
    username:{
        color: '#373737',
        fontSize: 12,
        fontFamily: "Avenir Next",
        fontSize: 12,
        fontWeight: 500,
    },
    wrapperButtonClose:{
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
        height: 20,
        width: 20,
        borderRadius: 10,
        cursor: 'pointer',
    },
    iconClose:{
        fontSize: 12,
        marginLeft: 5,
    },
}

const mapStateToProps = (state, ownProps) => {

    return {
        activeChannelId   :    state.communication.activeChannel.item.id,
    }
}

@connect(mapStateToProps, null)
@Radium
class SideBarNewGroupUsersList extends PureComponent {
    constructor(props){
        super(props)

        this.state = {
            currentRoomId               :    !R.isNil(props.redirect) ? R.last(R.split('/', props.redirect)) : null,
            searchText                  :    '',
            friends                     :    null,
            isSearching                 :    false,
            contacts                    :    [],
        }

        this.handleChange                       = this.handleChange.bind(this);
        this.renderUserLabelListOfUsersNewGroup =  this.renderUserLabelListOfUsersNewGroup.bind(this);
        this.changeStateFocus                   = this.changeStateFocus.bind(this);
        this.renderListOfUsers                  = this.renderListOfUsers.bind(this);
        this.goToNewGroupSettingsConfiguration  = this.goToNewGroupSettingsConfiguration.bind(this);
    }


    componentWillMount() {
        if(!R.isNil(this.props.redirect)) {
            let channelId = R.last(R.split('/', this.props.redirect));
            openChannelFromNotification(channelId)
        }

        api.get('user/friends').then((friends) => {
                let orderedFriends = getUsersContainerSortedByLetter(friends);
                this.setState({ friends : orderedFriends })
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (!R.equals(nextState.searchText, this.state.searchText) || !R.equals(this.props.listOfUsersNewGroup, nextProps.listOfUsersNewGroup)) {
            let qTerm = nextState.searchText;

            if(R.isEmpty(nextState.searchText)){
                api.get('user/friends').then((friends) => {
                    let newListOfFriends = R.reject( (friend) => R.find(R.propEq('id', friend.id))(nextProps.listOfUsersNewGroup), friends);
                    let orderedFriends = getUsersContainerSortedByLetter(newListOfFriends);
                    this.setState({friends   : orderedFriends})
                })
            }

            api.get('search/user/friends', {qTerm})
                .then( (data) => {
                    let newListOfContacts = R.reject( (friend) => R.find(R.propEq('id', friend.id))(nextProps.listOfUsersNewGroup), data);
                    let orderedSearchFriends = getUsersContainerSortedByLetter(newListOfContacts)
                    this.setState({contacts: orderedSearchFriends});
                    this.forceUpdate();
                });
        }
        return true;
    }



    render(){
        let heightListOfUsers =   50 * this.props.listOfUsersNewGroup.length;
        if(heightListOfUsers > 201) heightListOfUsers = 200;
        let auxStyleListOfUsers = { height:  heightListOfUsers }

        if(R.isNil(this.state.friends)){
            return null
        }
        return(
            <div className="left-side-communication-cube" style={styles.leftSideContainer}>
                <div style= {{position: 'relative', overflow:'hidden', height:'100%', width: '100%'}}>
                    <Slide
                        in          = {true}
                        duration    = {1000}
                        classNames  = 'slideInFromLeft'
                        key         = 'new-quickLink-transition'
                    >
                        <div style = {{ display: 'flex', flexDirection: 'column', position: 'relative', width: '100%', height: '100%'}}>
                            {/*left side*/}
                            <Search
                                ref             = {(searchText) => { this.searchText = searchText; }}
                                handleChange    = { this.handleChange       }
                                text            = { this.state.searchText   }
                                onFocus         = { () => this.changeStateFocus(true) }
                                focus           = { false }
                                placeholder     = { 'Search friend...'}
                            />

                            <div style = {styles.listsContainer}>
                                {/* users selected */}
                                <div
                                    style = {[styles.listOfUsersContainer, auxStyleListOfUsers]}
                                >
                                    {R.map( this.renderUserLabelListOfUsersNewGroup, this.props.listOfUsersNewGroup)}
                                </div>

                                {/*list of users to select*/}
                                <div style = {styles.listUsersToSelectContainer}>
                                    {this.showContacts('newGroup')}
                                </div>
                            </div>
                            {/*button to create group config*/}
                            <div style = {styles.createGroupButtonContainer}>
                                <div
                                    style = {styles.wrapperIconButton}
                                    onClick = {() => this.goToNewGroupSettingsConfiguration()}
                                >
                                    <i className="material-icons" style = {styles.icon}>arrow_forward</i>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        )
    }

    renderUserLabelListOfUsersNewGroup(item){
        return(
            <div style = {styles.wrapperUserLabel}>
                <div style = {styles.userLabel}>
                    <img src={item.avatar.sm} style={styles.avatar }/>
                    <span style = {styles.username}> {`${item.firstName} ${item.lastName}`}</span>
                    <div
                        style = {styles.wrapperButtonClose}
                        onClick = {() => this.removeItemToListOfUsersNewGroup(item)}
                    >
                        <i style = {styles.iconClose} className="material-icons">close</i>
                    </div>
                </div>
            </div>
        )
    }

    removeItemToListOfUsersNewGroup(item){
        let newListOfUsersNewGroup = R.reject( (user) => R.equals(user.id, item.id), this.props.listOfUsersNewGroup);
        this.props.setStateListOfUsersNewGroup(newListOfUsersNewGroup);
    }

    showContacts(type) {
        /* TO DO: change names */
        if(R.isEmpty(this.state.searchText)){

            if(R.isEmpty(this.state.friends)) {
                return (
                    <InfoMessage
                        area ={'left'}
                        text = {"You don\'t have friends yet..."}
                        />
                    )
            }
            else return (this.renderListOfUsers('friends', type));
        }
        else{
            if(R.isEmpty(this.state.contacts)) {
                return (
                    <InfoMessage
                        area ={'left'}
                        text = {"No results found."}
                    />
                )
            }
            else return (this.renderListOfUsers('contacts', type));
        }
    }


    renderListOfUsers(listName, type){
        return(
            <AlphabeticalList
                list                     = { this.state[`${listName}`] }
                listType                 = {type}
                currentRoomId            = { this.state.currentRoomId }
                onClickUserOnNewGroup    = { (item) => this.addUserToNewGroupList(item)}
                history                  = {this.props.history}
            />
        )
    }

    addUserToNewGroupList(item){
        let newListOfUsersNewGroup = R.append(item, this.props.listOfUsersNewGroup)
        this.props.setStateListOfUsersNewGroup(newListOfUsersNewGroup);
    }


    // Search auxiliar functions
    changeStateFocus(value){
        this.setState({isSearching: value})
    }

    handleChange(event){
        this.setState({searchText: event.target.value})
    }

    goToNewGroupSettingsConfiguration(){
        let {isConversationOpen, history, activeChannelId, listOfUsersNewGroup} = this.props;
        if(isConversationOpen) history.push({ pathname:`/chat/${activeChannelId}/newGroupConfig` });
        else  history.push({ pathname:`/chat/newGroupConfig` });
    }

}


SideBarNewGroupUsersList.defaultProps = {
    isConversationOpen           : false,
    history                      : {},
    setStateListOfUsersNewGroup : ()=> console.log('setStateListOfUsersNewGroup not exist'),
    listOfUsersNewGroup          : [],
};

SideBarNewGroupUsersList.propTypes = {
    isConversationOpen           : PropTypes.bool,
    history                      : PropTypes.object,
    setStateListOfUsersNewGroup : PropTypes.func,
    listOfUsersNewGroup          : PropTypes.array,
};

export default SideBarNewGroupUsersList;
