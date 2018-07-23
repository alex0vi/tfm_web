const CUBE_DESIGNER_CONSTANTS = require('../../js/devel/constants/cubeDesigner/cubeDesignerConstants');
const MINIMAP_CONSTANTS       = require('../../js/devel/constants/minimap/minimapConstants');

const SESSION_DATA      = "SESSION_DATA";
const SYSTEM_SETTINGS   = "SYSTEM_SETTINGS";
const BUFFERS           = "BUFFERS";
const DEFAULT           = "DEFAULT";


const REDUX_ACTIONS = {
    [SESSION_DATA]: {
        SET_TOKEN:              'SET_TOKEN',
        SET_SHOW_WELCOME:       'SET_SHOW_WELCOME',

        // todo: to discuss
        SET_PRIVILEGE:                      'SET_PRIVILEGE',
    },

    [SYSTEM_SETTINGS]: {
        SET_LANGUAGE:                       'SET_LANGUAGE',
        SET_MINIMAP_MODE:                   'SET_MINIMAP_MODE',
        SET_MINIMAP_VISIBILITY:             'SET_MINIMAP_VISIBILITY',
        SET_REMEMBER_ME:                    'SET_REMEMBER_ME',
    },

    [BUFFERS]: {
        // todo: to do when the filesystem is ready
        SET_IS_CUT:      'SET_IS_CUT',
        SET_COPY_BUFFER: 'SET_COPY_BUFFER',
        SET_DRAG_DROP_BUFFER: 'SET_DRAG_DROP_BUFFER',
        SET_CLEAR_COPY_BUFFER: 'SET_CLEAR_COPY_BUFFER',
        SET_CLEAR_DRAG_DROP_BUFFER: 'SET_CLEAR_DRAG_DROP_BUFFER',
    },

    DEFAULT,
};


const INITIAL_STATE = {
    [SESSION_DATA]: {
        token:            '',
        showWelcome:      true,
        privilege:        0,
    },

    [SYSTEM_SETTINGS]: {
        language:         '',
        minimapMode:          MINIMAP_CONSTANTS.MINIMAP_THUMB,
        minimapVisibility:    MINIMAP_CONSTANTS.MINIMAP_HOVER,
        rememberMe:       '',
    },

    [BUFFERS]: {
        isCut: false, // works to identify when we have to move and when we have to copy
        copyBuffer: [],
        dragDropBuffer: [],
    },

    lastAction:       '', // identifies the last action so we can subscribe functions to it
};

module.exports = {
    REDUX_ACTIONS,
    INITIAL_STATE,

    SESSION_DATA,
    SYSTEM_SETTINGS,
    BUFFERS,
    DEFAULT,
};
