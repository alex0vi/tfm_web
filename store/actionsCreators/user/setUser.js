'use strict';

const SET_USER = 'SET_USER';

const setUser = myself => {
    return {
        type: SET_USER,
        payload: {
            myself
        },
    }
};

export {SET_USER , setUser};
