'use strict';
const {CHANGE_CURRENT_BOARD_KEY} = require("../../../js/devel/constants/reduxConstants.js").REDUX_ACTIONS.BOARD_STATE;

/**
 * This action will give the order to store the boardId that is considered the current board.
 * @returns {{type: (*|string), payload: {cubeId: *, faviconUrl: *}}}
 */
const actionChangeCurrentBoardKey= boardId => {
    return {
        type: CHANGE_CURRENT_BOARD_KEY,
        payload: {
            boardId
        }
    }
};


export {
    CHANGE_CURRENT_BOARD_KEY,
    actionChangeCurrentBoardKey
};
