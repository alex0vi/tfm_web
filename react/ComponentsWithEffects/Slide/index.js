'use strict';

let ReactDOM = require('react-dom');

import React, {PureComponent}           from 'react';
import { Transition, CSSTransition }    from 'react-transition-group';
import PropTypes                        from 'prop-types';




class Slide extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        let {duration, key, classNames } = this.props;

        return(

            <CSSTransition
                in              = { this.props.in}
                appear          = { true }
                timeout         = { {appear: duration, enter: duration, exit: duration}}
                classNames      = { `slide ${classNames}` }
                key             = { key }
                mountOnEnter    = { true }
                unmountOnExit   = { true }
            >
                {this.props.children}
            </CSSTransition>
        )
    }
}


Slide.defaultProps =  {
    classNames:     '',
    duration:       300,
};

Slide.propTypes = {
    classNames:     PropTypes.string,
    duration:       PropTypes.number,
};


export default Slide;
