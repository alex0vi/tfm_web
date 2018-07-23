'use strict'

import React, { Component } from 'react'

let ReactRedux = require('react-redux');

let actions = require('./actionCreators/switch');

import Translations from './components/Translations'

import TopBar from './components/TopBar'

import HomeScene from './scenes/Home'

require('./stylesheets/main.scss')

class App extends Component {


  constructor(props) {
      super(props);
  }

  render(){
      const content = this.props.content;
      const switchLanguage = this.props.switchLanguage;

      return(
          <div>
              <TopBar data={ content.page.topBar } switchLanguage={ switchLanguage } />
              <HomeScene data={ content.page.home } buttons={ content.page.buttons }/>
          </div>
      )
  }
}

export default ReactRedux.connect((state) => ({content: state.content}), (dispatch) => ({
    switchLanguage: (lang) => dispatch(actions.switchLanguage(lang))
}))(App);;
