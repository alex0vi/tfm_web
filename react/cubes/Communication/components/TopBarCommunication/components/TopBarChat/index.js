import React, {PureComponent}       from 'react';

import R                            from 'ramda';
import Radium                       from 'radium';
import {connect}                    from 'react-redux';
import {bindActionCreators}         from 'redux';
import PropTypes                    from 'prop-types';


import MoreMenu                     from '../MoreMenu';



import USER_SETTINGS                from '../../../../../../../js/devel/modules-system/module-user-settings';

import CUBE_TYPE_CONSTANTS          from '../../../../../../../js/devel/constants/cubeTypes/cubeTypesConstants';


import {setStatus}                  from '../../../../../../../store/actionsCreators/communication/setStatus';

import {setSimpleModal}             from '../../../../../../../store/actionsCreators/communication/setSimpleModal';
import {setWebRTC}                  from '../../../../../../../store/actionsCreators/webRTC/setWebRTC';

const api                           =   require('../../../../../../../js/devel/modules-system/api-calls').apiv2;



const mapStateToProps = (state, ownProps) => {
    let isVideoCubeActive = !R.isNil(state.webRTC.channel);

    return {
        status              :   state.communication.status,
        activeChannel       :   state.communication.activeChannel,
        isVideoCubeActive,
    }
}

const mapDispatchToProps = dispatch => {

    return bindActionCreators({
        dispatchSetStatus               : setStatus,
        dispatchSetWebRTC               : setWebRTC,

        dispatchSetSimpleModal          : setSimpleModal,
    }, dispatch)
};


@connect(mapStateToProps, mapDispatchToProps)
@Radium
class TopBarChat extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            moreMenuChatOptionsisVisible    : false,
        }

        this.moreMenu               = this.moreMenu.bind(this);
        this.onCloseMenu            = this.onCloseMenu.bind(this);
    }





    render() {
        let {activeChannel, status, isVideoCubeActive} = this.props;

        let auxStylesMoreVertOpen;
        if(this.state.moreMenuChatOptionsisVisible) auxStylesMoreVertOpen = {backgroundColor: '#E0E0E0', borderRadius: '50%'};

        let iconsClasses = isVideoCubeActive || activeChannel.type === 'GROUP' || !activeChannel.item.previouslyAccepted ?  `disabled ${'material-icons'} ${'TopBarButton'} ${'element-with-interaction'}` : `${'material-icons'} ${'TopBarButton'} ${'element-with-interaction'}`;
        let disableCalls = isVideoCubeActive || activeChannel.type === 'GROUP' || !activeChannel.item.previouslyAccepted;

        return(
            <div className   = { 'top-bar-chat'}>

                {/* channel name */}
                {
                    !R.isNil(activeChannel.item) ?
                        <div className={'title'}>{activeChannel.title}</div>
                    :
                        null
                }

                {/*render right side icons */}
                <div className={'icons'}>

                    {/* render call and videocall icons*/}
                        <i className   = { iconsClasses }   onClick = { () => !disableCalls ? this.onClickAudioCall() : {} }>call</i>
                        <i className   = { iconsClasses }   onClick = { () => !disableCalls ? this.onClickVideoCall() : {} }>videocam</i>


                    {/* render right menu (only when activechannel is not null)*/}
                    <i
                        style       = { [auxStylesMoreVertOpen] }
                        className   = { `${'material-icons'} ${'TopBarButton'} ${'element-with-interaction'}`}
                        onClick     = { ( ) => this.setState({moreMenuChatOptionsisVisible: !this.state.moreMenuChatOptionsisVisible}) }
                    >
                        more_vert
                    </i>

                    {/* menu right: chat */}
                    { this.moreMenu() }

                </div>
            </div>
        );
    }





    moreMenu(){
        let isLeftGroup = this.props.activeChannel.item.left;
        let type        = this.props.activeChannel.type;
        let isDeleteShow= (isLeftGroup && type === 'GROUP') || ( type === 'CONTACT');

        return(
            <MoreMenu
                isVisible               =   { this.state.moreMenuChatOptionsisVisible }
                onCloseMenu             =   { () => this.onCloseMenu() }
                cubeInstance            =   { this.props.cubeInstance }
                onChangeStateMoreMenu   =   { () => this.setState({moreMenuChatOptionsisVisible: !this.state.moreMenuChatOptionsisVisible} )}
            >
                <MoreMenu.Item
                    title           = {'Information'}
                    onClick         = { () => { this.props.openInformationSection(); this.setState({moreMenuChatOptionsisVisible: false}) } }
                />
                {
                    this.props.activeChannel.item.bloqued ?
                        <MoreMenu.Item
                            title           = {'Unblock user'}
                            onClick         = { () => {this.props.dispatchSetSimpleModal(true, 'Unblock user', 'Are you sure you want to unblock this user?', 'UNBLOCK_USER');  this.setState({moreMenuChatOptionsisVisible: false})  }     }
                            disableClick    = { type === 'GROUP' }
                        />
                    :
                        <MoreMenu.Item
                            title           = {'Block user'}
                            onClick         = { () => {this.props.dispatchSetSimpleModal(true, 'Block user', 'Are you sure you want to block this user?', 'BLOCK_USER');  this.setState({moreMenuChatOptionsisVisible: false})  }     }
                            disableClick    = { type === 'GROUP' }
                        />
                }
                <MoreMenu.Item
                    title           = {'Delete messages'}
                    onClick         = { () => {this.props.dispatchSetSimpleModal(true, 'Delete messages', 'Are you sure you want to clean the history?', 'DELETE_MESSAGES');  this.setState({moreMenuChatOptionsisVisible: false})    }}
                />
                <MoreMenu.Item
                    title           = {'Delete chat'}
                    onClick         = { () => {this.props.dispatchSetSimpleModal(true, 'Delete chat', 'Are you sure you want to delete the chat? All the messages will be lost.', 'DELETE_CHAT');  this.setState({moreMenuChatOptionsisVisible: false})  }  }
                    titleClasses    = { !isLeftGroup && type === 'GROUP' ? 'disabled' : '' }
                    disableClick    = { !isDeleteShow }
                />
                <MoreMenu.Item
                    title           = {'Mute'}
                    onClick         = { () => {}    }
                    titleClasses    = { 'disabled' }
                    disableClick    = { true }
                />
                {
                    type === 'GROUP' ?
                        <MoreMenu.Item
                            title           = {'Exit group'}
                            onClick         = { () => { this.props.dispatchSetSimpleModal(true, 'Exit Group', 'Are you sure you want to exit the group?', 'EXIT_GROUP'); this.setState({moreMenuChatOptionsisVisible: false}) }    }
                            disableClick    = { isLeftGroup }
                        />
                    :
                        null
                }
            </MoreMenu>
        )
    }




    onClickVideoCall(){
        this.props.dispatchSetStatus('VIDEOCALL');
        this.props.dispatchSetWebRTC('NEW_VIDEO_CALL', this.props.activeChannel.item, true, true);

        USER_SETTINGS.getAddaps().addCube({ type: CUBE_TYPE_CONSTANTS.CUBE_VIDEO });
    }

    onClickAudioCall(){
        this.props.dispatchSetStatus('AUDIOCALL');
        this.props.dispatchSetWebRTC('NEW_AUDIO_CALL',this.props.activeChannel.item, false, true);

        USER_SETTINGS.getAddaps().addCube({ type: CUBE_TYPE_CONSTANTS.CUBE_VIDEO });
    }

    onCloseMenu() {
        this.setState({moreMenuChatOptionsisVisible: false})
    }


}

TopBarChat.defaultProps = {
    openInformationSection:       () => {},
    cubeInstance:                 {}
};

TopBarChat.propTypes = {
    openInformationSection:       PropTypes.func,
    cubeInstance:                 PropTypes.object,

};

export default TopBarChat;
