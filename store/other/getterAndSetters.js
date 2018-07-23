const R                             = require('ramda');
const redux                         = require('redux');

const reduxSubscriptions            = require('../subscription/subscriptorsMethods');
const ACTIONS                       = require('../actionsCreators/appSettings/actions.js');
const {actionChangeCurrentBoardKey} = require('../actionsCreators/boardState/changeCurrentBoardKey.js');
const {actionChangeSelectedCubeKey} = require('../actionsCreators/boardState/changeSelectedCubeKey.js');
const {actionAddBoard}              = require('../actionsCreators/boardState/addBoard.js');
const {actionAddCube}               = require('../actionsCreators/boardState/addCube.js');
const {actionChangeCubeIcon}        = require('../actionsCreators/boardState/changeCubeIcon.js');
const {actionRemoveBoard}           = require('../actionsCreators/boardState/removeBoard.js');
const {actionRemoveCube}            = require('../actionsCreators/boardState/removeCube.js');
const {actionSetCubeOrderList}      = require('../actionsCreators/boardState/setCubeOrderList.js');
const {actionSetBodyClickNode}      = require('../actionsCreators/boardState/setBodyClickNode.js');
const store                         = require('../index.js');

const SEARCH_ENG_ACT /*{ setSearchEngine, SET_SEARCH_ENGINE }*/ = require('../actionsCreators/user/setSearchEngine.js');
const AVATAR_ACT = require('../actionsCreators/user/setImage.js');

const {
    REDUX_ACTIONS,
    SESSION_DATA,
    SYSTEM_SETTINGS,
    BUFFERS,
} = require('../../js/devel/constants/reduxConstants.js');

const {
    cleanSubscriptions,
    subscribeToRedux
} = reduxSubscriptions;

const getStore =       () => store.default;
const getStoreReal =   () => store;

const clearRedux = () => {
    let el = null;

    setToken(el);
    setLanguage(el);
    setMinimapMode(el);
    setMinimapVisibility(el);
    setIsCut(el);
    setCopyBuffer(el);
    setDragDropBuffer(el);
    setClearCopyBuffer(el);
    setClearDragDropBuffer(el);
};

const getState                      = () => getStore().getState();
const getStateUser                  = () => getState().user;
const getStateAppSettings           = () => getState().appSettings;
const getStateAppSettingsSystem     = () => getStateAppSettings()[SYSTEM_SETTINGS];
const getStateBoardState            = () => getState().boardReducer;
const getAll                        = getState;



// SETTERS
// session settings
const setToken                      = el => getStore().dispatch(ACTIONS.actionSetToken(el));
const setShowWelcome                = el => getStore().dispatch(ACTIONS.actionSetShowWelcome(el));
const setRememberMe                 = el => getStore().dispatch(ACTIONS.actionSetRememberMe(el));
const setAvatar                     = el => getStore().dispatch(AVATAR_ACT.setAvatar(el));

// system settings
const setLanguage                   = el => getStore().dispatch(ACTIONS.actionSetLanguage(el)); // is stored in other place
const setMinimapMode                = el => getStore().dispatch(ACTIONS.actionSetMinimapMode(el));
const setMinimapVisibility          = el => getStore().dispatch(ACTIONS.actionSetMinimapVisibility(el));

// buffers
const setIsCut                      = el => getStore().dispatch(ACTIONS.actionSetIsCut(el));
const setCopyBuffer                 = el => getStore().dispatch(ACTIONS.actionSetCopyBuffer(el));
const setDragDropBuffer             = el => getStore().dispatch(ACTIONS.actionSetDragDropBuffer(el));
const setClearCopyBuffer            = el => getStore().dispatch(ACTIONS.actionClearCopyBuffer(el));
const setClearDragDropBuffer        = el => getStore().dispatch(ACTIONS.actionClearDragDropBuffer(el));
const setSearchEngine               = el => getStore().dispatch(SEARCH_ENG_ACT.setSearchEngine(el));

const setChangeCurrentBoardKey      = el => getStore().dispatch(actionChangeCurrentBoardKey(el));
const setChangeSelectedCubeKey      = el => getStore().dispatch(actionChangeSelectedCubeKey(el));
const setAddBoard                   = el => getStore().dispatch(actionAddBoard(el));
const setBodyClickNode              = el => getStore().dispatch(actionSetBodyClickNode(el));
const getBodyClickNode              = () => getStateBoardState().bodyClickNode;

const setRemoveBoard                = el => getStore().dispatch(actionRemoveBoard(el));
const setAddCube                    = (cubeId, cubeIcon, boardId) => getStore().dispatch(actionAddCube(cubeId, cubeIcon, boardId));
const setRemoveCube                 = (cubeId, boardId) => getStore().dispatch(actionRemoveCube(cubeId, boardId));
const setCubeOrderList              = (boardId, cubeList)  => getStore().dispatch(actionSetCubeOrderList(boardId, cubeList));




/** GETTERS FOR USER **/
const getFirstName                  = () => getStateUser().firstName;
const getLastName                   = () => getStateUser().lastName;
const getEmail                      = () => getStateUser().email;
const getAvatar                     = () => getStateUser().avatar;
const getId                         = () => getStateUser().id;
const getTelephone                  = () => getStateUser().tel;

const getSearchEngine               = () => getStateUser().searchEngine;
const getSocialCoverImage           = () => getStateUser().cover.m;

const getCubeDesigner               = () => getStateUser()["desktopSystem"]["cubeDesigner"];
const getCubeDesignerOpenDirection  = () => getStateUser()["desktopSystem"]["cubeDesigner"]["openingDirection"];

const getCubeDesignerSize = () => {
    let cubeDesigner = getCubeDesigner();
    return {
        width: cubeDesigner.cubeSize.width,
        height: cubeDesigner.cubeSize.height,
    }
};


/** GETTERS FOR APPSETTINGS **/
const getToken                      = () => getStateAppSettings()[SESSION_DATA].token;
const getShowWelcome                = () => getStateAppSettings()[SESSION_DATA].showWelcome;
const getPrivilege                  = () => getStateAppSettings()[SESSION_DATA].privilege;
const getDefaultBoardBg             = () => getStateAppSettings()[SESSION_DATA].defaultBoardBg;

const getRememberMe                 = () => getStateAppSettings()[SYSTEM_SETTINGS].rememberMe;
const getLanguage                   = () => getStateAppSettings()[SYSTEM_SETTINGS].language;
const getMinimapMode                = () => getStateAppSettings()[SYSTEM_SETTINGS].minimapMode;
const getMinimapVisibility          = () => getStateAppSettings()[SYSTEM_SETTINGS].minimapVisibility;

const getIsCut                      = () => getStateAppSettings()[BUFFERS].isCut;
const getCopyBuffer                 = () => getStateAppSettings()[BUFFERS].copyBuffer;
const getDragDropBuffer             = () => getStateAppSettings()[BUFFERS].dragDropBuffer;


// new!:  subscriptions
// const subscribeToToken              = el => subscribeToRedux(REDUX_ACTIONS.SESSION_DATA.SET_TOKEN, el);           // not used
// const subscribeToWelcome            = el => subscribeToRedux(REDUX_ACTIONS.SESSION_DATA.SET_SHOW_WELCOME, el);    // not used
// const subscribeToFirstName          = el => subscribeToRedux(REDUX_ACTIONS.SESSION_DATA.SET_FIRST_NAME, el);      // not used, also it is not in user settings
// const subscribeToLastName           = el => subscribeToRedux(REDUX_ACTIONS.SESSION_DATA.SET_LAST_NAME, el);
// const subscribeToEmail              = el => subscribeToRedux(REDUX_ACTIONS.SESSION_DATA.SET_EMAIL, el);
const subscribeToAvatar                = el => subscribeToRedux(AVATAR_ACT.SET_IMAGE, el);
// const subscribeToId                 = el => subscribeToRedux(REDUX_ACTIONS.SESSION_DATA.SET_ID, el);
// const subscribeToTelephone          = el => subscribeToRedux(REDUX_ACTIONS.SESSION_DATA.SET_TELEPHONE, el);
// const subscribeToPrivilege          = el => subscribeToRedux(REDUX_ACTIONS.SESSION_DATA.SET_TOKEN, el);
// const subscribeToLanguage           = el => subscribeToRedux(REDUX_ACTIONS.SYSTEM_SETTINGS.SET_LANGUAGE, el);
const subscribeToSearchEngine          = el => {
    return subscribeToRedux(SEARCH_ENG_ACT.SET_SEARCH_ENGINE, el)
};
// const subscribeToCoverImage         = el => subscribeToRedux(REDUX_ACTIONS.SYSTEM_SETTINGS.SET_SOCIAL_COVER_IMAGE, el);
// const subscribeToMinimapMode        = el => subscribeToRedux(REDUX_ACTIONS.SYSTEM_SETTINGS.SET_MINIMAP_MODE, el);
// const subscribeToMinimapVisibility  = el => subscribeToRedux(REDUX_ACTIONS.SYSTEM_SETTINGS.SET_MINIMAP_VISIBILITY, el);
// const subscribeToCubeDesigner       = el => subscribeToRedux(REDUX_ACTIONS.SYSTEM_SETTINGS.SET_CUBE_DESIGNER, el);
// const subscribeToCubeDesignerSize   = el => subscribeToRedux(REDUX_ACTIONS.SYSTEM_SETTINGS.SET_CUBE_DESIGNER_SIZE, el);
// const subscribeToOpenDirection      = el => subscribeToRedux(REDUX_ACTIONS.SYSTEM_SETTINGS.SET_CUBE_DESIGNER_OPEN_DIRECTION, el);

/** GETTERS FOR BOARD_STATE **/
const getAddapsCubes         = () => getStateBoardState().addapsCubes;
const getBoardOrder          = () => getStateBoardState().boardOrder;
const getAllCubeOrderByBoard = () => getStateBoardState().cubeOrderByBoard;
const getCubeInfo            = cubeId  => getAddapsCubes()[cubeId]; // returns a cube info: { id, icon}
const getCubeOrderByBoard    = boardId => getAllCubeOrderByBoard()[boardId]; // returns the cube order in an array of ids from a certain board.

module.exports = {
    // boardState
    getStateBoardState,
    getAddapsCubes,
    getBoardOrder,
    getAllCubeOrderByBoard,
    getCubeInfo,
    getCubeOrderByBoard,

    addBoardToStore:        el                          => getStore().dispatch(actionAddBoard(el)),
    addCubeToStore:         (cubeId, cubeIcon, boardId) => getStore().dispatch(actionAddCube(cubeId, cubeIcon, boardId)),
    changeCubeIconStore:    (cubeId, cubeIcon)          => getStore().dispatch(actionChangeCubeIcon(cubeId, cubeIcon)),
    removeBoardStore:       el                          => getStore().dispatch(actionRemoveBoard(el)),
    removeCubeStore:        (cubeId)                    => getStore().dispatch(actionRemoveCube(cubeId)),
    setCubeOrderListStore:  (boardId, cubeList)         => getStore().dispatch(actionSetCubeOrderList(boardId, cubeList)),
    setChangeCurrentBoardKey,
    setChangeSelectedCubeKey,
    setBodyClickNode,
    getBodyClickNode,



    // removeReduxStore,
    clearRedux,
    subscribeToRedux,
    cleanSubscriptions,

    // initRedux,
    getStore,
    getStoreReal,
    getStateUser,
    getStateAppSettings,
    getAll,


    setToken,
    setShowWelcome,
    setRememberMe,

    // system settings
    setLanguage,
    setMinimapMode,
    setMinimapVisibility,
    setIsCut,

    // buffers
    setCopyBuffer,
    setDragDropBuffer,
    setClearCopyBuffer,
    setClearDragDropBuffer,

    // GETTERS
    getToken,
    getShowWelcome,
    getFirstName,
    getLastName,
    getEmail,
    getAvatar,
    getId,
    getTelephone,
    getPrivilege,
    getRememberMe,
    getDefaultBoardBg,

    getLanguage,
    getSearchEngine,
    getSocialCoverImage,
    getMinimapMode,
    getMinimapVisibility,
    getCubeDesigner,
    getCubeDesignerSize,
    getCubeDesignerOpenDirection,

    getIsCut,
    getCopyBuffer,
    getDragDropBuffer,

    // new!:  subscriptions
    // subscribeToToken,
    // subscribeToWelcome,
    // subscribeToFirstName,
    // subscribeToLastName,
    // subscribeToEmail,
    subscribeToAvatar,
    // subscribeToId,
    // subscribeToTelephone,
    // subscribeToPrivilege,
    //
    // subscribeToLanguage,
    setSearchEngine,
    subscribeToSearchEngine,
    // subscribeToCoverImage,
    // subscribeToMinimapMode,
    // subscribeToMinimapVisibility,
    // subscribeToCubeDesigner,
    // subscribeToCubeDesignerSize,
    // subscribeToOpenDirection,

    REDUX_CONSTANTS: REDUX_ACTIONS
};
