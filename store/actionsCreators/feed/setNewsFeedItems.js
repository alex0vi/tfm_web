'use strict';

const SET_NEWS_FEED_ITEMS = 'SET_NEWS_FEED_ITEMS';

const setNewsFeedItems = (feedItems, position) => {

  return {
    type: SET_NEWS_FEED_ITEMS,
    payload: {
      feedItems,
      position
    },
  }

};


export {SET_NEWS_FEED_ITEMS , setNewsFeedItems};
