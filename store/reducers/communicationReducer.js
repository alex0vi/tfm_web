'use strict';


import R from 'ramda';
import u from 'updeep';
import { normalize, schema }    from 'normalizr';



import {SET_ACTIVE_CHANNEL}     from '../actionsCreators/communication/setActiveChannel';
import {SET_MESSAGES}           from '../actionsCreators/communication/setMessages';
import {SET_STATUS}             from '../actionsCreators/communication/setStatus';
import {SET_IS_OPEN}            from '../actionsCreators/communication/setIsOpen';
import {SET_CHANNELS}           from '../actionsCreators/communication/setChannels';
import {RESET_COMMUNICATION}    from '../actionsCreators/communication/resetCommunication';
import {SET_REPLACE_CHANNEL}    from '../actionsCreators/communication/setReplaceChannel';
import {SET_SIMPLE_MODAL}       from '../actionsCreators/communication/setSimpleModal';

import {orderChannelsByDate}    from '../../react/cubes/Communication/utils/';

const initialState = {
    replaceChannel: null,
    isOpen: false,
    status: 'INITIAL',
    activeChannel: {
        title:  null,
        type:   null,
        item:   {},
        messages: [],
    },
    channels: [],
    modal: {
        isVisible: false,
        title: '',
        description: '',
        actionType: ''
    }
};


const setIsOpenHandler = (state, payload) => {
    return {
        isOpen: payload.isOpen
    }
}

const setStatusHandler = (state, payload) => {
    return {
        status: payload.status
    }
}




const setChannelsHandler = (state, payload) => {

    let orderedChannels = orderChannelsByDate(payload.channels);
    // let channelsByIds = R.indexBy( R.path(['item', 'id']), orderedChannels )

    return {
        channels: orderedChannels
    }
}



const setActiveChannelHandler = (state, payload) => {
    let {type, item, label} = payload;
    let msg = [];

    if(!R.isNil(item) && !R.isNil(state.activeChannel.item) ) {
        if(R.equals(state.activeChannel.item.id, item.id)) msg = state.activeChannel.messages;
    }

    let title = R.equals(type, 'CONTACT') ? `${item.user.firstName} ${item.user.lastName}` : label;

    return {
        activeChannel: {
            title,
            type,
            item,
            messages    :   msg,

        },
    }
}




const resetCommunicationHandler = (state, payload) => {

    return {
        isOpen: false,
        status: 'INITIAL',
        activeChannel: {
            title:  null,
            type:   null,
            item:   {
                id:             null,
                avatar:         {},
                label:          null,
                lastMessage:    {},
                status:         '',
                user:           {},
            },
            messages: [],
        },
        channels: [],
    }
}


const setReplaceChannelHandler = (state, payload) => {
    let {replaceChannel} = payload;
    return {replaceChannel : replaceChannel};
}


const setMessagesHandler = (state, payload) => {
    let {messages, position} = payload;

    if(R.isNil(messages)) {
        return {
            activeChannel: {
                messages  :   [],
            }
        }
    }

    let newMessages;
    if(R.equals(position, 'UP')) newMessages = [...payload.messages, ...state.activeChannel.messages];
    else newMessages = [...state.activeChannel.messages, ...payload.messages];

    return {
        activeChannel: {
            messages  :   newMessages,
        }
    }
};

const setSimpleModalHandler = (state, payload) => {
    let {isVisible, title, description, actionType} = payload;

    return {
        modal: {
            isVisible,
            title,
            description,
            actionType
        }
    }
}


let mapToActionHandler = {
    [SET_STATUS]            :       setStatusHandler,
    [SET_ACTIVE_CHANNEL]    :       setActiveChannelHandler,
    [SET_MESSAGES]          :       setMessagesHandler,
    [SET_IS_OPEN]           :       setIsOpenHandler,
    [SET_CHANNELS]          :       setChannelsHandler,
    [RESET_COMMUNICATION]   :       resetCommunicationHandler,
    [SET_REPLACE_CHANNEL]   :       setReplaceChannelHandler,
    [SET_SIMPLE_MODAL]      :       setSimpleModalHandler,
};


let actionsTypes = R.keys(mapToActionHandler);
const isAnActionType = type => type in mapToActionHandler;


export default function(state = initialState, action = {} ) {

  return isAnActionType(action.type) ?
      u( mapToActionHandler[action.type]( state, action.payload) || state, state)
    : state;
};
