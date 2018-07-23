'use strict';

const SET_ASPECT_RATIO = 'SET_ASPECT_RATIO';

const setAspectRatio = (aspectRatio) => {

  return {
    type: SET_ASPECT_RATIO,
    payload: {
        aspectRatio
    },
  }
};


export {SET_ASPECT_RATIO , setAspectRatio};
