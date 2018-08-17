'use strict';

import R                from 'ramda';

//import mkRTClient       from './tfm-real-time-client'

const ioClient = require('socket.io-client')

//import { store  }          from './../../store.js';


// initialize namespaces to null
let rtClient                    = null;
let nsWebRTC                    = null;

// config to connect to the server
let url = 'http://localhost';
let port = 55422
let namespace = 'webrtc';
let socket;

socket = ioClient.connect( `${url}:${port}/${namespace}` )

export default socket;

// const nsWebRTCSpec = {
//     id: 'webrtc',
//     nsEvents: [
//         {
//             id          : 'INIT_CONTEXT',
//             canEmit     : true,
//             canListen   : false
//         },
//         {
//             id          : 'INIT_CALL',
//             canEmit     : true,
//             canListen   : true
//         },
//         {
//             id          : 'REQUEST_CALL',
//             canEmit     : true,
//             canListen   : true
//         },
//         {
//             id          : 'END_CALL',
//             canEmit     : true,
//             canListen   : true
//         }
//     ]
// }





// rtClient = mkRTClient(config);
// // create namespace WEBRTC
// nsWebRTC    = rtClient.mkNameSpace( nsWebRTCSpec )
//
// //listeners
// nsWebRTC.onSysServerConnected( data => {
//     console.log('server nsWebRTC', data)
// })
//
//
//
// const removeRT = () => {
//     // remove namespaces, we should do it when log out and close
//     nsWebRTC.disconnect();
// }
//
//
//
// export default {
//     removeRT,
//     getNsWebRTC:    () => nsWebRTC, //temporal
//     getRTClient:    () => rtClient, //temporal
// }
