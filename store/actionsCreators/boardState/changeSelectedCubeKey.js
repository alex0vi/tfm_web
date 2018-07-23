'use strict';
const {CHANGE_SELECTED_CUBE_KEY} = require("../../../js/devel/constants/reduxConstants.js").REDUX_ACTIONS.BOARD_STATE;

/**
 * This action will give the order to store the boardId that is considered the current board.
 * @returns {{type: (*|string), payload: {cubeId: *, faviconUrl: *}}}
 */
const actionChangeSelectedCubeKey= cubeId => {
    return {
        type: CHANGE_SELECTED_CUBE_KEY,
        payload: {
            cubeId
        }
    }
};


export {
    CHANGE_SELECTED_CUBE_KEY,
    actionChangeSelectedCubeKey
};
