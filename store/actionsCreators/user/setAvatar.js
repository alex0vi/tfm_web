'use strict';

const SET_AVATAR = 'SET_AVATAR';

const setAvatar = avatar => {
    return {
        type: SET_AVATAR,
        payload: {
            avatar
        },
    }
};

export {SET_AVATAR , setAvatar};
