'use strict';


import R from 'ramda';
import { normalize, Schema, arrayOf } from 'normalizr';
import { updateStoreActions } from '../subscription/subscriptorsMethods.js'

import u from 'updeep';


import {SET_ACTIVE_TAB}         from '../actionsCreators/social/setActiveTab';
import {SET_PUBLIC_BOARDS}      from '../actionsCreators/social/setPublicBoards';
import {SET_DISCOVER_FILTER}    from '../actionsCreators/social/setDiscoverFilter';


const initialState = {
    activeTab:      'discover',
    filter:         ['BOARD'],
    publicBoards:   [],
};


const setActiveTabHandler = (state, payload) => {
    updateStoreActions(SET_ACTIVE_TAB);
    return {
        activeTab: payload.activeTab,
    }
};

const setPublicBoardsHandler = (state, payload) => {
    updateStoreActions(SET_PUBLIC_BOARDS);
    return {
        publicBoards: payload.boards
    }
};

const setDiscoverFilterHandler = (state, payload) => {
  return {
    filter: payload.filter,
  }
}

let mapToActionHandler = {
    [SET_ACTIVE_TAB]:            setActiveTabHandler,
    [SET_PUBLIC_BOARDS]:         setPublicBoardsHandler,
    [SET_DISCOVER_FILTER]:       setDiscoverFilterHandler,
};


let actionsTypes = R.keys(mapToActionHandler);
const isAnActionType = type => type in mapToActionHandler;


export default function(state = initialState, action = {} ) {

  return isAnActionType(action.type) ?
      u( mapToActionHandler[action.type]( state, action.payload) || state, state)
    : state;



};
