'use strict';
const {REMOVE_BOARD} = require("../../../js/devel/constants/reduxConstants.js").REDUX_ACTIONS.BOARD_STATE;

const actionRemoveBoard = boardId => {
    return {
        type: REMOVE_BOARD,
        payload: {
            boardId,
        }
    }
};

export {
    REMOVE_BOARD,
    actionRemoveBoard
};

