'use strict';

const SET_MESSAGES = 'SET_MESSAGES';

const setMessages = (messages, position) => {

  return {
    type: SET_MESSAGES,
    payload: {
        messages,
        position,
    },
  }
};


export {SET_MESSAGES , setMessages};
