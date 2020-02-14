'use strict'

import Ru from 'rutils'

import { createAction } from 'redux-actions'

import { batchActions } from 'redux-batched-actions'



const updateMessages           = createAction('UPDATE_MESSAGES')

export {
  updateMessages
}
