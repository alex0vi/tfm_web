'use strict';

const SELECT_ITEM = 'SELECT_ITEM';

const selectItem = (metas, itemId) => {

  return {
    type: SELECT_ITEM,
    payload: {
      itemId
    },
    metas: {
      reducerType: metas.reducerType,
      tabType:        metas.tabType
    }
  }


};


export {SELECT_ITEM , selectItem};
