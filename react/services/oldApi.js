'use strict';



import React, { Component } from 'react';


import {decorate} from '../utils/utils.js'
import R from 'ramda';


var API_URL = 'https://latest.addaps.com/api';
var STATIC_URL = 'https://latest.addaps.com/static';
var AVATARS_URL = 'https://latest.addaps.com/static/avatars/';

// let user_settings = require('../../js/modules-system/module-user-settings');
// let TOKEN = user_settings.getToken();

import {getDataFromRestOfAddaps} from './restOfAddapsData.js';



const api = needsToken => method => type => fn => (...rest) => {


  let token = getDataFromRestOfAddaps().userSettings.token;

  let { jsonBody, endUrl } = fn(...rest);

  let url = needsToken ?
      `https://latest.addaps.com/api/${type}/${endUrl}.json?token=${token}`
  :   `https://latest.addaps.com/api/${type}/${endUrl}`


  let querySpec = {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      // 'mode:': 'no-cors',
    },
    body: jsonBody ? JSON.stringify(jsonBody) : null
  };


  return fetch(url, querySpec).then( (response) => {


    return response.json();
  });

};


const apiCall = api(true);                          //true -> needs Token
const apiCallGET = apiCall('GET');
const apiCallPOST = apiCall('POST');

const ApiCallWithoutToken = api(false);            //false -> not needs Token
const apiCallPostWithoutToken = ApiCallWithoutToken('POST');


const endUrl = endUrlString => fn => (...rest) => {

  return {
    jsonBody: fn(...rest),
    endUrl: endUrlString
  };

}

const list = endUrl('index');
const rename = endUrl('rename');
const endUrlDelete = endUrl('delete');
const add = endUrl('add');
const edit = endUrl('edit');
const duplicate = endUrl('duplicate');







//----------------content Api-------------------

const contentsApiCall = apiCallPOST('contents');

const getAddapsContents = decorate(
  contentsApiCall,
  endUrl('addaps'),

  parent_id => ( {  parent_id } )
);


const getMyContents = decorate(
  contentsApiCall,
  list,

  parent_id => ( {  parent_id } )
);



const renameContentInApi = decorate(
  contentsApiCall,
  edit,

   (contentId, newName)  => {

     return [{id: contentId, name: newName}];

   }
);



const deleteContentInApi = decorate(
  contentsApiCall,
  endUrlDelete,

  ( ids ) => ({contents: ids })
);



const addContentFolderInApi = decorate(
  contentsApiCall,
  add,

  ( name, parent ) => {

    return {
      name,
      parent,
      type: 'folder',
      service:'addaps',
      data: {}
    };
  }
);



const duplicateContentInApi = decorate(
  contentsApiCall,
  duplicate,

  (ids, toParentId) => {

    const makeObjReq = id => ({
      id,
      service: 'addaps',
      model: 'web',
      parent_id: toParentId
    });

    return R.map( makeObjReq, ids);
  }
);

const duplicateAppIntoContentInApi = decorate(
  contentsApiCall,
  duplicate,

  (ids, toParentId) => {

    const makeObjReq = id => ({
      id,
      service: 'addaps',
      model: 'apps',
      parent_id: toParentId
    });

    return R.map( makeObjReq, ids);
  }
)


const editContentInApi = decorate(
  contentsApiCall,
  edit,

  ({id, editObj}) => [ R.merge( {id} , editObj) ]
);


const editParentContentInApi = decorate(
  contentsApiCall,
  edit,

  (ids, parentId) => R.map( id => ( {id, parent:parentId} ), ids )
);






//----------------boards Api-------------------
//
const boardsApiCall = apiCallPOST('boards');

const getAddapsBoardsFromApi = decorate(
  boardsApiCall,
  endUrl('addaps'),

  parent_id  => ( {  parent_id } )
);



const getMyBoardsFromApi = decorate(
  boardsApiCall,
  list,

  parent_id  => ( {  parent_id } )
);



const renameBoardInApi = decorate(
  boardsApiCall,
  edit,

  (boardId, newName)  => ( [{ id:boardId, name:newName }] )
);



const deleteBoardInApi = decorate(
  boardsApiCall,
  endUrlDelete,

  ( ids ) => ( { boards: ids } )
);


const addBoardFolderInApi = decorate(
  boardsApiCall,
  add,

  (name, parent) => {

    return {
      name,
      parent,
      type: 'folder',
      service:'addaps',
      data: {}
    };
  }
);


const saveBoardInApi = decorate(
  boardsApiCall,
  add,

  (board) => ( board )
);


// const duplicateContentInApi = decorate(
//   contentsApiCall,
//   duplicate,
//
//   (ids, toParentId) => {
//
//     const makeObjReq = id => ({
//       id,
//       service: 'addaps',
//       model: 'web',
//       parent_id: toParentId
//     });
//
//     return R.map( makeObjReq, ids);
//   }
// );


const duplicateBoardInApi = decorate(
  boardsApiCall,
  duplicate,

  (ids, toParentId) =>  R.map( id => ( {id, parent_id:toParentId}  ), ids)
);



const editBoardInApi = decorate(
  boardsApiCall,
  edit,

  ( {id, editObj} ) => [ R.merge( { id }  , editObj) ]
);





const editParentBoardInApi = decorate(
  boardsApiCall,
  edit,

  (ids, parentId) => R.map( id => ( {id, parent:parentId} ), ids )
);







//----------------contacts Api-------------------

const contactsApiCallGet = apiCallGET('contacts');

const contacstApiCall = apiCallPOST('contacts')

const listContactsFromApi = decorate(
  contactsApiCallGet,
  list,

  ()  => null
);


const getContactFromApi = decorate(
  contacstApiCall,
  list,

  (contactId)  => ( {contact_id:contactId  }   )
);





//----------------messaging Api-------------------
const messagingApiCall = apiCallPOST('messaging');

const listChannelsFromApi = decorate(
  messagingApiCall,
  list,

  () => null
);


const getChannelContentFromApi = decorate(
  messagingApiCall,
  list,

  (channel, limit) => ( limit ? { channel, limit  } : {channel}  )
);


const getChannelContentFromChannelMessageApi = decorate(
  messagingApiCall,
  list,

  (channel, message_id, plus , minus) => {

    console.log({
      channel,
      message_id,
      plus,
      minus
    })



    return {
      channel,
      message_id,
      plus,
      minus
    };

  }
);



const addMessageInApi = decorate(
  messagingApiCall,
  add,

  (content, channel, type = 'txt') => ( {content, channel, type}   )
);



const getChannelFromParticipantsInApi = decorate(
  messagingApiCall,
  endUrl('getchannel'),

  partcipantsIds => ( {participants:partcipantsIds}   )
);



const addChannelInApi = decorate(
  messagingApiCall,
  endUrl('newchannel'),

  (participants, name) => ( {participants, name}   )
);


const searchMessagesInApi = decorate(
  messagingApiCall,
  endUrl('search'),

  inputText => ( { value:inputText }   )
);




//this entire api functions are only for the backend privileges, except listDocumentsFromApi
//----------------documents Api-------------------
const documentsApiCall = apiCallPOST('docs');

const listDocumentsFromApi = decorate(
  documentsApiCall,
  list,

  parentId => ( {  parent_id: parentId, service: 'gdrive' }  )
);


const renameDocumentsInApi = decorate(
  documentsApiCall,
  rename,

  (id, name) => ( {  id, name, service: 'gdrive' } )
);




const deleteDocumentsInApi = decorate(
  documentsApiCall,
  endUrlDelete,

  ( ids ) => {


    return {  ids: {'placeholder': ids[0]},  service: 'gdrive' }
  }
);



//this entire api functions are only for the backend privileges, except listAppsFromApi
//----------------apps Api-------------------
const appsApiCall = apiCallPOST('apps');

const listAppsFromApi = decorate(
  appsApiCall,
  list,

  parentId => ( {  parent_id: parentId } )
);


const addAppsInApi = decorate(
  documentsApiCall,
  add,

  (name, parentId, data) => {
    return {
      name,
      parent_id: parentId,
      type: 'app',
      data
    };
  }
);


const addAppFolderInApi = decorate(
  documentsApiCall,
  add,

  (name, parentId, data) => {
    return {
      name,
      parent_id: parentId,
      type: 'folder',
      data
    };
  }
);




const deleteAppsInApi = decorate(
  documentsApiCall,
  endUrlDelete,

  ids => ( {apps: ids}  )
);


const editAppInApi = decorate(
  documentsApiCall,
  edit,

  (id, changeObj) =>  R.merge( {id}, changeObj   )
);




const duplicateAppsInApi = decorate(
  documentsApiCall,
  edit,

  (toParentId, ids) => R.merge( {apps: ids}, { to_parent: toParentId }  )
);



//----------------users Api-------------------
const usersApiCall = apiCallPOST('users');

const fetchTokenFromApi = decorate(
  apiCallPostWithoutToken('users'),
  endUrl('token'),

  (username, password) => ( {  username, password } )
);



const editUserInApi = decorate(
  usersApiCall,
  edit,

  userData => userData
);


const listUsersInApi = decorate(
  usersApiCall,
  list,

  () => {}
);




export default  {
  appsApi: {
    duplicateAppsInApi,
    editAppInApi,
    deleteAppsInApi,
    addAppFolderInApi,
    addAppsInApi,
    listAppsFromApi,
  },
  documentsApi: {
    listDocumentsFromApi,
    renameDocumentsInApi,
    deleteDocumentsInApi,
  },
  contentsApi: {
    getAddapsContents,
    getMyContents,
    renameContentInApi,
    deleteContentInApi,
    addContentFolderInApi,
    duplicateContentInApi,
    duplicateAppIntoContentInApi,
    editParentContentInApi,
    editContentInApi
  },
  boardsApi: {
    getAddapsBoardsFromApi,
    getMyBoardsFromApi,
    renameBoardInApi,
    deleteBoardInApi,
    addBoardFolderInApi,
    duplicateBoardInApi,
    editBoardInApi,
    editParentBoardInApi,
    saveBoardInApi
  },
  contactsApi: {
    listContactsFromApi,
    getContactFromApi
  },
  messagesApi: {
    listChannelsFromApi,
    getChannelContentFromApi,
    addMessageInApi,
    getChannelFromParticipantsInApi,
    getChannelContentFromChannelMessageApi,
    addChannelInApi,
    searchMessagesInApi,
  },
  usersApi: {
    fetchTokenFromApi,
    editUserInApi,
    listUsersInApi
  }

};
