'use strict'

import React from 'react'

import App from './app.js'

const Provider = require('react-redux').Provider;

import store from './store.js';

import ReactDOM from 'react-dom'

const app = document.getElementById("root")

ReactDOM.render((
    <Provider {... { store }}>
        <App/>
    </Provider>),
    app)
