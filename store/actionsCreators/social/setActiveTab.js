'use strict';

const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB';

const setActiveTab = (activeTab) => {

  return {
    type: SET_ACTIVE_TAB,
    payload: {
      activeTab
    },
  }


};


export {SET_ACTIVE_TAB , setActiveTab};
