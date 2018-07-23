'use strict';

import R from 'ramda';


// import API_CONFIG from './config.js';
//
// import {getDataFromRestOfAddaps} from './restOfAddapsData.js';
//
// import Bluebird from 'bluebird';


let api = {};

const setApi = (apiParam) => api = apiParam;

const getApi = () => api;


export {setApi, getApi};
export default api;
