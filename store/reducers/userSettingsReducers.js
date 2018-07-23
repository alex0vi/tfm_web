const R             = require('ramda');
const redux         = require('redux');

const {
    REDUX_ACTIONS,
    INITIAL_STATE,
    SESSION_DATA,
    SYSTEM_SETTINGS,
    BUFFERS,
    DEFAULT,
} = require('../../js/devel/constants/reduxConstants.js');

import { updateStoreActions } from '../subscription/subscriptorsMethods.js'


/**
 * changes anstate with only one key
 * @param state
 * @param action
 * @param stateSection
 * @param key
 * @param value
 */
const changeState = (state, action, stateSection, key, value) => {
    let newState = R.clone(state); // maybe better to use a specific library
    newState[stateSection][key]  = value;
    newState.lastAction          = action.type;
    updateStoreActions(action.type);
    return newState
};

/**
 * simplifies the reducers when you have only to update a key inside a state section
 * to see the state sections, check constants INITIAL_STATE
 * @param stateSection: the section in where the key we want to modify is
 * @param key: key we will modify inside the state
 * @returns: function with (state, action) as a signature. When executed, the function updates the key, and, as a
 * sidefect, updates the last action
 */
const updateStateSingleKey = (stateSection, key) => (state, action) => {
    return changeState(state, action, stateSection, key, action.payload[key]);
};


/**
 * special case created for cube designer, but is general enough to be used in any other element with
 * similar characteristics. We get 2 keys, because we assume the element we want to change is inside
 * an object inside the statteSection inside the state
 *
 * todo: maybe will be interesting to do a more generalistic, tree-like version of this.
 *
 * @param stateSection
 * @param key1
 * @param key2
 */
const updateStateWithTwoKeys = (stateSection, key1, key2) => (state, action) => {
    let newState = R.clone(state);
    newState[stateSection][key1][key2]  = action.payload[key2];
    newState.lastAction          = action.type;
    updateStoreActions(action.type);
    return newState
};


/**
 * special case, the reducers when you have only to update a key inside a state section and you want to clear it with an empty array []
 * to see the state sections, check constants INITIAL_STATE
 * @param stateSection: the section in where the key we want to modify is
 * @param key: key we will modify inside the state
 * @returns: function with (state, action) as a signatura. When executed, the function updates the key, and, as a
 * sidefect, updates the last action
 */
const clearArrayStateSingleKey = (stateSection, key) => (state, action) => changeState(state, action, stateSection, key, []);/**

 * special case, the reducers when you have only to update a key inside a state section and you want to clear it with a null
 * to see the state sections, check constants INITIAL_STATE
 * @param stateSection: the section in where the key we want to modify is
 * @param key: key we will modify inside the state
 * @returns: function with (state, action) as a signatura. When executed, the function updates the key, and, as a
 * sidefect, updates the last action
 */
const clearValueStateSingleKey = (stateSection, key) => (state, action) => changeState(state, action, stateSection, key, null);



// SESSION DATA REDUCERS
const reducerSetToken            = updateStateSingleKey(SESSION_DATA, "token");
const reducerShowWelcome         = updateStateSingleKey(SESSION_DATA, "showWelcome");
const reducerSetFirstName        = updateStateSingleKey(SESSION_DATA, "firstName");
const reducerSetLastName         = updateStateSingleKey(SESSION_DATA, "lastName");
const reducerSetEmail            = updateStateSingleKey(SESSION_DATA, "email");
const reducerSetAvatar           = updateStateSingleKey(SESSION_DATA, "avatar");
const reducerSetId               = updateStateSingleKey(SESSION_DATA, "id");
const reducerSetTelephone        = updateStateSingleKey(SESSION_DATA, "tel");
const reducerSetDefaultBoardBg   = updateStateSingleKey(SESSION_DATA, "defaultBoardBg");

const reducerSetPrivilege        = updateStateSingleKey(SYSTEM_SETTINGS, "privilege");
const reducerSetRememberMe       = (state, action)  => {
    return updateStateSingleKey(SYSTEM_SETTINGS, "rememberMe")(state, action);
};

// SYSTEM SETTINGS REDUCERS
const reducerSetLanguage         = updateStateSingleKey(SYSTEM_SETTINGS, "language");
const reducerSetSearchEngine     = updateStateSingleKey(SYSTEM_SETTINGS, "searchEngine");
const reducerSetMinimapMode      = updateStateSingleKey(SYSTEM_SETTINGS, "minimapMode");
const reducerSetMinimapVisibility= updateStateSingleKey(SYSTEM_SETTINGS, "minimapVisibility");
const reducerSetContacts         = updateStateSingleKey(SYSTEM_SETTINGS, "contacts");
const reducerSetSocialCoverImage = updateStateSingleKey(SYSTEM_SETTINGS, "socialCoverImage");
const reducerSetCubeDesigner     = updateStateSingleKey(SYSTEM_SETTINGS, "cubeDesigner");

const reducerSetCubeDesignerOpenDirection = updateStateWithTwoKeys(SYSTEM_SETTINGS, "cubeDesigner", "openDirection");
const reducerSetCubeDesignerSize = (state, action) => {
    // special case, we have to modify 2 elements
    let currentState = updateStateWithTwoKeys(SYSTEM_SETTINGS, "cubeDesigner", "width")(state, action);
    currentState     = updateStateWithTwoKeys(SYSTEM_SETTINGS, "cubeDesigner", "height")(currentState, action);
    return currentState;
};

// BUFFER REDUCERS
const reducerSetIsCut                     = updateStateSingleKey(BUFFERS, "isCut");
const reducerSetCopyBuffer                = updateStateSingleKey(BUFFERS, "copyBuffer");
const reducerSetDragDropBuffer            = updateStateSingleKey(BUFFERS, "dragDropBuffer");

const reducerClearCopyBuffer              = clearArrayStateSingleKey(BUFFERS, "copyBuffer");
const reducerClearDragDropBuffer          = clearArrayStateSingleKey(BUFFERS, "dragDropBuffer");

const {
    SET_TOKEN,
    SET_SHOW_WELCOME,
    SET_FIRST_NAME,
    SET_LAST_NAME,
    SET_EMAIL,
    SET_AVATAR,
    SET_ID,
    SET_TELEPHONE,
    SET_DEFAULT_BOARD_BG,
    SET_PRIVILEGE,
} = REDUX_ACTIONS[SESSION_DATA];

const {
    SET_REMEMBER_ME,
    SET_LANGUAGE,
    SET_SEARCH_ENGINE,
    SET_MINIMAP_MODE,
    SET_MINIMAP_VISIBILITY,
    SET_SOCIAL_COVER_IMAGE,
    SET_CONTACTS,
    SET_CUBE_DESIGNER,
    SET_CUBE_DESIGNER_SIZE,
    SET_CUBE_DESIGNER_OPEN_DIRECTION,
} = REDUX_ACTIONS[SYSTEM_SETTINGS];


const {
    SET_IS_CUT,
    SET_COPY_BUFFER,
    SET_DRAG_DROP_BUFFER,

    SET_CLEAR_COPY_BUFFER,
} = REDUX_ACTIONS[BUFFERS];

// here we control the user specific data that usually wont change in a session
const reducersSessionData = {
    [SET_TOKEN]:              reducerSetToken,
    [SET_SHOW_WELCOME]:       reducerShowWelcome,
    [SET_FIRST_NAME]:         reducerSetFirstName,
    [SET_LAST_NAME]:          reducerSetLastName,
    [SET_EMAIL]:              reducerSetEmail,
    [SET_AVATAR]:             reducerSetAvatar,
    [SET_ID]:                 reducerSetId,
    [SET_TELEPHONE]:          reducerSetTelephone,
    [SET_DEFAULT_BOARD_BG]:   reducerSetDefaultBoardBg,

    [SET_PRIVILEGE]:          reducerSetPrivilege,  // todo: to discuss

    [SET_REMEMBER_ME]:        reducerSetRememberMe,  // todo: to discuss
    [SET_LANGUAGE]:           reducerSetLanguage,
    [SET_SEARCH_ENGINE]:      reducerSetSearchEngine,
    [SET_MINIMAP_MODE]:       reducerSetMinimapMode,
    [SET_MINIMAP_VISIBILITY]: reducerSetMinimapVisibility,
    [SET_SOCIAL_COVER_IMAGE]: reducerSetSocialCoverImage,
    [SET_CONTACTS]:           reducerSetContacts,


    [SET_CUBE_DESIGNER]:                  reducerSetCubeDesigner,
    [SET_CUBE_DESIGNER_SIZE]:             reducerSetCubeDesignerSize,
    [SET_CUBE_DESIGNER_OPEN_DIRECTION]:   reducerSetCubeDesignerOpenDirection,


    // todo: to do when the filesystem is ready
    [SET_IS_CUT]:             reducerSetIsCut,
    [SET_COPY_BUFFER]:        reducerSetCopyBuffer,
    [SET_DRAG_DROP_BUFFER]:   reducerSetDragDropBuffer,

    [SET_CLEAR_COPY_BUFFER]:  reducerClearCopyBuffer,
    [SET_DRAG_DROP_BUFFER]:   reducerClearDragDropBuffer,

    [DEFAULT]:  (state, action) => state,
};


const appSettings = (state = INITIAL_STATE, action) => {
    let myFeedSystem = reducersSessionData[action.type] || reducersSessionData[DEFAULT];
    return myFeedSystem(state, action);
};

module.exports = {
    appSettings,
};
