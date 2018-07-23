'use strict';

const SET_CUBE_DESIGNER = 'SET_CUBE_DESIGNER';

const setCubeDesigner = cubeDesigner => {

    return {
        type: SET_CUBE_DESIGNER,
        payload: {
            cubeDesigner
        },
    }

};


export {SET_CUBE_DESIGNER , setCubeDesigner};
