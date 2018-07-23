'use strict'

import { createStore } from 'redux';

import devToolsEnhancer from 'remote-redux-devtools';

import reducers from './reducers/multiLanguage';

const store = createStore(reducers, devToolsEnhancer());

export default store;
