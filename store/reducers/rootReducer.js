import { combineReducers }      from 'redux';

import reactCubeReducer         from './reactCubeReducer.js';
import socialReducer            from './socialReducer.js';
import boardStateReducer        from './boardStateReducer.js';
import communicationReducer     from './communicationReducer.js';
import webRTCReducer            from './webRTCReducer.js';
import userReducer              from './userReducer.js';
import notificationReducer      from './notificationReducer.js';

const  { appSettings }          = require('./userSettingsReducers.js');




export default combineReducers({
    user            : userReducer,
    notifications   : notificationReducer,
    reactCubeReducer: reactCubeReducer,
    reactCubes      : reactCubeReducer,
    socialReducer   : socialReducer,
    boardReducer    : boardStateReducer,
    appSettings     : appSettings,
    communication   : communicationReducer,
    webRTC          : webRTCReducer,
});
