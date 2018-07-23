const action_types = require('../types');

let actions = {
    switchLanguage(language) {
        return {type: action_types.SWITCH_LANGUAGE, language}
    }
};

module.exports = actions;
