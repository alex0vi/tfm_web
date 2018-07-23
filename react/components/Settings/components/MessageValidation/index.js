'use strict';

let ReactDOM = require('react-dom');

import React, {PureComponent}       from 'react';
import Radium                       from 'radium';
import R                            from 'ramda';
import PropTypes                    from 'prop-types';

import {VALIDATION_COLORS}          from '../../../../globals/colors.js';

@Radium
class MessageValidation extends PureComponent {

    constructor(props){
        super(props)
    }


    render() {
        let {text, type } = this.props;

        return(
            <div className={'containerMessageValidation'} style = {{ backgroundColor: VALIDATION_COLORS[type].backgroundColor }} >
                <div className={'iconContainer'} >
                    <i style = {{ color: VALIDATION_COLORS[type].textColor }} className="material-icons">{ VALIDATION_COLORS[type].icon }</i>
                </div>
                <span className={'messageText'} style = {{ color: VALIDATION_COLORS[type].textColor }} >{ text }</span>
            </div>
        )
    }
}

MessageValidation.defaultProps =  {
    text:        '',
    type:        'error',
};

MessageValidation.propTypes = {
    text:        PropTypes.string,
    type:        PropTypes.string,
};


export default MessageValidation;
