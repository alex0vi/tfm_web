'use strict';


import R from 'ramda';
import u from 'updeep';
import { normalize, schema }    from 'normalizr';


import {SET_ACTIVE_WEBRTC}     from '../actionsCreators/webRTC/setWebRTC';
import {SET_ASPECT_RATIO}     from '../actionsCreators/webRTC/setAspectRatio';


const initialState = {
    callType:       null,
    channel:        null,
    hasVoice:       null,
    hasVideo:       null,
    aspectRatio:    false,
};


const setActiveWebRTChandler = (state, payload) => {
    return {
        callType:   payload.callType,
        channel:    payload.channel,
        hasVoice:   payload.hasVoice,
        hasVideo:   payload.hasVideo,
    }
}

const setAspectRatioHandler = (state, payload) => {
    return {
        aspectRatio:   payload.aspectRatio,
    }
}

let mapToActionHandler = {
    [SET_ACTIVE_WEBRTC]     :       setActiveWebRTChandler,
    [SET_ASPECT_RATIO]      :       setAspectRatioHandler,
};




let actionsTypes = R.keys(mapToActionHandler);
const isAnActionType = type => type in mapToActionHandler;


export default function(state = initialState, action = {} ) {

  return isAnActionType(action.type) ?
      u( mapToActionHandler[action.type]( state, action.payload) || state, state)
    : state;
};
