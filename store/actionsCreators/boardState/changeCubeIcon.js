'use strict';
const {CHANGE_CUBE_ICON} = require("../../../js/devel/constants/reduxConstants.js").REDUX_ACTIONS.BOARD_STATE;

/**
 * the webviews will have favicons - think about a default one, btw, - but other elements might
 * have special favicons. I will store the different elements inside the "cubeIcon" object, and it might
 * differ depending of the cube's type
 * @param cubeId
 * @param cubeIcon
 * @returns {{type: (*|string), payload: {cubeId: *, faviconUrl: *}}}
 */
const actionChangeCubeIcon = (cubeId, cubeIcon) => {
    return {
        type: CHANGE_CUBE_ICON,
        payload: {
            cubeId,
            cubeIcon
        }
    }
};


export {
    CHANGE_CUBE_ICON,
    actionChangeCubeIcon
};


