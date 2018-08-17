'use strict'

import B from 'bluebird'

import Ru from 'rutils'

import { store } from '../store.js'

import getApi from './api'

import crypto from './crypto'

import socket from './socket'

import validator from './validator'


// console.log('crypto::: ', crypto);

// const rejectIfError = Ru.curry( (fn, res ) => {
//
//   const go = Ru.pipe(
//     JSON.parse,
//     Ru.cond([
//       [ Ru.o( Ru.isNotNil, Ru.path([ 'data', 'httpCode' ]) ),  r => B.reject( r.data ) ],
//       [ Ru.T,  fn ]
//     ])
//   )
//
//   return go(res)
//
// })

const login = credentials => {
  const api = getApi()

  return (
    api
    .post('session', credentials)
    //TODO rejectIfError
    .then( res => {

      return({
        user: res.initialData.user,
        accessToken: res.accessToken
      })
    })
  )
}

const register = data => {
  const api = getApi()

  return (
    api
    .post('signup', data)
    //.then( rejectIfError(Ru.K(true)) )
    .then(res => {

        return({
          user: res.initialData.user,
          accessToken: res.accessToken
        })

    })
  )
}


const logOut = token => {
  const api =  getApi(token)
  return(
    api
    .put('logout')
  )
}

const auth = {
  login,
  register,
  logout: spec => B.resolve('Logged out'),
  isLoggedIn: () =>  store.getState().user.isLoggedIn
}




export {
  auth,
  crypto,
  validator,
  socket
}
