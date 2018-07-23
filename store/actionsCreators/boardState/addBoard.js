'use strict';
const {ADD_BOARD} = require("../../../js/devel/constants/reduxConstants.js").REDUX_ACTIONS.BOARD_STATE;

/** BOARD ACTIONS **/
const actionAddBoard = boardId => {
    return {
        type: ADD_BOARD,
        payload: {
            boardId,
        }
    }
};

export {
    ADD_BOARD,
    actionAddBoard
};
