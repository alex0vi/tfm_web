'use strict';


import R from 'ramda';
import { normalize, Schema, arrayOf } from 'normalizr';
import u from 'updeep';
import { createSelector } from 'reselect'
import { updateStoreActions } from '../subscription/subscriptorsMethods.js'


import {RESIZE_CUBE_WIDTH} from '../actionsCreators/reactCube/resizeCubeWidth';
import {CUBE_WIDTH} from '../actionsCreators/reactCube/settings/settingsStyles';

const initialState = {
  cubesStyles: {},
  settings:{
      cubeWidth: {},
  }
};



const resizeCubeWidthHandler = (state, payload) => {
    updateStoreActions(RESIZE_CUBE_WIDTH);

  let { width, cubeId } = payload;
  let changeStyle = width <= 1165 ? 'minimizedStyle' : 'normalStyle';

  let cubesStyles = {
      [cubeId]: changeStyle
  };

  return { cubesStyles }

};

const cubeWidthHandler = (state, payload) => {
    updateStoreActions(CUBE_WIDTH);

  let { width, cubeId } = payload;

  let cubeWidth = {
      [cubeId]: width
  };

  return { settings: {cubeWidth} }

}


let mapToActionHandler = {
  [RESIZE_CUBE_WIDTH]:            resizeCubeWidthHandler,
  [CUBE_WIDTH]:                   cubeWidthHandler,
};



let actionsTypes = R.keys(mapToActionHandler);
const isAnActionType = type => type in mapToActionHandler;


export default function(state = initialState, action = {} ) {

  return isAnActionType(action.type) ?
      u( mapToActionHandler[action.type]( state, action.payload) || state, state)
    : state;

};
