'use strict';

const UNSET_NEWS_FEED_ITEMS = 'UNSET_NEWS_FEED_ITEMS';

const unsetNewsFeedItems = feedItems => {

  return {
    type: UNSET_NEWS_FEED_ITEMS,
  }

};


export {UNSET_NEWS_FEED_ITEMS , unsetNewsFeedItems};
