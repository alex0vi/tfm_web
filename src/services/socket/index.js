'use strict';

import R                from 'ramda';

import mkRTClient       from './tfm-real-time-client'

import { store  }          from './../../store.js';


// initialize namespaces to null
let rtClient                    = null;
let nsWebRTC                    = null;

// config to connect to the server
const config = {
    url: 'http://localhost',
    port: 55422,
    connectionOpts: { secure: false },
    getAccessToken:   () => store.getState().user.accessToken,
}


const nsWebRTCSpec = {
    id: 'webrtc',
    nsEvents: [
        {
            id          : 'SEND_MESSAGE',
            canEmit     : true,
            canListen   : false
        },
        {
            id          : 'RECEIVE_MESSAGE',
            canEmit     : false,
            canListen   : true
        },
        {
            id          : 'INIT_CONTEXT',
            canEmit     : true,
            canListen   : true
        },
        {
            id          : 'INIT_CALL',
            canEmit     : true,
            canListen   : true
        },
        {
            id          : 'INIT_REQUEST_CALL',
            canEmit     : true,
            canListen   : true
        },
        {
            id          : 'END_CALL',
            canEmit     : true,
            canListen   : true
        },
        {
            id          : 'DRAWING',
            canEmit     : true,
            canListen   : true
        }
    ]
}




const initRT = () => {
    rtClient = mkRTClient(config);
    // create namespace WEBRTC
    nsWebRTC    = rtClient.mkNameSpace( nsWebRTCSpec )

    //listeners
    nsWebRTC.onSysServerConnected( data => {
        console.log('server nsWebRTC', data)
    })



 }

const removeRT = () => {
    // remove namespaces, we should do it when log out and close
    nsWebRTC.disconnect();
}


export default {
    initRT,
    removeRT,
    getNsWebRTC:    () => nsWebRTC, //temporal
    getRTClient:    () => rtClient //temporal
}
