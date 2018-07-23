'use strict';

let ReactDOM = require('react-dom');

import R                        from 'ramda';
import React, {PureComponent}   from 'react';
import PropTypes                from 'prop-types';
import {connect}                from 'react-redux';
import {bindActionCreators}     from 'redux';

import Radium                   from 'radium';
import autobind                 from 'autobind-decorator';
const {CSSTransition, TransitionGroup} = require('react-transition-group'); // ES5 with npm



@connect(null, null)
@Radium
class FadeEffect extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <CSSTransition
                {...this.props}
                classNames="css-fade"
                timeout = {1000}
            >
                {this.props.children}
            </CSSTransition>
        );
    }

}

export default FadeEffect;



