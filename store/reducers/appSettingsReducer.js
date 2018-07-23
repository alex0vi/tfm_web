'use strict';
// todo: deprecated?

import R from 'ramda';
import {normalize, Schema, arrayOf} from 'normalizr';
import u from 'updeep';
import {createSelector} from 'reselect'
import {updateStoreActions} from '../subscription/subscriptorsMethods.js'

// const CUBE_DESIGNER_CONSTANTS = require('../../js/devel/constants/cubeDesigner/cubeDesignerConstants');
// const MINIMAP_CONSTANTS = require('../../js/devel/constants/minimap/minimapConstants');
const {INITIAL_STATE} = require('../../js/devel/constants/reduxConstants.js');

import {RESIZE_CUBE_WIDTH}     from '../actionsCreators/reactCube/resizeCubeWidth.js';
import {CUBE_WIDTH}            from '../actionsCreators/reactCube/settings/settingsStyles.js';

const resizeCubeWidthHandler = (state, payload) => {
    updateStoreActions(RESIZE_CUBE_WIDTH);
    let {width, cubeId} = payload;
    let changeStyle = width <= 1165 ? 'minimizedStyle' : 'normalStyle';

    let cubesStyles = {
        [cubeId]: changeStyle
    };

    return {cubesStyles}

};

const cubeWidthHandler = (state, payload) => {
    updateStoreActions(CUBE_WIDTH);
    let {width, cubeId} = payload;

    let cubeWidth = {
        [cubeId]: width
    };

    return {settings: {cubeWidth}}

};


let mapToActionHandler = {
    [RESIZE_CUBE_WIDTH]: resizeCubeWidthHandler,
    [CUBE_WIDTH]: cubeWidthHandler,
};


let actionsTypes = R.keys(mapToActionHandler);
const isAnActionType = type => type in mapToActionHandler;


export default function (state = INITIAL_STATE, action = {}) {

    return isAnActionType(action.type) ?
        u(mapToActionHandler[action.type](state, action.payload) || state, state)
        : state;

};
