'use strict'

import B from 'bluebird'

import Ru from 'rutils'

import api from './api'

import validator from './validator'

const subscribe = email => {
  // const apiClient = api.getApi()

  let spec = {
      method: 'post',
      body: JSON.stringify({email}),
  }

  let url = 'https://addaps.com/api/v2/emailSubscriptions'

  return(
      fetch(url, spec)
      .then( res => res.json() )
      .then( res => res.data )
  )

  // return (
  //   apiClient
  //   .post('emailSubscriptions', { email: email })
  //   .then( )
  // )
}

export {
    subscribe,
    validator
}
