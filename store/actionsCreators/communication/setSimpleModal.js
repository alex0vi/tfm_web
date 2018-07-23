'use strict';

const SET_SIMPLE_MODAL = 'SET_SIMPLE_MODAL';

const setSimpleModal = (isVisible, title, description, actionType) => {

    return {
        type: SET_SIMPLE_MODAL,
        payload: {
            isVisible,
            title,
            description,
            actionType
        },
    }
};


export {SET_SIMPLE_MODAL , setSimpleModal};
