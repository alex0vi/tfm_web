'use strict'

import Ru from 'rutils'

import up from 'updeep'

import { REHYDRATE } from 'redux-persist/lib/constants'

let initialState = {
      messages: [
      ]

}

const updateMessagesHandler = ( state, payload ) => {
    console.log('en payload handler', payload);

    if( !Ru.isEmpty(state.messages)) {
        if(Ru.last(state.messages).author === payload.author  ) {

            payload.noShow= true
        }
    }


    console.log('en payload state', state);
  return {
    messages: Ru.concat(state.messages,  [ payload ] )
  }
}

let actionHandlers = {
  UPDATE_MESSAGES: updateMessagesHandler
}


const reducer = ( state = initialState, action ) => {

  let {
    type,
    payload,
    meta
  } = action

  console.log('action-state:::: ', state)
  console.log('action:::: ', action)

  if ( type === REHYDRATE && Ru.isNotNil(payload)) {
    return {
      ...state,
      ...payload.messages
    }
  }


  let actionHandler = actionHandlers[ type ]

  if ( !Ru.isNil( actionHandler ) ) {
    let statePropertyUpdated = Ru.defaultTo( {}, actionHandler(state, payload) )

    return up( statePropertyUpdated, state )
  }

  // console.log('action-after-state:::: ', state)
  return state
}


export default reducer
