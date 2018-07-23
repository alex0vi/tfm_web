'use strict';


import React, { Component }             from 'react';
import { createStore, compose }         from 'redux';
import DevTools                         from './containers/DevTools';
import USER_SETTINGS                    from '../js/devel/modules-system/module-user-settings';
import FS                               from '../js/devel/modules-system/module-operations-fs';

import { persistStore, autoRehydrate, createTransform, getStoredState}  from 'redux-persist'
import rootReducer                          from './reducers/rootReducer.js';
import { AsyncNodeStorage }                 from 'redux-persist-node-storage';
import { PERSIST_SETTINGS_ADRESS_MODULE }   from '../js/devel/constants/addresses/constants.js';
import { initSubscriptions }                from './subscription/subscriptorsMethods.js'

const initialState = {};
const pSCallback = () => {
    USER_SETTINGS.loadLocalStorageResolve("rehidrationComplete");
    initSubscriptions(store); // init subscription module
}; //  persist store callback, notify the app that the rehidration has been complete, and the store can be used now
let store;

/**
 * creates the store enhancer; if its production environment, we wont add the Devtools.
 * @returns enhancer;
 */
const createEnhancer = () => {
    // only use the DevTools component when in development
    const isProduction = process.env.NODE_ENV === 'production';

    return isProduction ? compose(autoRehydrate())
                        : compose(
                            // applyMiddleware(logger),
                            autoRehydrate(),
                            DevTools.instrument(),
                        );

};


/**
 * inits the store
 * @returns {*}
 */
const initStore = () => {
    let enhancer = createEnhancer();
    store = createStore(rootReducer, initialState, enhancer);

    FS.createFoldersIfTheyDontExist(PERSIST_SETTINGS_ADRESS_MODULE());

    let pSOptions = {
        storage:    new AsyncNodeStorage(PERSIST_SETTINGS_ADRESS_MODULE()),
        whitelist:  ['appSettings']
    };

    /**
     * makes the store persistent
     *
     * storage: stands for the type of storage we will use. It is an extra plugin, and the parameter stands for the
     *          place in where we will save it.
     * whitelist: says what we will save about the info
     * todo: add encryption.
     */
    persistStore(store, pSOptions, pSCallback);
    return store;
};


store = initStore();

export default store;
