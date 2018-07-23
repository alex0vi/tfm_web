'use strict';

let ReactDOM = require('react-dom');

import React, {PureComponent}       from 'react';
import {Provider}                   from 'react-redux'
import R                            from 'ramda';
import Radium                       from 'radium';
import PropTypes                    from 'prop-types';

import {COLORS}                       from '../../../../globals/colors.js';

@Radium
class SideBarItem extends PureComponent {

    constructor(props){
        super(props)
    }

    render(){
        let { isActiveTab, onClickTab, item } = this.props;

        return (
            <div
                className = {'sideBarItem'}
                style   = {{ backgroundColor: isActiveTab ? COLORS.primary : '#ffffff' }}
                onClick = { () => onClickTab() }
            >
                <span style={{ color: isActiveTab ? '#ffffff' : '#000000'}}>
                    { item.tabValue }
                </span>
            </div>
        );
    }
}

SideBarItem.childContextTypes = {
    onClickTab  :    PropTypes.func,
    isActiveTab :    PropTypes.bool,
}

export default SideBarItem;
