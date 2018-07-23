'use strict';

const CUBE_WIDTH = 'CUBE_WIDTH';

const cubeWidth = (width, cubeId) => {

  return {
    type: CUBE_WIDTH,
    payload: {
      width,
      cubeId,
    },
  }

};


export {CUBE_WIDTH , cubeWidth};
