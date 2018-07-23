'use strict';

import R                                from 'ramda';
import u                                from 'updeep';

// import {SET_FRIENDS}        from '../actionsCreators/user/setFriends';
import {SET_USER}           from '../actionsCreators/user/setUser';
import {SET_IMAGE}          from '../actionsCreators/user/setImage';
import {SET_ID}             from '../actionsCreators/user/setId';
import {SET_SEARCH_ENGINE}  from '../actionsCreators/user/setSearchEngine';
import {SET_CUBE_DESIGNER}  from '../actionsCreators/user/setCubeDesigner';
import {SET_AVATAR}         from '../actionsCreators/user/setAvatar';

import { updateStoreActions } from '../subscription/subscriptorsMethods.js'


// Initial user reducer state
const initialState = {};


/**
 * Handlers
 */
const setUserHandler = (state, payload) => {
    updateStoreActions(SET_USER);
    return R.merge( state, payload.myself )
};

const setIdHandler = (state, payload) => {
    updateStoreActions(SET_ID);
    return {
        id: payload.id
    }
};

const setCubeDesignerHandler = (state, payload) => {
    updateStoreActions(SET_CUBE_DESIGNER);
    return {
        desktopSystem: {
            cubeDesigner: payload.cubeDesigner
        }
    }
};

const setImageHandler = (state, payload) => {
    updateStoreActions(SET_IMAGE);
    return {
        [payload.type]: payload.url
    }
};

const setSearchEngineHandler = (state, payload) => {
    updateStoreActions(SET_SEARCH_ENGINE);
    return {
        searchEngine: payload.engine
    }
};

const setAvatarHandler = (state, payload) => {
    updateStoreActions(SET_SEARCH_ENGINE);
    return {
        avatar: payload.avatar
    }
};


let mapToActionHandler = {
    [SET_USER]            :   setUserHandler,
    [SET_IMAGE]           :   setImageHandler,
    [SET_ID]              :   setIdHandler,
    [SET_SEARCH_ENGINE]   :   setSearchEngineHandler,
    [SET_CUBE_DESIGNER]   :   setCubeDesignerHandler,
    [SET_AVATAR]          :   setAvatarHandler,
};


let actionsTypes = R.keys(mapToActionHandler);
const isAnActionType = type => type in mapToActionHandler;


export default function homeReducer(state = initialState, action = {}) {

  return isAnActionType(action.type) ?
        u( mapToActionHandler[action.type]( state, action.payload) || state , state )
    :   state;

};
