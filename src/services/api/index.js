'use strict'

import Ru from 'rutils'

import mkApi from './rest-api-js-client'

import B from 'bluebird'



const snakeCaseKeysIfObj = Ru.pipe(
    Ru.cond([
        [ Ru.isPlainObj,                    Ru.snakeCaseKeys    ],
        [ Ru.T,                             Ru.I                ]
    ])
)



const api = null

const getApi = token => mkApi({
    getAccessToken: () => B.resolve( token ),
    setAccessToken: t => {
        token = t;
        return B.resolve()
    } ,
    domain: "http://192.168.1.131:3051"
  // xfInput: snakeCaseKeysIfObj
})

export default getApi
