'use strict'

const ioClient = require('socket.io-client')

const Ru = require('rutils')

const generateEventMethods = require('../libs/generateEventMethods')

const eventTypes = {
    ERROR                   :   'ERROR'                     ,
    error                   :   'error'                     ,
    SYS_SERVER_CONNECTED    :   'SYS_SERVER_CONNECTED'      ,
}

const mkNsWithDefault = Ru.defaultObjTo({
    nsEvents: []
})

const mkNs = spec => {

    let eventListeners = []

    const removeListeners = () => {

        const mapping = listener => {
            let { eventType, fn } = listener;

            socket.off( eventType, fn )
        };

        return Ru.map( mapping, eventListeners )
    }


    let {
        getAccessToken,
        nsEvents,
        url,
        port,
        connectionOpts,
        id
    } =  mkNsWithDefault(spec)


    let socket = null

    let defaultOpts = {
        transports: ['websocket'],
        secure: false
    }

    let opts = Ru.defaultObjTo( defaultOpts, connectionOpts )

    let nsObject = {};


    const addFnToNS = Ru.forEachObjIndexed( ( fnVal, fnName ) => { nsObject[fnName] = fnVal })


    nsObject.onSysServerConnected = handler => {


        socket = ioClient.connect( `${url}:${port}/${id}`, opts )

        socket.on( eventTypes.ERROR, e => {
            console.log(`${ eventTypes.ERROR }:`, e.code)
            throw new Error(JSON.stringify(e, 1, 1))
            return

        })

        socket.on( eventTypes.error, e => {
            console.log(`${ eventTypes.error }:`, e )
            throw new Error(JSON.stringify(e, 1, 1))
        } )

        const listenerCallBack = ( evtType, handler ) => {

            // let newHandler = {
            //     eventType:evtType,
            //}

            //eventListeners.push( newHandler )

            console.log('eventType- listenet', evtType);
            console.log('handler- listenet', handler);


            socket.on( evtType, handler )
        }

        const emitterCallBack = ( evtType, data ) => {

             let accessToken  = getAccessToken();
             let meta = { accessToken };

            socket.emit( evtType, data, meta )
        }

        let s = {
            listenerCallBack,
            emitterCallBack
        }

        addFnToNS( generateEventMethods( s, nsEvents) )


        socket.on( eventTypes.SYS_SERVER_CONNECTED , d => {


            nsObject.disconnect = () => {

                removeListeners()

                socket.disconnect()
            }


            handler(d)
        })

    }

    return nsObject

}

module.exports = mkNs
