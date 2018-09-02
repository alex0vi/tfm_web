'use strict'

import { combineReducers } from 'redux'

import user from './user'
import messages from './messages'

let appReducer = combineReducers({
  user,
  messages
})

const rootReducer = ( state, action ) => {
  if ( action.type === 'LOG_OUT') {
    state = undefined
  }

  return appReducer( state, action )
}

export default rootReducer
