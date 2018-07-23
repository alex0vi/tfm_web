'use strict';

const SET_ID = 'SET_ID';

const setId = id => {

    return {
        type: SET_ID,
        payload: {
            id
        },
    }
};


export {SET_ID , setId};
