'use strict'

const eventsValidation = require('../eventsSchemaValidation')

const Ru = require('rutils')


const mkCanonical = Ru.pipe(
    Ru.objOf('id'),
    Ru.assoc('canEmit', true),
    Ru.assoc('canListen', true)
)

let formatToCanonical = Ru.cond([
    [ Ru.isPlainObj, Ru.I ],
    [ Ru.T, mkCanonical ]
])

const genEvtsWithDefaults = Ru.defaultObjTo({
    listenerCallBack: Ru.I,
    emitterCallBack: Ru.I
})

const genEvts = Ru.curry(( config, events ) => {

    let {
        listenerCallBack,
        emitterCallBack
    } = genEvtsWithDefaults(config)


    const eventsVal = eventsValidation(events)
    if ( !eventsVal.isValid ) {
        throw new Error(JSON.stringify(eventsVal.errors, 1, 1))
        return
    }

    const mkListener = evtType => handler => {
        listenerCallBack( evtType, handler )
    }


    const mkEmitter = evtType => (...data) => {
        emitterCallBack( evtType, ...data )
    }

    const addEvtFns = (acc, evt) => {

        const canonEvt = formatToCanonical(evt)

        if ( canonEvt.canListen ) {
            let fnName = Ru.camelCase(`on${canonEvt.id}`)

            let listener = mkListener(canonEvt.id)

            acc = Ru.assoc( fnName, listener, acc)
        }

        if ( canonEvt.canEmit ) {
            let fnName = Ru.camelCase(`emit${canonEvt.id}`)

            let emitter = mkEmitter(canonEvt.id)

            acc = Ru.assoc( fnName, emitter, acc)
        }


        return acc

    }

    return Ru.reduce( addEvtFns, {}, events )
})

module.exports = genEvts
