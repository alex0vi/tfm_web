'use strict';

import R from 'ramda';


// import API_CONFIG from './config.js';
//
// import {getDataFromRestOfAddaps} from './restOfAddapsData.js';
//
// import Bluebird from 'bluebird';


let analytics = {};

const setAnalytics = (analyticsParam) => analytics = analyticsParam;

const getAnalytics = () => analytics;


export {setAnalytics, getAnalytics};
export default analytics;
