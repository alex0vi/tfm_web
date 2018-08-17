'use strict'

const Ajv  = require('ajv')


const validation = data => {
    const eventObjSchema = {
        "type": "object",
        "properties" : {
            "id": { "type":"string"},
            "canEmit": { "type": "boolean"},
            "canListen": { "type": "boolean"}
        },
        "required": ["id", "canEmit", "canListen"]
    } 
    
    const eventStrSchema = {
        "type": "string"
    }
    
    const eventSchema = {
        "title": "EVENT",
        "anyOf": [ eventObjSchema, eventStrSchema ]
    }
    
    
    const eventListSchema = {
        "title": "EVENTS",
        "type": "array",
        "items": eventSchema
    } 
    
    let ajv = new Ajv({allErrors: true})
    const eventsValidation = ajv.compile(eventListSchema)
    
    let isEventListValid = eventsValidation(data)
    
    return {
        isValid: isEventListValid,
        errors:  eventsValidation.errors
    }
}


module.exports = validation