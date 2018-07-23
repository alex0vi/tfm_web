'use strict';

const SET_ACTIVE_WEBRTC = 'SET_ACTIVE_WEBRTC';

const setWebRTC = (callType, channel, hasVideo, hasVoice) => {

  return {
    type: SET_ACTIVE_WEBRTC,
    payload: {
        callType,
        channel,
        hasVideo,
        hasVoice
    },
  }
};


export {SET_ACTIVE_WEBRTC , setWebRTC};
