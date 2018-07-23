'use strict';

const api                           =   require('../../../../../app/js/devel/modules-system/api-calls').apiv2;

import R                            from 'ramda';
import moment                       from 'moment';

import store                        from '../../../../store';

import {setActiveChannel}           from '../../../../store/actionsCreators/communication/setActiveChannel';
import {setStatus}                  from '../../../../store/actionsCreators/communication/setStatus';

import { getNsMessages}             from '../../../services/RealTime/';


let currentRoom = null;

// const getTime = R.pipe(
//     R.split('T'),
//     R.last,
//     R.splitAt(5),
//     R.head,
// )


const getTime = (dateStr) => {
    let date = moment(dateStr, moment.ISO_8601);
    return `${ date.format('HH')}:${date.format('mm')}`
    // return date.format('hh:mm a');
}


/**
 * Return Times in the correct format
 */
const getHour = (dateStr) => {
    return moment(dateStr, moment.ISO_8601).format('HH:mm')
}

const getWeekDay = (dateStr) => {
    return moment(dateStr, moment.ISO_8601).format('dddd')
}

const getShortDate = (dateStr) => {
    return moment(dateStr, moment.ISO_8601).format('d[/]MM[/]YYYY')
}

/**
 * Calculate when something happened
 */
const isToday = (dateStr) => {
    return moment(dateStr, moment.ISO_8601).isSame(moment().startOf('day', 'd'), 'day');
}

const isWithinAWeek = (dateStr) => {
    return moment(dateStr, moment.ISO_8601).isAfter(moment().subtract(7, 'd').startOf('day'));
}

const convertTime = (dateStr) => {
    if(isToday(dateStr))            return getHour(dateStr);
    else if(isWithinAWeek(dateStr)) return getWeekDay(dateStr);
    else                            return getShortDate(dateStr);
}


const sortByDate = (a, b) => {
    // let timeA = R.path('item', 'lastMessage', 'insertedAt');
    // let timeB = R.path('item', 'lastMessage', 'insertedAt');
    if(R.isNil(a.item.lastMessage)) return false;
    if(R.isNil(b.item.lastMessage)) return true;

    return moment(a.item.lastMessage.insertedAt, moment.ISO_8601).isAfter(moment(b.item.lastMessage.insertedAt, moment.ISO_8601));
};

const orderChannelsByDate = channels => {
    let orderedChannels = R.sort( sortByDate, channels);
    let orderedChannelsReverse = R.reverse(orderedChannels);
    return orderedChannelsReverse;
}

const sortFuncByName = R.pipe(
    R.prop('firstName'),
    R.toLower,
)

const getUserLetter = R.pipe(
   R.prop('firstName'),
   R.head,
   R.toUpper
)

const reduceFn = (usersByLetter, u) => {

    let userLetter = getUserLetter( u );
    const overLetter = userContainer => {

    let defaulUserContainer = {
        users: [],
        letter: userLetter
    }

    userContainer = R.defaultTo(defaulUserContainer, userContainer)

    const go = R.pipe(
        R.set( R.lensProp('letter'), defaulUserContainer.letter ),
        R.over( R.lensProp('users'), R.append(u) )
    )

    return go(userContainer)
  }

  const go = R.pipe(
      R.over( R.lensProp(userLetter), overLetter )
  )

  return go(usersByLetter)
}


const usersContainerByInitial = R.reduce( reduceFn, [] )
const sortByDifference = R.sort( R.difference );
const alphabeticalSort = R.sortBy( sortFuncByName );

const getUsersContainerSortedByLetter = R.pipe(
    alphabeticalSort,
    usersContainerByInitial,
    R.chain( R.props, R.o( sortByDifference, R.keys ) )
)


const openChannelFromNotification = (channelId) => {
    api.get(`user/channels/${channelId}`)
        .then((channel) => {
            onSwitchChannel(channel, channelId)
        })
}

const openNewChannel = (item, currentChannelId, history) => {

    return api.put(`user/channelsByContact/${item.id}`)
        .then((channelId) => {
            return api.get(`user/channels/${channelId}`)
        })
        .then((channel) => {
            let room = onSwitchChannel(channel, currentChannelId)
            let result = {room: room, channel: channel}
            return result;
        })
}

const openNewGroupChannel = (newGroup, currentChannelId, history) => {

    return api.post('user/channels', newGroup)
        .then((channelId) => {
            return api.get(`user/channels/${channelId}`)
        })
        .then((channel) => {
            let room = onSwitchChannel(channel, currentChannelId)
            let result = {room: room, channel: channel}
            return result;
        })
}

const leaveChannel = (roomId) => {
    getNsMessages().leaveRoom(roomId)
}

const onSwitchChannel = (channel, currentRoomId) => {
    let channelItem = channel.item;
    let channelId   = channel.item.id;

    if(!R.isNil(currentRoomId)){
        leaveChannel(currentRoomId)
    }

    api.put(`user/channels/${channelId}/read`); // mark channel as read

    const room = getNsMessages().joinRoom( channelId )

    setCurrentRoom(room);

    let users = channel.type === 'CONTACT' ? [channelItem.user] : channelItem.users;
    let label = channel.type === 'CONTACT' ? null               : channelItem.label;

    store.dispatch(setActiveChannel(channel.type, channel.item, label));
    store.dispatch(setStatus('CHAT'));

    return room;
}


const setCurrentRoom = (room) => {
    currentRoom = room;
}

export default {
    getUsersContainerSortedByLetter,
    openNewChannel,
    openNewGroupChannel,
    openChannelFromNotification,
    onSwitchChannel,
    getCurrentRoom: () => currentRoom,
    getTime,
    convertTime,
    orderChannelsByDate,
    leaveChannel
}
