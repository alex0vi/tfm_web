'use strict';

/*
    use https://www.uuidgenerator.net/ to generate ID. select UUID V4
*/
console.log('*****************************************************************')
console.log('API CLIENT WITH ID 49596a23-7aa9-4d5f-a73c-b0ff8c2984aa')
console.log('*****************************************************************')


const Ru = require('rutils');

const B = require('bluebird');

require('fetch-everywhere');
const FormData = require('form-data');


const METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
    PATCH: 'PATCH',
};

const renderArray = Ru.pipe(
    Ru.join(','),
    Ru.between('[', ']')
)


const renderUrlValue = Ru.cond([
    [Ru.is( Array ),        renderArray],
    [Ru.T,                  Ru.I]
])



const buildQs = (acc, kvPair) => {

  let [k,v] = kvPair;

  let vStr = renderUrlValue( v );

  return `${acc}${k}=${vStr}&`;
}



const stringifyIfObject = ( value, key ) => {

    if ( Ru.startsWith( '_', key ) ) {
        return encodeURIComponent( JSON.stringify( value ) )
    }

    return value
}

const buildQsValue = Ru.pipe(
    Ru.mapObjIndexed( stringifyIfObject ),
    Ru.toPairs,
    Ru.reduce( buildQs, '?' ),
    Ru.init                             //delete the last & value from the reduce
)



const isGet = Ru.equals( METHODS.GET );




// API_ERROR_TYPE
// const apiErrorsTypes = [ 'API_HTTP_ERROR', 'API_NETWORK_ERROR' ];


const handleApiHttpError = err => {

    let { httpStatus, addapsCode } = err;

    console.log( 'HTTP_ERROR' )
    console.log( 'httpStatus', httpStatus )
    console.log( 'addapsCode', addapsCode )

    throw err;
}


const handleApiNetworkError = err => {

    console.log('************************handleApiNetworkError*******************************');
    console.log( 'API_NETWORK_ERROR' )
    console.log(err);

    let { code } = err;

    console.log( 'code', code )

    throw err;
}

let custom401Error = Ru.I

const setCustom401Error = fn => { custom401Error = fn; }


const handleApi401Error = err => {

    console.log( '********************************** handleApi401Error *****************************' )
    let { code } = err;

    console.log( ' code', code )

    custom401Error();

    throw err;
}

const handleError =  err => {

    console.log( '********************************** handleError *****************************' )
    console.log( 'Unknow api error' )
    console.log( err );

    throw err;
}


const handleApiError = Ru.cond([
    [Ru.propEq('API_ERROR_TYPE', 'HTTP_ERROR' ),             handleApiHttpError ],
    [Ru.propEq('httpCode', 401),                             handleApi401Error ],
    [Ru.propEq('API_ERROR_TYPE', 'API_NETWORK_ERROR' ),      handleApiNetworkError ],
    [ Ru.T ,                                                 handleError ],
]);





const checkHttpRequest = response => {

    let httpRequestIsOk = response.ok;

    if( !httpRequestIsOk ){
        // throw new Error({'hola':'hola'})

        let error = {
            API_ERROR_TYPE      : 'HTTP_ERROR',
            httpStatus          : response.status,
            addapsCode          : 40
        };

        throw error
    }

    return response;
}





const specWithDefaults = Ru.defaultDeepObjTo({
    getAccessToken:    Ru.I,
    setAccessToken:    Ru.I,
    getRefreshToken:   Ru.I,
    setRefreshToken:   Ru.I,

    apiRoute: 'api',

    apiSubdomain: 'develop'

});









const mkApi = specParam  => {

    let {
        getAccessToken,
        setAccessToken,
        getRefreshToken,
        setRefreshToken,
        apiRoute,

        apiSubdomain,
        domain

    } = specWithDefaults( specParam );




    const fetch = specParam.fetch || global.fetch;
    const agent = specParam.agent || null;

    domain = domain || `https://${ apiSubdomain }.tfm.com`;

    const REFRESH_TOKENS_URL = `${domain}/api/token`

    let apiCallFormDataDefaultOptions = {
        headers: {
            'Accept': 'application/json',
            // 'Content-Type': 'multipart/form-data'
        },
    }


    const isFormData = Ru.pipe(
        Ru.path(['constructor','name']),
        Ru.eq('FormData')
    )


    let defaultApiCallOptions = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        JSONEncode: true
    }



    const apiCallOptionsWithDefaults = Ru.cond([
        [ isFormData,               (body, optionsParam) => Ru.defaultDeepObjTo( apiCallFormDataDefaultOptions, optionsParam ) ],
        [ Ru.T,                     (body, optionsParam) => Ru.defaultDeepObjTo( defaultApiCallOptions, optionsParam      )    ],
    ])


    const buildApiCall = needsToken => method => (apiUrl, qsOrBody, optionsParam ) => {

      let options = apiCallOptionsWithDefaults( qsOrBody, optionsParam );

      return(
          B
          .resolve( getAccessToken() )
          .then( token => {

              const initialAccessTokenFrozen = token;

              let partUrl = `${domain}/api/${apiUrl}`;



              let qs = '';
              let bodyObject;
              let querySpec;

              if(isGet( method ) ){

                let qsObject = qsOrBody
                qs =  qsObject && buildQsValue(qsObject) || '';

                let headers = Ru.merge({
                    'Authorization': needsToken ? `Bearer ${token}` : null
                }, options.headers)

                querySpec = {
                  method,
                  headers,
                };

              }


              else {

                bodyObject = qsOrBody;

                let headers = Ru.merge({
                    'Authorization': needsToken ? `Bearer ${token}` : null
                }, options.headers)

                querySpec = {
                  method,
                  headers,
                  body: options.JSONEncode ? JSON.stringify( bodyObject ) : bodyObject,
                  agent: agent
                };

              }

              let url = `${partUrl}${qs}`;


              console.log('url', url)
            //   console.log('querySpec', querySpec )




              return(
                  B
                  .resolve( fetch(url, querySpec) )
                  .then( rejectWhenError )
                  .then( response => response.json() )
                  .then( Ru.prop( 'data' ) )
                  .catch( err => {

                       let {
                           data
                       } = err

                      if ( data.code !== 'ACCESS_TOKEN_EXPIRED' ) {
                          throw data
                          return
                      }


                      return (
                          B
                          .resolve( getRefreshToken() )
                          // No refreshToken provided
                          .then( Ru.when( Ru.isNil, () => B.reject( data ) ))
                          // Refreshing accessToken
                          .then( refreshTokenData => {
                              let {
                                  code: refreshToken,
                                  version: refreshTokenVersion
                              } = refreshTokenData


                              let opts = {
                                  method: 'POST',
                                  headers: {
                                      'Content-Type': 'application/json',
                                      'Accept': 'application/json'
                                  },
                                  body: JSON.stringify({
                                          refreshToken
                                      }
                                  ),
                                  agent
                              }

                              console.log( '******************REFRESH_TOKENS_URL***********************', REFRESH_TOKENS_URL )
                            //   console.log('**************************opts********************', opts )


                              return(
                                  B
                                  .resolve( fetch( REFRESH_TOKENS_URL, opts ) )
                                  .then( rejectWhenError )
                                  .then( response => response.json() )
                                  // Updating tokens in the caller
                                  .then( res => {
                                      //   console.log('*********************New tokens*****************', res )

                                      let {
                                          data: {
                                              accessToken,
                                              refreshToken,
                                              version
                                          }
                                      } = res


                                      let newRefreshToken = {
                                          code: refreshToken,
                                          version
                                      }

                                      return(
                                          B
                                          .resolve( getRefreshToken() )
                                          .then( Ru.prop('version') )
                                          .then( refreshTokenVersion => ( refreshTokenVersion < version ) )
                                          .then( Ru.whenT( () => {
                                              return (
                                                  B
                                                  .all([
                                                      B
                                                      .resolve( setRefreshToken( newRefreshToken ) )
                                                      ,
                                                      B
                                                      .resolve( setAccessToken( accessToken ) )
                                                  ])
                                              )
                                          }) )
                                          .then( Ru.K( accessToken ) )
                                      )

                                  } )
                                  .catch( err => {
                                      let {
                                          data
                                      } = err

                                      const accessTokenDelayReadingTime = 500

                                      const maxAccessTokenReadingAttend = 4

                                      const getAccessTokenRecursively = numIterationsLeft => {


                                          console.log('--------------------------*****getAccessTokenRecursively*****-----------------', numIterationsLeft );
                                          console.log('--------------------------*****new Date().toUTCString()*****-----------------', new Date().toUTCString() );
                                          if ( numIterationsLeft === 0 ) {
                                              return (
                                                  B
                                                  .reject({
                                                      description    : 'Token can no longer be refreshed',
                                                      httpCode        : 400,
                                                      code            : 'ACCESS_TOKEN_EXPIRED_FOREVER',
                                                  })
                                              )
                                          }

                                          return(
                                              B
                                              .resolve( getAccessToken() )
                                              .then( accessToken => {

                                                  if ( initialAccessTokenFrozen === accessToken ) {
                                                    return (
                                                        B
                                                        .delay( accessTokenDelayReadingTime )
                                                        .then( () => getAccessTokenRecursively( numIterationsLeft -1 ) )
                                                    )
                                                  }

                                                  return accessToken
                                              })
                                          )
                                      }


                                     if ( data.code === 'REFRESH_TOKEN_REVOKED' ) {
                                         return getAccessTokenRecursively( maxAccessTokenReadingAttend )
                                     }

                                     throw data
                                     return

                                  } )
                              )
                          })
                        //   .then( () => B.resolve( getAccessToken() ) )
                          .then( token => {

                              let qOpts = Ru.assoc(
                                  'headers',
                                  Ru.merge({
                                      'Authorization': needsToken ? `Bearer ${token}` : null
                                  }, options.headers),
                                  querySpec
                              )

                              return(
                                  B
                                  .resolve( fetch( url, qOpts ) )
                                  .then( rejectWhenError )
                                  .then( response => response.json() )
                                  .then( Ru.prop( 'data' ) )
                              )
                          })
                      )
                  })
              )
          } )
              .catch( handleApiError )
      )

    };

    const rejectWhenError = Ru.when( Ru.propEq( 'ok', false ), res => res.json().then( B.reject ) )


    const apiCall = buildApiCall(true)
    const apiCallWithoutToken = buildApiCall(false);


    let api = {
      'get'     : apiCall( METHODS.GET ),
      'post'    : apiCall( METHODS.POST  ),
      'put'     : apiCall( METHODS.PUT ),
      'delete'  : apiCall( METHODS.DELETE ),
      'patch'   : apiCall( METHODS.PATCH ),
      setCustom401Error
    };


    return api;
};


module.exports = mkApi;


// 'use strict';
//
// const Ru = require('rutils');
//
// const B = require('bluebird');
//
// // const fetch = require('fetch-everywhere');
//
// const FormData = require('form-data');
//
//
// const METHODS = {
//     GET: 'GET',
//     POST: 'POST',
//     PUT: 'PUT',
//     DELETE: 'DELETE',
//     PATCH: 'PATCH',
// };
//
//
//
//
// const isGet     = Ru.eq( METHODS.GET );
//
//
//
//
// // // API_ERROR_TYPE
// // // const apiErrorsTypes = [ 'API_HTTP_ERROR', 'API_NETWORK_ERROR' ];
// //
// //
// // const handleApiHttpError = err => {
// //
// //     let { httpStatus, addapsCode } = err;
// //
// //     console.log( 'HTTP_ERROR' )
// //     console.log( 'httpStatus', httpStatus )
// //     console.log( 'addapsCode', addapsCode )
// //
// //     throw err;
// // }
// //
// //
// // const handleApiNetworkError = err => {
// //
// //     let { code } = err;
// //
// //     console.log( 'API_NETWORK_ERROR' )
// //     console.log( 'code', code )
// //
// //     throw err;
// // }
// //
// //
// //
// // const handleApiError = Ru.cond([
// //     [Ru.propEq('API_ERROR_TYPE', 'HTTP_ERROR' ),             handleApiHttpError ],
// //     [Ru.propEq('API_ERROR_TYPE', 'API_NETWORK_ERROR' ),      handleApiNetworkError ],
// //     [ Ru.T ,                                                 handleApiNetworkError ],
// // ]);
// //
// //
// //
// //
// //
// // const handleError =  err => {
// //
// //     console.log( 'some error in the client api' )
// //     console.log( err );
// //
// //     throw err;
// // }
// //
// //
// // const checkHttpRequest = response => {
// //
// //     let httpRequestIsOk = response.ok;
// //
// //     if( !httpRequestIsOk ){
// //         // throw new Error({'hola':'hola'})
// //
// //         let error = {
// //             API_ERROR_TYPE      : 'HTTP_ERROR',
// //             httpStatus          : response.status,
// //             addapsCode          : 40
// //         };
// //
// //         throw error
// //     }
// //
// //     return response;
// // }
//
//
// // defaults array render function
// const renderArray = Ru.pipe(
//     Ru.join(','),
//     Ru.between('[', ']')
// )
//
//
//
// const isFormData = Ru.pipe(
//     Ru.path(['constructor', 'name']),
//     Ru.eq('FormData')
// )
//
//
//
//
// const confWithDefaults = Ru.defaultDeepObjTo({
//     getToken: () => B.resolve(null),
//     setToken: () => B.resolve(null),
//     urlEncoding: {
//         renderArray,
//         // renderVersion
//     },
//     version: 1.0,
//     versionUrl: Ru.I,
//     apiRoute: '',
//     xfInput: Ru.I,
//     xfOutput: Ru.I,
//     logger: false,
//
//     defaultSpec: {
//         fetchSpec: {
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             }
//         }
//     }
// })
//
//
// const httpResIsJson = res => res.headers.get("content-type") === 'application/json' ;
//
//
//
//
//
//
// const mkApi = conf => {
//
//     let {
//         getToken,
//         setToken,
//         rootUrl,
//         urlEncoding,
//         version,
//         versionUrl,
//         apiRoute,
//
//         xfInput,
//         xfOutput,
//
//         logger,
//         defaultSpec
//
//     } = confWithDefaults( conf );
//
//
//     let {
//         renderArray
//
//     } = urlEncoding;
//
//
//
//     const renderUrlValue = Ru.cond([
//         [Ru.is( Array ),        renderArray],
//         [Ru.T,                  Ru.I]
//     ])
//
//
//
//     const buildQs = (acc, kvPair) => {
//
//         let [k,v] = kvPair;
//
//         let vStr = renderUrlValue( v );
//
//         return `${acc}${k}=${vStr}&`;
//     }
//
//
//     const buildQsValue = Ru.pipe(
//         xfInput,
//         Ru.toPairs,
//         Ru.reduce( buildQs, '?' ),
//         Ru.init                             //delete the last & value from the reduce
//     )
//
//
//
//
//     const isEmptyString = Ru.both(
//         Ru.is( String ),
//         Ru.isEmpty
//     )
//
//     const renderPartUrl = Ru.cond([
//         [ isEmptyString, Ru.K('') ],
//         [ Ru.is( String ), Ru.concat('/') ],
//         [ Ru.is( Number ), n => `/${n}` ],
//         [ Ru.T, Ru.K('') ],
//     ])
//
//
//     const joinUrlReducerFn = (url, partUrl) => Ru.concat(url, renderPartUrl( partUrl ));
//
//     const joinUrl = Ru.pipe(
//         Ru.reduce( joinUrlReducerFn, '' ),
//         Ru.tail
//     );
//
//
//
//
//     const getFetchSpec = (token, method, qsOrBody) => {
//
//         let body = isGet( method ) ? null : xfInput(qsOrBody );
//
//         // console.log('qsOrBody', qsOrBody)
//         // console.log('body', body)
//
//         let contentType = isFormData( qsOrBody ) ? null : 'application/json';
//
//         let headers = {
//             token,
//             'Content-Type': contentType
//         };
//
//         let spec = {
//             headers,
//             body,
//             method
//         };
//
//         return spec;
//     }
//
//
//
//     const apiCall = method => (resourceUrl, qsOrBody, spec ) => {
//
//         spec = Ru.defaultDeepObjTo( defaultSpec, spec );
//
//         let fetchSpecFromCaller = spec.fetchSpec;
//
//
//         return(
//           B
//           .resolve( getToken() )
//           .then( token => {
//
//             //   let partUrl = `${rootUrl}/${apiRoute}/${versionUrl(version)}/${resourceUrl}`;
//
//               let partUrl = joinUrl( [rootUrl, apiRoute, versionUrl(version), resourceUrl] )
//               let qs = isGet( method ) ? buildQsValue( qsOrBody ) : '';
//
//               let fetchSpec = Ru.deepMerge( getFetchSpec( token, method, qsOrBody ), fetchSpecFromCaller );
//
//
//
//
//               let url = `${partUrl}${qs}`;
//
//               if(logger){
//                   console.log('fetch url', url)
//                   console.log('fetch querySpec', JSON.stringify(fetchSpec, null, 2) )
//               }
//
//
//               fetchSpec = Ru.over( Ru.lensProp('body'), JSON.stringify )( fetchSpec );
//
//
//               const interpretJSON = res => {
//
//                   return(
//                       B
//                       .resolve()
//                       .then( () => res.json() )
//                       .then( xfOutput )
//                       .tap( Ru.when( Ru.has('token'), res => setToken(res.token) ) )
//                   )
//               }
//
//
//
//               const interpretResponse = Ru.pipe(
//                   Ru.cond([
//                       [httpResIsJson,   interpretJSON       ],
//                       [Ru.T,            res => res.text()   ],
//                   ])
//                 //   Ru.tap( response => console.log('response', response) )
//               )
//
//
//               return(
//                   B
//                   .resolve( fetch(url, fetchSpec) )
//                 //   .then( checkHttpRequest )
//                  .then( interpretResponse )
//             )
//           })
//         //   .catch( handleApiError )
//         )
//     };
//
//
//     let api = {
//       'get'     : apiCall( METHODS.GET ),
//       'post'    : apiCall( METHODS.POST  ),
//       'put'     : apiCall( METHODS.PUT ),
//       'delete'  : apiCall( METHODS.DELETE ),
//       'patch'   : apiCall( METHODS.PATCH )
//     };
//
//
//     return api;
// }
//
//
// module.exports = mkApi;
