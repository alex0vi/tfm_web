'use strict';

const SET_ACTIVE_CHANNEL = 'SET_ACTIVE_CHANNEL';

const setActiveChannel = (type, item, label) => {

  return {
    type: SET_ACTIVE_CHANNEL,
    payload: {
        type,
        item,
        // messages,
        label,
    },
  }
};


export {SET_ACTIVE_CHANNEL , setActiveChannel};
