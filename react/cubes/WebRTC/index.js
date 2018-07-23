'use strict';

let ReactDOM = require('react-dom');

import React, {PureComponent}       from 'react';
import {Provider}                   from 'react-redux'
import {connect}                    from 'react-redux';
import R                            from 'ramda';
import Radium                       from 'radium';
import AutoComplete                 from 'material-ui/AutoComplete';
import MuiThemeProvider             from 'material-ui/styles/MuiThemeProvider';


import {
  MemoryRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom';

import store                        from '../../../store';
import PropTypes                    from 'prop-types';


import AddapsText                   from '../../AddapsComponents/AddapsText';
import {COLORS}                     from '../../globals/colors.js';
import Loading                      from '../../components/Loading';


import WebRTCContainer              from './components/WebRTCContainer/';



const routingStyles = {
    container: {
        display:            'flex',
        position:           'absolute',
        flexDirection:      'column',
        width:              '100%',
        // height:             '100%',
        backgroundColor:    '#ffffff',
        top:                0,
        bottom:             0,
    },
}




@Radium
class WebRTCRouting extends PureComponent {
    constructor(props){
        super(props)

        // this.renderMenuItem     = this.renderMenuItem.bind(this);
    }


    componentWillMount() {

    }


    shouldComponentUpdate(nextProps, nextState) {

    }

    render(){

        return(
            <Provider store = {store}>
                <Router>
                    <div>

                        <div
                            className       = "cube-react-webrtc"
                            style           = { routingStyles.container }
                        >

                            <Route exact path="/" render={ (props) => <WebRTCContainer {...props} {...this.props} /> }   />

                        </div>
                    </div>
                </Router>
            </Provider>
        )
    }



}

export default WebRTCRouting;
