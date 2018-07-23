'use strict';

const SET_SEARCH_ENGINE = 'SET_SEARCH_ENGINE';

const setSearchEngine = engine => {

    return {
        type: SET_SEARCH_ENGINE,
        payload: {
            engine
        },
    }
};


export {SET_SEARCH_ENGINE , setSearchEngine};
