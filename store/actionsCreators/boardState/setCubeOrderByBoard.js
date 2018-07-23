'use strict';
const {SET_CUBE_ORDER_BY_BOARD} = require("../../../js/devel/constants/reduxConstants.js").REDUX_ACTIONS.BOARD_STATE;

// todo: check if this should work like this
const actionSetCubeOrderByBoard = (cubeOrderByBoard) => {
    return {
        type: SET_CUBE_ORDER_BY_BOARD,
        payload: {
            cubeOrderByBoard
        }
    }
};


export {
    SET_CUBE_ORDER_BY_BOARD,
    actionSetCubeOrderByBoard
};

