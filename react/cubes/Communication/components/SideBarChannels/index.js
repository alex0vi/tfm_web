'use strict';

let ReactDOM = require('react-dom');

import React, {PureComponent}       from 'react';
import {Provider}                   from 'react-redux'
import {connect}                    from 'react-redux';
import {bindActionCreators}         from 'redux';
import R                            from 'ramda';
import Radium                       from 'radium';

import {
  Link,
  Redirect
} from 'react-router-dom';


import PropTypes                    from 'prop-types';

import Channel                      from '../../../../components/Channel/';
import Search                       from '../Search/';
import Contact                      from '../AlphabeticalList/components/Contact';

import {setChannels}                from '../../../../../store/actionsCreators/communication/setChannels';
import Slide                        from '../../../../ComponentsWithEffects/Slide';
import {
    openNewChannel,
    onSwitchChannel,
    openChannelFromNotification,
}                                   from '../../utils/';

const api                           =   require('../../../../../../app/js/devel/modules-system/api-calls').apiv2;



const getId = R.pipe(
    R.split('/'),
    R.remove(0,2),
    R.head,
)

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

const mapStateToProps = (state, ownProps) => {

    return {
        channels       :    state.communication.channels,
        // activeChannel  :    state.communication.activeChannel,
    }
}

const mapDispatchToProps = dispatch => {

    return bindActionCreators({
        dispatchSetChannels: setChannels,
    }, dispatch)
};


@connect(mapStateToProps, mapDispatchToProps)
@Radium
class SideBarChannels extends PureComponent {
    constructor(props){
        super(props)

        this.state = {
            currentRoomId               :    null,
            searchText                  :    '',
            isSearching                 :    false,
            hoveredChannel              :    null,
            searchChats                 :    [],
            searchFriends               :    [],
            globalSearch                :    [],
            minimizedChannelSM          :    false,
            minimizedChannelXSM         :    false,
         }

        this.renderMenuItem                     = this.renderMenuItem.bind(this);
        this.renderGeneralChatSearch            = this.renderGeneralChatSearch.bind(this);
        this.renderContact                      = this.renderContact.bind(this);
        this.switchChannel                      = this.switchChannel.bind(this);

    }


    componentWillMount() {
        let {cubeInstance} = this.props;
        if(!R.isNil(this.props.redirect)) {
            let channelId = R.last(R.split('/', this.props.redirect));
            openChannelFromNotification(channelId)
        }

        api.get('user/channels').then((channels) => {
            this.props.dispatchSetChannels(channels);
        })

        if(R.equals(this.props.location.pathname, '/')) this.setState({currentRoomId: null});
        else this.setState({currentRoomId: getId(this.props.location.pathname)});

        let $cube = $(`#${cubeInstance.getDomCube()[0].getAttribute('id')}`);
        $cube.resize( (event)=> {
            if( $cube.hasClass('cube-size-is-xsm')){
                if(!this.state.minimizedChannelXSM) this.setState( {minimizedChannelXSM: true});
            }
            else{
                if(this.state.minimizedChannelXSM) this.setState( {minimizedChannelXSM: false});
            }

            if( $cube.hasClass('cube-size-is-sm')){
                if(!this.state.minimizedChannelSM) this.setState( {minimizedChannelSM: true});
            }
            else{
                if(this.state.minimizedChannelSM) this.setState( {minimizedChannelSM: false});
            }
        })

    }

    shouldComponentUpdate(nextProps, nextState) {

        if (!R.equals(nextState.searchText, this.state.searchText)) {
            let qTerm = nextState.searchText;

            if(this.state.isSearching){
                let excludeActiveChannels = true;

                // previewSearch?qTerm=ad&types=[USER]

                Promise.all([
                    api.get('user/channels/search', {qTerm}),
                    api.get('user/friends/search', {qTerm, excludeActiveChannels}),
                    api.get('previewSearch', {qTerm, types: ['USER']} )
                ])
                    .then( (data) => {

                        const renameKeys = R.curry((keysMap, obj) =>
                            R.reduce((acc, key) => R.assoc(keysMap[key] || key, obj[key], acc), {}, R.keys(obj))
                        );

                        const transformSearch = (user) => {
                            let {item} = user;
                            let splittedName    = R.split(' ', item.name);
                            let firstName       = splittedName[0];
                            let lastName        = splittedName[1];

                            let newItem = renameKeys({ image: 'avatar'})(item);
                            newItem     = R.dissoc('name', newItem);
                            newItem     = R.assoc( 'firstName', firstName,  newItem);
                            newItem     = R.assoc( 'lastName',  lastName,   newItem);

                            return newItem;
                        }

                        let globalSearch = R.map(transformSearch, data[2])
                        this.setState({
                            searchChats:    data[0],
                            searchFriends:  data[1],
                            globalSearch:   globalSearch
                        });
                    });

            }
        }
        return true;
    }

    transformData() {

    }

    render(){
        if(R.isNil(this.props.channels)){
            return null
        }

        return(

                <div className="left-side-communication-cube" style={routingStyles.sideBarContainer}>
                    <div style= {{position: 'relative', overflow:'hidden', height:'100%', width: '100%'}}>
                        <Slide
                            in          = {true}
                            duration    = {1000}
                            classNames  = 'slideInFromLeft'
                            key         = 'new-quickLink-transition'
                        >
                                <div style={{position:'relative', width:'100%', height:'100%', display:'flex', flexDirection:'column'}}>
                                    {/*Search*/}
                                    <Search
                                        ref             = {(searchText) => { this.searchText = searchText; }}
                                        handleChange    = { (event) => this.handleChange(event) }
                                        text            = { this.state.searchText }
                                        onFocus         = { () => this.changeStateFocus(true) }
                                        focus           = { false }
                                        placeholder     = { 'Search message, group, friend...'}
                                    />

                                    {/*Scroll list */}
                                    <div style = { routingStyles.sideBar }>
                                        {
                                            this.state.isSearching && !R.isEmpty(this.state.searchText) ?
                                                this.renderGeneralChatSearch()
                                            :
                                                R.map( (key) => this.renderMenuItem(this.props.channels[key]), R.keys(this.props.channels))

                                        }
                                    </div>
                                </div>
                        </Slide>
                    </div>
                </div>

        )
    }

    renderGeneralChatSearch(){
        /** TO DO: abstract with alphabetical list */
        return(
            <div>
                { /* render chat label */}
                {
                    R.isEmpty(this.state.searchChats) ?
                        null
                    :
                        <div style = { routingStyles.labelGeneralSearch }>CHATS</div>
                }
                { /* render chat channels */}
                {R.map( this.renderMenuItem, this.state.searchChats )}

                { /* render friends label */}
                {
                    R.isEmpty(this.state.searchFriends) ?
                        null
                    :
                        <div style = {routingStyles.labelGeneralSearch}>FRIENDS</div>
                }
                { /* render friends  */}
                {R.map( this.renderContact, this.state.searchFriends )}

                { /* render global search label */}
                {
                    R.isEmpty(this.state.globalSearch) ?
                        null
                    :
                        <div style = {routingStyles.labelGeneralSearch}>GLOBAL SEARCH</div>
                }
                {R.map( this.renderContact, this.state.globalSearch )}


            </div>

        )
    }

    renderContact(item){
        return(
            <Contact
                key             = { `contact-${item.id}`}
                item            = { item }
                listType        = {'OpenChatOrGroupChat'}
                openNewChannel  = { () => openNewChannel(item, this.state.currentRoomId, this.props.history) }
                history         = { this.props.history }
            />
        )
    }

    renderMenuItem(channel) {
        let { cubeInstance } = this.props;
        let url             = `/chat/${channel.item.id}/channels`;
        let key             = channel.item.id;

        let state = {
            item:   channel.item,
            type:   channel.type,
        }

        let auxStyleHoverChannel;
        if(R.equals(key, this.state.hoveredChannel) || R.equals(R.toString(key), this.state.currentRoomId)) auxStyleHoverChannel =  {backgroundColor:'#F5F5F5'};

        return(
            <Link
                key         = {`channelLink-${key}`}
                style       = {{textDecoration:'none'}}
                to          = {{
                    pathname:   url,
                    state:      state
                }}
                onClick     = { () => this.switchChannel(channel) }
                onMouseEnter= {() => this.onHoverChannel(key)}
                onMouseLeave= {() => this.onHoverChannel(null)}
            >
                <Channel
                    key                     = { `Channel-${key}`}
                    type                    = { channel.type    }
                    item                    = { channel.item    }
                    style                   = { auxStyleHoverChannel }
                    minimizedChannelSM      = {this.state.minimizedChannelSM}
                    minimizedChannelXSM     = {this.state.minimizedChannelXSM}
                />
            </Link>
        )
    }

    switchChannel(channel) {

        let room = onSwitchChannel(channel, this.state.currentRoomId);

        this.setState({
            currentRoom     :   room,
            currentRoomId   :   R.toString(channel.item.id),
        });
    }

    onHoverChannel(value){
        this.setState({hoveredChannel: value});
    }

    // Search auxiliar functions
    changeStateFocus(value){
        this.setState({isSearching: value})
    }

    handleChange(event){
        this.setState({searchText: event.target.value})
    }

}




SideBarChannels.defaultProps = {
    cubeInstance            : {},
    history                 : {},
    location                : {},
};

SideBarChannels.propTypes = {
    cubeInstance           : PropTypes.object,
    history                : PropTypes.object,
    location               : PropTypes.object,
};

export default SideBarChannels;
