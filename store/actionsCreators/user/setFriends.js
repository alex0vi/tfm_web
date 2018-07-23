'use strict';

const SET_FRIENDS = 'SET_FRIENDS';

const setFriends = friends => {

  return {
    type: SET_FRIENDS,
    payload: {
      friends
    },
  }
};


export {SET_FRIENDS , setFriends};
