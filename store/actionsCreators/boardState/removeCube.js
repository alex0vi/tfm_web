'use strict';
const {REMOVE_CUBE} = require("../../../js/devel/constants/reduxConstants.js").REDUX_ACTIONS.BOARD_STATE;

// todo: maybe we better not use boardId and search the cube in all the boards instead.
const actionRemoveCube = (cubeId, boardId) => {
    return {
        type: REMOVE_CUBE,
        payload: {
            boardId,
            cubeId,
        }
    }
};


export {
    REMOVE_CUBE,
    actionRemoveCube
};

