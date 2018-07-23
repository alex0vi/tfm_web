const R                     = require('ramda');
const USER_FUNCT            = require('../../../../app/js/devel/modules-system/module-user-settings/lib/other/helperFunctions.js');
const { REDUX_ACTIONS }     = require('../../../../app/js/devel/constants/reduxConstants.js');
const { SESSION_DATA}       = REDUX_ACTIONS;
const { SYSTEM_SETTINGS}    = REDUX_ACTIONS;
const { BUFFERS}            = REDUX_ACTIONS;



const actionSetShowWelcome = showWelcome => {
    return {
        type: SESSION_DATA.SET_SHOW_WELCOME,
        payload: {
            showWelcome
        }
    };
};

const actionSetToken = token => {
    return {
        type: SESSION_DATA.SET_TOKEN,
        payload: {
            token
        }
    };
};


const actionSetLanguage = language => {
    return {
        type: SYSTEM_SETTINGS.SET_LANGUAGE,
        payload: {
            language
        }
    };
};



const actionSetMinimapMode = minimapMode => {
    return {
        type: SYSTEM_SETTINGS.SET_MINIMAP_MODE,
        payload: {
            minimapMode
        }
    };
};


const actionSetMinimapVisibility = minimapVisibility => {
    return {
        type: SYSTEM_SETTINGS.SET_MINIMAP_VISIBILITY,
        payload: {
            minimapVisibility
        }
    };
};


const actionSetRememberMe = rememberMe => {
    return {
        type: SYSTEM_SETTINGS.SET_REMEMBER_ME,
        payload: {
            rememberMe
        }
    };
};



const actionSetPrivilege = privilege => {
    return {
        type: SESSION_DATA.SET_PRIVILEGE,
        payload: {
            privilege
        }
    };
};




/** We have to check if we are using this actions */
const actionSetCopyBuffer = copyBuffer => {
    return {
        type: BUFFERS.SET_COPY_BUFFER,
        payload: {
            copyBuffer
        }
    };
};



const actionSetDragDropBuffer = dragDropBuffer => {
    return {
        type: BUFFERS.SET_DRAG_DROP_BUFFER,
        payload: {
            dragDropBuffer
        }
    };
};

const actionSetIsCut = isCut => {
    return {
        type: BUFFERS.SET_IS_CUT,
        payload: {
            isCut
        }
    };
};


const actionClearCopyBuffer = copyBuffer => {
    return {
        type: BUFFERS.SET_COPY_BUFFER,
        payload: {
            copyBuffer
        }
    };
};


const actionClearDragDropBuffer = dragDropBuffer => {
    return {
        type: BUFFERS.SET_DRAG_DROP_BUFFER,
        payload: {
            dragDropBuffer
        }
    };
};



module.exports = {
    actionSetShowWelcome,
    actionSetToken,
    actionSetMinimapMode,
    actionSetMinimapVisibility,
    actionSetRememberMe,
    actionSetPrivilege,
    actionSetLanguage,
    actionSetCopyBuffer,
    actionSetIsCut,
    actionSetDragDropBuffer,
    actionClearCopyBuffer,
    actionClearDragDropBuffer,
};
