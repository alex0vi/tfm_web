'use strict'

const Ru = require('rutils')

const mkWSClient = spec => {

    const mkNameSpace = require('./nameSpace')

    let {
        getAccessToken,
        url,
        port
    } = spec

    let nsSocketId = {}

    const mkNs = spec => {

        let {
            id,
            nsEvents,
        } =  spec

        let nsSocket = mkNameSpace({
            getAccessToken,
            nsEvents,
            id,
            url,
            port
        })

        nsSocketId[id] = nsSocket

        return nsSocket

    }

    return {
        mkNameSpace: mkNs,
        nsSocketId
    }
}

module.exports = mkWSClient
