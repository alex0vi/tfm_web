'use strict';

const SET_ITEMS = 'SET_ITEMS';

const setItems = (metas, items) => {

  return {
    type: SET_ITEMS,
    payload: {
      items
    },
    metas: {
      reducerType: metas.reducerType,
      tabType:        metas.tabType
    }
  }


};


export {SET_ITEMS , setItems};
