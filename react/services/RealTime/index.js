'use strict';

import R                from 'ramda';
import io               from 'socket.io-client';

import mkRTClient       from '@addaps/real_time_client'

import USER_SETTINGS    from '../../../js/devel/modules-system/module-user-settings'

import store            from '../../../store/';


// initialize namespaces to null
let rtClient                    = null;
let nsMessages                  = null;
let nsNotifications             = null;
let nsWebRTC                    = null;
let userRoom                    = null;

// config to connect to the server
const config = {
    url: 'https://node.addaps.com',
    port: 55423,
    connectionOpts: { secure: true },
    getToken:   () => store.getState().appSettings.SESSION_DATA.token,
}

const nsMessagesSpec = {
    // if necessary the client can set up global events for all types of rooms
    nsEvents: [],
    roomEvents: [
        'NEW_MESSAGE'
    ],
    id:     'messages'
};


const nsNotificationsSpec = {
    // if necessary the client can set up global events for all types of rooms
    roomEvents: [
        {
            id: 'NEW_EPHIMERAL_NOTIFICATION',
            canEmit: false,
            canListen: true
        }
    ],
    id:     'notifications'
};

const nsWebRTCSpec = {
    id: 'webrtc',
    nsEvents: [
        {
            id          : 'INIT_CALL',
            canEmit     : true,
            canListen   : false
        },
        {
            id          : 'REJECT_CALL',
            canEmit     : true,
            canListen   : false
        },
        {
            id          : 'BUSY_CALL',
            canEmit     : true,
            canListen   : false
        },
    ],
    roomEvents: [
        'SDP_OFFER_SIGNAL',
        'SDP_ANSWER_SIGNAL',
        'CANDIDATE_SIGNAL',
        'CONNECT_VIDEO_SIGNAL',
        'DISCONNECT_VIDEO_SIGNAL',
    ],
}




const initRT = () => {
    rtClient = mkRTClient(config);

    // create namespace MESSAGES
    nsMessages      = rtClient.mkNameSpace(nsMessagesSpec);

    //listeners
    nsMessages.onSysServerConnected( data => {
        console.log('server nsMessages connected', data)
    })

    // create namespace WEBRTC
    nsWebRTC    = rtClient.mkNameSpace( nsWebRTCSpec )
    //listeners
    nsWebRTC.onSysServerConnected( data => {
        console.log('server nsWebRTC connected', data)
    })


    // create namespace NOTIFICATIONS and room userID
    nsNotifications = rtClient.mkNameSpace(nsNotificationsSpec);



    return new Promise ( (resolve, reject) =>  {
        nsNotifications.onSysServerConnected( data => {
            userRoom = nsNotifications.joinRoom(store.getState().user.id);
            USER_SETTINGS.rtcReadyResolve();

            console.log('Server nsNotifications connected')

            resolve(rtClient)
        })
    })
}

const removeRT = () => {
    // remove namespaces, we should do it when log out and close
    nsMessages.disconnect();
    nsWebRTC.disconnect();
    nsWebRTC.disconnect();
}






export default {
    initRT,
    removeRT,
    getNsMessages:  () => nsMessages,
    getUserRoom:    () => userRoom,
    getNsWebRTC:    () => nsWebRTC, //temporal
    getRTClient:    () => rtClient, //temporal
}
