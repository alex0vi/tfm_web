'use strict';

const SET_PUBLIC_BOARDS = 'SET_PUBLIC_BOARDS';

const setPublicBoards = (boards) => {

  return {
    type: SET_PUBLIC_BOARDS,
    payload: {
      boards
    },
  }


};


export {SET_PUBLIC_BOARDS , setPublicBoards};
