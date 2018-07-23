'use strict';

const SET_IS_OPEN = 'SET_IS_OPEN';

const setIsOpen = (isOpen) => {

  return {
    type: SET_IS_OPEN,
    payload: {
        isOpen,
    },
  }
};


export {SET_IS_OPEN , setIsOpen};
