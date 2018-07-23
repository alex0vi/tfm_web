'use strict';

const SET_CHANNELS = 'SET_CHANNELS';

const setChannels = (channels) => {

  return {
    type: SET_CHANNELS,
    payload: {
        channels
    },
  }
};


export {SET_CHANNELS , setChannels};
