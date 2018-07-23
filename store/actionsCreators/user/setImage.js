'use strict';

const SET_IMAGE = 'SET_IMAGE';

const setImage = (url, type) => {

    return {
        type: SET_IMAGE,
        payload: {
            url,
            type
        },
    }
};


export {SET_IMAGE , setImage};
