'use strict';

let ReactDOM = require('react-dom');


import React, {PureComponent}       from 'react';
import {Provider}                   from 'react-redux'
import {connect}                    from 'react-redux';
import R                            from 'ramda';
import Radium                       from 'radium';
import PropTypes                    from 'prop-types';
import Select                       from 'react-select';


import {COLORS}                       from '../../../../../../globals/colors.js';
import CONSTANTS                    from '../../../../../../globals/constants.js';

const styles = {
    conatainer: {
        height: '60px',
        position: 'relative',
        width: '100%',
    },
    title:{
        width: '100%',
        color: '#9E9E9E',
    },
    input:{
        width: '100%',
        top: '30px',
        border: 'none',
    },
}



@Radium
class SelectWithWrapper extends PureComponent {

    constructor(props){
        super(props)

        this.renderSelectInput = this.renderSelectInput.bind(this);
    }


    render(){
        let { style } = this.props;
        return (
            <div style = {[styles.conatainer, style]}>
                <span style = {styles.title}>{this.props.textTitle}</span>
                {this.renderSelectInput()}
            </div>
        );
    }


    renderSelectInput(){
        return(
            <div style = {{display: 'flex', width: '100%', height: 80}} >
                <Select
                  name="form-field-name"
                  wrapperStyle = {{width: 400, top: 30, position:'absolute'}}
                  value={this.props.value}
                  options={this.props.options}
                  resetValue = {this.props.resetValue}
                  onChange = {(val) => this.props.onChange(val)}
                  deleteRemoves = {false}
                  noResultsText = {this.props.noResultsText}
                  placeholder = {this.props.placeholder}
                />
            </div>
        )
    }
}

export default SelectWithWrapper;
