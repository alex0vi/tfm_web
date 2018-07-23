'use strict';

import React, { Component } from 'react';

import R from 'ramda';


const domainURL = (url) => {
    let matches = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);

    return matches && matches[1];
};

const faviconURL = url => {

  if(R.contains('google', url)) { // temporal fix to show google icon instead the world icon
    url = 'https://www.gmail.com'
  }
  return `https://www.google.com/s2/favicons?domain=${ domainURL(url) }`;
}


export { faviconURL };
