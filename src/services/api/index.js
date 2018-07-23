import content from './data/content.json';

// const mkApi = require('@addaps/addaps_client_api');

//let initApi = mkApi({domain: 'https://www.addaps.com'})

let api = {
    getContent(language) {
        if (content.filter(obj => obj.lang === language)[0]) {
            return content.filter(obj => obj.lang === language)[0];
        } else {
            return content.filter(obj => obj.lang === 'gb')[0];
        }
    },
    // getApi() {
    //     return initApi;
    // }
};

module.exports = api;
