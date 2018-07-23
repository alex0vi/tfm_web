'use strict';
const {ADD_CUBE} = require("../../../js/devel/constants/reduxConstants.js").REDUX_ACTIONS.BOARD_STATE;

/** BOARD ACTIONS **/

/** by default adds it to the last part of the cube **/
const actionAddCube = (cubeId, cubeIcon, boardId) => {
    return {
        type: ADD_CUBE,
        payload: {
            cubeId,
            cubeIcon,
            boardId,
        }
    }
};


export {
    ADD_CUBE,
    actionAddCube
};

