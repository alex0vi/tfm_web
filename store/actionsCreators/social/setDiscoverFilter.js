'use strict';

const SET_DISCOVER_FILTER = 'SET_DISCOVER_FILTER';

const setDiscoverFilter = (filter) => {

  return {
    type: SET_DISCOVER_FILTER,
    payload: {
      filter
    },
  }
};


export {SET_DISCOVER_FILTER , setDiscoverFilter};
