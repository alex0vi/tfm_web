'use strict';

const SET_REPLACE_CHANNEL = 'SET_REPLACE_CHANNEL';

const setReplaceChannel = (replaceChannel) => {

  return {
    type: SET_REPLACE_CHANNEL,
    payload: {
        replaceChannel,
    },
  }
};


export {SET_REPLACE_CHANNEL , setReplaceChannel};
