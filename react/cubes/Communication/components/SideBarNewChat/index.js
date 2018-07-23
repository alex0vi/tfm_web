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
import Chat                         from '../Chat';
import Search                       from '../Search/';
import InfoMessage                  from '../InfoMessage';
import AlphabeticalList             from '../AlphabeticalList/';

import {
    getUsersContainerSortedByLetter,
    openNewChannel,
    onSwitchChannel,
    openChannelFromNotification,
}                                   from '../../utils/';

const api                           =   require('../../../../../../app/js/devel/modules-system/api-calls').apiv2;

const FirstChild = (props) => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
}

const routingStyles = {
    container: {
        display:            'flex',
        flexDirection:      'column',
        width:              '100%',
        backgroundColor:    '#ffffff',
        top:                40,
        bottom:             0,
        position:           'absolute',
    },
    sideBarContainer:{
        position: 'absolute',
        backgroundColor: 'rgb(255, 255, 255)',
        borderRight: '1px solid rgb(224, 224, 224)',
        left: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
    },
    sideBar: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'scroll',
    },
    labelGeneralSearch:{
        width: '100%',
        height: 40,
        color: '#FF6C6F',
        fontFamily: "Avenir Next",
        fontSize: 14,
        fontWeight: 500,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}

@Radium
class SideBarNewChat extends PureComponent {
    constructor(props){
        super(props)

        this.state = {
            currentRoomId               :    !R.isNil(props.redirect) ? R.last(R.split('/', props.redirect)) : null,
            searchText                  :    '',
            friends                     :    null,
            isSearching                 :    false,
            contacts                    :    [],
        }

        this.renderListOfUsers   = this.renderListOfUsers.bind(this);
        this.showContacts        = this.showContacts.bind(this);
        this.changeStateFocus    = this.changeStateFocus.bind(this);
        this.handleChange        = this.handleChange.bind(this);
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

        if (!R.equals(nextState.searchText, this.state.searchText)) {
            let qTerm = nextState.searchText;

            api.get('search/user/friends', {qTerm})
                .then( (data) => {
                    let orderedSearchFriends = getUsersContainerSortedByLetter(data)
                    this.setState({contacts: orderedSearchFriends});
                    this.forceUpdate();
                });
        }
        return true;
    }

    render(){
        if(R.isNil(this.state.friends)){
            return null
        }

        return(
            <div className="left-side-communication-cube" style={routingStyles.sideBarContainer}>
                <div style= {{position: 'relative', overflow:'hidden', height:'100%', width: '100%'}}>
                    <Slide
                        in          = {true}
                        duration     = {1000}
                        classNames  = 'slideInFromLeft'
                        key         = 'new-quickLink-transition'
                    >
                        <div style={{position:'relative', width:'100%', height:'100%', display:'flex', flexDirection:'column'}}>
                            <Search
                                ref             = {(searchText) => { this.searchText = searchText; }}
                                handleChange    = { (event) => this.handleChange(event) }
                                text            = { this.state.searchText }
                                onFocus         = { () => this.changeStateFocus(true) }
                                focus           = { false }
                                placeholder     = { 'Search friends'}
                            />

                            <div style = { routingStyles.sideBar }>
                                    {this.showContacts('newChat')}
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        )
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
        let {history, currentRoomId} = this.props;
        return(
            <AlphabeticalList
                key                      = {'newUserList'}
                list                     = { this.state[`${listName}`] }
                listType                 = { type}
                currentRoomId            = { this.state.currentRoomId }
                history                  = { this.props.history}
            />
        )
    }

    // Search auxiliar functions
    changeStateFocus(value){
        this.setState({isSearching: value})
    }

    handleChange(event){
        this.setState({searchText: event.target.value})
    }
}

SideBarNewChat.defaultProps = {
        history  : {},
};

SideBarNewChat.propTypes = {
        history  : PropTypes.object,
};

export default SideBarNewChat;
