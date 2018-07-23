'use strict';

let ReactDOM                    = require('react-dom');

import React, { PureComponent } from 'react';
import _                        from 'lodash';
import R                        from 'ramda';
import Radium                   from 'radium';
import autobind                 from 'autobind-decorator';

import {COLORS}                   from '../../../../../../../../globals/colors.js';
import CONSTANTS                from '../../../../../../../../globals/constants.js';


let styles = {
  button: {
    display: 'flex',
    height: 27,
    borderWidth: 1,
    borderRadius: 4,
    outline: 'none',
    width: 80,
    justifyContent: 'center',
    marginRight: 15,
    color: 'white',
    fontSize: 14,
  },
}


@Radium
class RequestButton extends PureComponent {

    constructor(props){
      super(props);
    }

   render() {
        let buttonBackgroundColor = this.props.isPrimaryButton ? COLORS.primary : '#979797'
        let borderColor = this.props.isPrimaryButton ? COLORS.primary : '#979797'
        return (
            <button
                className = {'requestButton'}
                style = {[styles.button, {backgroundColor: buttonBackgroundColor, borderColor: borderColor}, this.props.styleButton]}
                onClick={ (id) => this.props.funcClick(id) }
            >
                {this.props.text}
            </button>
        );
   }
}

export default RequestButton;
