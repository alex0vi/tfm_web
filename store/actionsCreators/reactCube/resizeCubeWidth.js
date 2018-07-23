'use strict';

const RESIZE_CUBE_WIDTH = 'RESIZE_CUBE_WIDTH';

const resizeCubeWidth = (width, cubeId) => {

    return {
        type: RESIZE_CUBE_WIDTH,
        payload: {
            width,
            cubeId,
        },
    }

};


export {RESIZE_CUBE_WIDTH, resizeCubeWidth};
