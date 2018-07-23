'use strict';

const SET_TIMELINE_FEED_ITEMS = 'SET_TIMELINE_FEED_ITEMS';

const setTimelineFeedItems = (feedItems, position) => {

  return {
    type: SET_TIMELINE_FEED_ITEMS,
    payload: {
      feedItems,
      position
    },
  }


};


export {SET_TIMELINE_FEED_ITEMS , setTimelineFeedItems};
