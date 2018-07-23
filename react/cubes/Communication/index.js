'use strict';

let ReactDOM = require('react-dom');

import React, {PureComponent}           from 'react';
import {Provider}                       from 'react-redux'
import {connect}                        from 'react-redux';
import {bindActionCreators}             from 'redux';
import R                                from 'ramda';
import Radium                           from 'radium';
import PropTypes                        from 'prop-types';

import {
  MemoryRouter as Router,
  Route,
} from 'react-router-dom';



import TopBarCommunication              from './components/TopBarCommunication';
import SideBarChannels                  from './components/SideBarChannels';
import SideBarNewChat                   from './components/SideBarNewChat';
import SideBarNewGroupUsersList         from './components/SideBarNewGroupUsersList';
import SideBarNewGroupSettings          from './components/SideBarNewGroupSettings';
import MainContent                      from './components/MainContent';

import SimpleModalWithRouter            from '../../components/SimpleModalWithRouter';
import CubeTopBarBaseWithRouter         from '../../components/CubeTopBarBaseWithRouter';


import store                            from '../../../store';


import {setChannels}                                from '../../../store/actionsCreators/communication/setChannels';
import {resetCommunication}                         from '../../../store/actionsCreators/communication/resetCommunication';


import { leaveChannel }                             from './utils/';


const api                           =   require('../../../../app/js/devel/modules-system/api-calls').apiv2;



const mapStateToProps = (state, ownProps) => {
    return {
        activeChannel   :   state.communication.activeChannel,
        channels        :   state.communication.channels,
        modal           :   state.communication.modal,
    }
}

const mapDispatchToProps = dispatch => {

    return bindActionCreators({
        dispatchSetChannels: setChannels,
        dispatchResetCommunication: resetCommunication,
    }, dispatch)
};

@connect(mapStateToProps, mapDispatchToProps)
@Radium
class CommunicationRouting extends PureComponent {
    constructor(props){
        super(props)

        this.state = {
            currentRoom                 :    !R.isNil(props.channelId) ? props.channelId : null,
            isHoverCubeContent          :    false,
            isOpenInformationSection    :    false,
            listOfUsersNewGroup         :    [],
        }

        this.handlerSetState                = this.handlerSetState.bind(this);
        this.onCloseCube                    = this.onCloseCube.bind(this);
        this.openCloseInformation           = this.openCloseInformation.bind(this);
        this.moveChannelToTop               = this.moveChannelToTop.bind(this);
        this.setStateListOfUsersNewGroup    = this.setStateListOfUsersNewGroup.bind(this);
    }

    render(){
        return(
            <div className='cube-communication'>
                <Router className='communication-router'>
                    <div className='communication-router-div'>

                        <CubeTopBarBaseWithRouter
                            closeCallback   = { () => this.onCloseCube() }
                            cubeInstance    = { this.props.cubeInstance }

                        >
                            <TopBarCommunication
                                {...this.props}
                                openInformationSection  = { () => this.openCloseInformation()}
                                setStateListOfUsersNewGroup = {(value) => this.setStateListOfUsersNewGroup(value)}
                                listOfUsersNewGroup = {this.state.listOfUsersNewGroup}
                            />
                        </CubeTopBarBaseWithRouter>

                        <div
                            className       =  "communication-sidebar cube-content"
                            onMouseEnter    =  {() => this.handlerSetState('isHoverCubeContent', true)}
                            onMouseLeave    =  {() => this.handlerSetState('isHoverCubeContent', false)}
                        >
                            <Route exact path="/"                               render={ (props) => <SideBarChannels {...props} cubeInstance={this.props.cubeInstance} /> }   />
                            <Route path="/chat/:channelId/channels"             render={ (props) => <SideBarChannels {...props} cubeInstance={this.props.cubeInstance} /> }   />

                            <Route path="/chat/newChat"                         render={ (props) => <SideBarNewChat {...props} cubeInstance={this.props.cubeInstance} /> }   />
                            <Route path="/chat/:channelId/newChat"              render={ (props) => <SideBarNewChat {...props} cubeInstance={this.props.cubeInstance} /> }   />

                            <Route path="/chat/newGroupUsers"                   render={ (props) => <SideBarNewGroupUsersList {...props}
                                                                                                                    cubeInstance={this.props.cubeInstance}
                                                                                                                    setStateListOfUsersNewGroup = {(value) => this.setStateListOfUsersNewGroup(value)}
                                                                                                                    listOfUsersNewGroup = {this.state.listOfUsersNewGroup}
                                                                                                                    isConversationOpen = {false}/>
                                                                                        }   />
                            <Route path="/chat/:channelId/newGroupUsers"        render={ (props) => <SideBarNewGroupUsersList {...props}
                                                                                                                    cubeInstance={this.props.cubeInstance}
                                                                                                                    setStateListOfUsersNewGroup = {(value) => this.setStateListOfUsersNewGroup(value)}
                                                                                                                    listOfUsersNewGroup = {this.state.listOfUsersNewGroup}
                                                                                                                    isConversationOpen = {true}/>
                                                                                        }   />


                            <Route path="/chat/newGroupConfig"                  render={ (props) => <SideBarNewGroupSettings {...props}
                                                                                                                     cubeInstance = {this.props.cubeInstance}
                                                                                                                     setStateListOfUsersNewGroup = {(value) => this.setStateListOfUsersNewGroup(value)}
                                                                                                                     listOfUsersNewGroup = {this.state.listOfUsersNewGroup}
                                                                                                                     isConversationOpen = {false}/>
                                                                                        }   />
                            <Route path="/chat/:channelId/newGroupConfig"       render={ (props) => <SideBarNewGroupSettings {...props}
                                                                                                                     cubeInstance = {this.props.cubeInstance}
                                                                                                                     setStateListOfUsersNewGroup = {(value) => this.setStateListOfUsersNewGroup(value)}
                                                                                                                     listOfUsersNewGroup = {this.state.listOfUsersNewGroup}
                                                                                                                     isConversationOpen = {true}/>
                                                                                        }   />
                        </div>

                        <div className='communication-main-content'>

                            {
                                <Route      render= { (props) => <MainContent {...props}
                                                                    channel                 = {this.props.channel}
                                                                    openInformationSection  = {() => this.openCloseInformation()}
                                                                    isOpenInformationSection= {this.state.isOpenInformationSection}
                                                                    cubeInstance            = {this.props.cubeInstance}
                                                                    room                    = { this.state.currentRoom}
                                                                    moveChannelToTop        = {(channel)=>this.moveChannelToTop(channel)}
                                                                    cubeInstance            = {this.props.cubeInstance} />
                                                    }
                                />
                            }
                        </div>

                        <SimpleModalWithRouter
                            isVisible       = { this.props.modal.isVisible }
                            title           = { this.props.modal.title }
                            description     = { this.props.modal.description }
                            actionType      = { this.props.modal.actionType}
                        />

                    </div>
                </Router>
            </div>

        )
    }

    onCloseCube() {
        if(!R.isEmpty(this.props.activeChannel.item)) {
            leaveChannel(this.props.activeChannel.item.id);
            this.props.dispatchResetCommunication();
        }
        this.props.cubeInstance.close();
    }

    handlerSetState(type, value){
        this.setState({[type]: value});
    }

    openCloseInformation(){
        this.setState({isOpenInformationSection: !this.state.isOpenInformationSection});
    }

    moveChannelToTop(channelId){
        api.get(`${'user/channels/'}${channelId}`)
            .then( (channel) => {
                let channels = this.props.channels;
                let index = R.findIndex( R.pathEq(['item', 'id'], channelId), channels) ;
                let newChannelsList;

                if(!R.equals(index,-1)){
                    let channelsWithoutChannel = R.remove(index, 1, channels);
                    newChannelsList = R.insert(0, channel, channelsWithoutChannel);
                }
                else{
                    newChannelsList = R.prepend(channel, channels);
                }
                this.props.dispatchSetChannels(newChannelsList);
            })
    }

    setStateListOfUsersNewGroup(value) {
        this.setState({listOfUsersNewGroup: value})
    }
}







export default CommunicationRouting;
