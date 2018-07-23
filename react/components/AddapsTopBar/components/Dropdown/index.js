'use strict';

let ReactDOM = require('react-dom');

import R                        from 'ramda';
import React, {PureComponent}   from 'react';
import PropTypes                from 'prop-types';
import {connect}                from 'react-redux';
import {bindActionCreators}     from 'redux';

import Radium                   from 'radium';
import autobind                 from 'autobind-decorator';
import {initBodyClick}          from './utils.js';
import {verifyNodeClassClicked} from './utils.js';
import {verifyNodeIdClicked}    from './utils.js';

const _debounce                 = require('lodash.debounce');
const _throttle                 = require('lodash.throttle');
const {getBodyClickNode}        = require('../../../../../js/devel/modules-system/module-user-settings')

initBodyClick();


const mapStateToProps = (state, ownProps) => {
    return {
        bodyClickNode: state.boardReducer.bodyClickNode
    }
};


@connect(mapStateToProps, null)
@Radium
class Dropdown extends PureComponent {

    constructor(props) {
        super(props);
        // this.shouldComponentUpdate     = this.shouldComponentUpdate.bind(this);
        // this.componentWillReceiveProps     = _throttle(this.componentWillReceiveProps, 1000, {leading:true, trailing:false});
    }

    componentWillReceiveProps(nextProps){
        if(!verifyNodeClassClicked(nextProps.bodyClickNode, "top-bar-dropdown-wrapper") && !verifyNodeIdClicked(nextProps.bodyClickNode, this.props.dropdownButtonId)){ // if the same dropdown is opened, we dont do any action
            this.props.onClose();
        }
    }

    componentWillMount(){

    }

    render() {
        // if(!this.props.visible) return null;

        let { children, onClose } = this.props;

        // create children with the parent props
        let childrenWithProps = React.Children.map(children, child => React.cloneElement(child, { onClose: onClose }));

        return (
            <div className={`top-bar-dropdown-wrapper ${this.props.classDropDown}`}>
                <div className={`top-bar-dropdown`}>

                    <div className="pd-top-bocadillo-triangle" />

                    { childrenWithProps }

                </div>
            </div>
        );
    }
}


Dropdown.defaultProps =  {
    elementId:      '',
    classDropDown:  '',
    visible:        false,
    onClose:        () => {},
    dropdownIsOpen:        () => false,
    dropdownButtonId: null,
};

Dropdown.propTypes = {
    elementId:      PropTypes.string,
    classDropDown:  PropTypes.string,
    visible:        PropTypes.bool,
    onClose:        PropTypes.func,
    dropdownIsOpen:        PropTypes.func,
    dropdownButtonId: PropTypes.string,
};

export default Dropdown;
