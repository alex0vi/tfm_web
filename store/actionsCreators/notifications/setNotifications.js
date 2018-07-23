'use strict';

const SET_NOTIFICATIONS = 'SET_NOTIFICATIONS';

const setNotifications = (notifications) => {

    return {
        type: SET_NOTIFICATIONS,
        payload: {
            notifications
        },
    }
};


export {SET_NOTIFICATIONS , setNotifications};
