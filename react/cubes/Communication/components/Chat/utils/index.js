'use strict';

import R                            from 'ramda';
import moment                       from 'moment';
import u                            from 'updeep';

import {randomID}                   from '../../../../../utils/utils.js';
import store                        from '../../../../../../store';

import {setMessages}                from '../../../../../../store/actionsCreators/communication/setMessages';


const CHECK_STATUS = ['UNACTIVE', 'UNACCEPTED', 'BLOCKED'];


const sendNewMessageToContact = (channel, user, room, message) => {

    let check = R.contains(channel.status, CHECK_STATUS);

    room.emitNewMessage({
        type : message.type,
        item : message.item,
        meta : {
            'check': check,
        }
    })



    let newMessage = [{
        id: randomID(),
        insertedAt: moment().format(),
        item: {
            text: message.item
        },
        type: message.type,
        user: user
    }];

    store.dispatch(setMessages(newMessage, 'DOWN'))
}


const sendNewMessageToGroup = (channel, user, room, message) => {

    let check = R.contains(channel.status, CHECK_STATUS);

    room.emitNewMessage({
        type : message.type,
        item : message.item,
        meta : {
            'check': check,
        }
    })

    let newMessage = [{
        id: randomID(),
        insertedAt: moment().format(),
        item: {
            text: message.item
        },
        type: message.type,
        user: user
    }];

    store.dispatch(setMessages(newMessage, 'DOWN'))
}


const sendNewByType = (channel, user, room, type, text) => {

    let message = {
        type: 'TEXT',
        item: text
    }

    R.cond([
        [ R.equals('CONTACT'),           (type, status) => sendNewMessageToContact(channel, user, room, message, status) ],
        [ R.equals('GROUP'),             (type, status) => sendNewMessageToGroup(channel, user, room, message, status)   ],
        [ R.T,                           R.I                                                                    ],
    ])(type);
}


const reduceMessages = (messagesList, item) => {

    let dateMessage = moment(item.insertedAt, moment.ISO_8601).format('l');

    const overMessage = messageContainer => {

      let defaultMessagesConateiner = {
          meta:{
              day: null,
          },
          messages: [],
      }

      messageContainer = R.defaultTo(defaultMessagesConateiner, messageContainer)

      const go = R.pipe(
        R.set( R.lensProp('meta'), u({ day: dateMessage}, defaultMessagesConateiner.meta)),
        R.over(R.lensProp('messages'), R.append(item))
      )

      return go(messageContainer)
    }

    const go = R.pipe(
        R.over( R.lensProp(dateMessage), overMessage )
    )

    return go(messagesList)

}

const reduceListMessages = R.reduce( reduceMessages, [] )

const getMessagesByDate = R.pipe(
    reduceListMessages,
);

export default {
    sendNewByType,
    getMessagesByDate,
}
