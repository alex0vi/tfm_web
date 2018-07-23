const action_types = require('../../actionCreators/types');

const api = require('../../services/api');

const language = (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;

const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

let initialLanguage = languageWithoutRegionCode || 'gb';

if (initialLanguage === 'en') {
    initialLanguage = 'gb';
}

const initialState = {
    content: api.getContent(initialLanguage) // Loads default language content (en) as an initial state
};

let reducer = function(state = initialState, action) {
    switch (action.type) {
        case action_types.SWITCH_LANGUAGE:
            return {
                content: api.getContent(action.language)
            };
        default:
            return state;
    }
};

module.exports = reducer;
