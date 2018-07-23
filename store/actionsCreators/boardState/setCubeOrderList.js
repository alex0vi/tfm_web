'use strict';
const {SET_CUBE_ORDER_LIST} = require("../../../js/devel/constants/reduxConstants.js").REDUX_ACTIONS.BOARD_STATE;

// todo: check if this should work like this
const actionSetCubeOrderList = (boardId, cubeList) => {
    return {
        type: SET_CUBE_ORDER_LIST,
        payload: {
            boardId,
            cubeList,
        }
    }
};


export {
    SET_CUBE_ORDER_LIST,
    actionSetCubeOrderList
};

