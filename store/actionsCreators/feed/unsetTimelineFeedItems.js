'use strict';

const UNSET_TIMELINE_FEED_ITEMS = 'UNSET_TIMELINE_FEED_ITEMS';

const unsetTimelineFeedItems = feedItems => {

  return {
    type: UNSET_TIMELINE_FEED_ITEMS,
  }

};


export {UNSET_TIMELINE_FEED_ITEMS , unsetTimelineFeedItems};
