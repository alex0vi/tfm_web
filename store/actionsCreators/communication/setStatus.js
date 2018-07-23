'use strict';

const SET_STATUS = 'SET_STATUS';

const setStatus = (status) => {

  return {
    type: SET_STATUS,
    payload: {
        status,
    },
  }
};


export {SET_STATUS , setStatus};
