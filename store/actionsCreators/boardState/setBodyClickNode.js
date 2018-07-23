'use strict';
const {SET_BODY_CLICK_EVENT} = require("../../../js/devel/constants/reduxConstants.js").REDUX_ACTIONS.BOARD_STATE;

/** BOARD ACTIONS **/

/** by default adds it to the last part of the cube **/
const actionSetBodyClickNode = (bodyClickNode) => {
    return {
        type: SET_BODY_CLICK_EVENT,
        payload: {
            bodyClickNode
        }
    }
};


export {
    SET_BODY_CLICK_EVENT,
    actionSetBodyClickNode
};

