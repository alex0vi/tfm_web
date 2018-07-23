'use strict';

import R from 'ramda';
import u from 'updeep';



import {SET_NOTIFICATIONS}       from '../actionsCreators/notifications/setNotifications';

const initialState = {
    notifications: {}
};



const setNotificationsHandler = (state, payload) => {

    return {
        notifications: payload.notifications
    }
}






let mapToActionHandler = {
    [SET_NOTIFICATIONS]      :       setNotificationsHandler,
};


let actionsTypes = R.keys(mapToActionHandler);
const isAnActionType = type => type in mapToActionHandler;


export default function(state = initialState, action = {} ) {

  return isAnActionType(action.type) ?
      u( mapToActionHandler[action.type]( state, action.payload) || state, state)
    : state;
};
