'use strict';

let ReactDOM = require('react-dom');

import React, {PureComponent}       from 'react';
import R                            from 'ramda';
import Radium                       from 'radium';
import {connect}                    from 'react-redux';


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



import {
    getUsersContainerSortedByLetter,
    openNewChannel,
    onSwitchChannel,
    openChannelFromNotification,
    openNewGroupChannel
}                                   from '../../utils/';


const api                           =   require('../../../../../../app/js/devel/modules-system/api-calls').apiv2;

const FirstChild = (props) => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
}

const styles = {
    container:{
        position: 'absolute',
        backgroundColor: 'rgb(255, 255, 255)',
        borderRight: '1px solid rgb(224, 224, 224)',
        left: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
    },
    wrapperAvatar:{
        width: '100%',
        justifyContent: 'center',
        display: 'flex',
        margin: '15px 0px',
    }, avatar:{
        borderRadius: 50,
        width: 100,
        height: 100,
        backgroundSize: 100,
    },
    wrapperInput:{
         width: '100%',
         padding: '0px 10px',
         height: 50,
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'space-between',
    },
    input:{
        borderLeft:'none',
        borderTop:'none',
        borderRight:'none',
        width: 250,
        padding: '0px 10px',
    },
    wrapperButton:{
        height: 70,
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
    },
    button:{
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        display: 'flex',
        width: 30,
        height: 30,
        alignItems: 'center',
        borderRadius: 15,
        fontSize: "12px",
        color: 'white',
        cursor: 'pointer',
    },
}

const mapStateToProps = (state, ownProps) => {

    return {
        // channels       :    state.communication.channels,
        myId           :    state.user.id,
    }
}

// const mapDispatchToProps = dispatch => {
//
//     return bindActionCreators({
//         dispatchSetChannels: setChannels,
//     }, dispatch)
// };


@connect(mapStateToProps, null)
@Radium
class SideBarNewGroupSettings extends PureComponent {
    constructor(props){
        super(props)

        this.state = {
            nameNewGroup    :  '',
            avatarHover     :  false,
        }

        this.changeNameNewGroup                     = this.changeNameNewGroup.bind(this);
        this.handlerSetState                        = this.handlerSetState.bind(this);
        this.createGroup                            = this.createGroup.bind(this);

    }


    componentWillMount() {
        if(!R.isNil(this.props.redirect)) {
            let channelId = R.last(R.split('/', this.props.redirect));
            openChannelFromNotification(channelId)
        }
    }


    render(){

        return(

            <div className="left-side-communication-cube" style={styles.container}>
                <div style= {{position: 'relative', overflow:'hidden', height:'100%', width: '100%'}}>
                    <Slide
                        in          = {true}
                        duration    = {1000}
                        classNames  = 'slideInFromLeft'
                        key         = 'new-quickLink-transition'
                    >
                        <div style={{position:'relative', width:'100%', height:'100%', display:'flex', flexDirection:'column'}}>
                            {/* Avatar */}
                            <div style= {styles.wrapperAvatar} >
                                <div
                                    style= {[styles.avatar, {backgroundImage: `url(${'https://develop.addaps.com/static/default_images/channel_group_avatar_100x100.jpg'})`}]}
                                    onMouseEnter = {()=>{}/*() => this.handlerSetState('avatarHover', true)*/}
                                    onMouseLeave = {()=>{}/*() => this.handlerSetState('avatarHover', false)*/}
                                >
                                    {
                                        this.state.avatarHover ?
                                            <div
                                                style={{ cursor: 'pointer', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex', backgroundColor: 'rgba(0,0,0,0.6)', color: 'white',borderRadius: '50%'}}
                                                onClick ={() => this.changeGroupAvatar()}
                                            >
                                                <span>{'Edit'}</span>
                                            </div>
                                        : null
                                    }
                                </div>
                            </div>

                            {/* Input */}
                            <div style = {styles.wrapperInput}>
                                <input
                                    type            = 'text'
                                    value           = {this.state.nameNewGroup}
                                    onChange        = {(event) => this.changeNameNewGroup(event.target.value)}
                                    style           = {styles.input}
                                    placeholder     = {'New group name ...'}
                                />
                            </div>

                            {/* Button done */}
                            <div style = {styles.wrapperButton}>
                                <div
                                    style = {[styles.button,{display: R.isEmpty(this.state.nameNewGroup) ? 'none' : 'flex'}]}
                                    onClick = {() => this.createGroup(this.state.nameNewGroup)}
                                >
                                    <i className="material-icons">done</i>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        )
    }


    changeNameNewGroup(value){
        this.setState({nameNewGroup: value})
    }

    handlerSetState(state, value){
        this.setState({[state]: value})
    }

    changeGroupAvatar(){
        console.log('changeAvatar')
    }


    createGroup(name){
        let listIdUsers = R.map(R.prop('id') ,this.props.listOfUsersNewGroup);
        let listIdUsersAndMe = R.prepend(this.props.myId, listIdUsers);
        let newGroup = {
            'type': 'GROUP',
            'item': {
                'label': name,
                'avatar': null,
                'users': listIdUsersAndMe,
            }
        }
        openNewGroupChannel(newGroup, this.props.currentRoomId, this.props.history)

        this.props.setStateListOfUsersNewGroup([])
        if(!this.props.isConversationOpen) this.props.history.push({pathname:`/`});
        else this.props.history.push({pathname:`/chat/${this.props.currentRoomId}/channels`});

    }

}

SideBarNewGroupSettings.defaultProps = {
    setStateListOfUsersNewGroup : ()=> console.log('setStateListOfUsersNewGroup not exist'),
    listOfUsersNewGroup         : [],
    history                     : {},
};

SideBarNewGroupSettings.propTypes = {
    setStateListOfUsersNewGroup : PropTypes.func,
    listOfUsersNewGroup         : PropTypes.array,
    history                     : PropTypes.object,
};

export default SideBarNewGroupSettings;
