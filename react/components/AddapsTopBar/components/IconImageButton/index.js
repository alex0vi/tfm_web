'use strict';

let ReactDOM = require('react-dom');

import R                        from 'ramda';
import React, {PureComponent}   from 'react';
import PropTypes                from 'prop-types';
import {connect}                from 'react-redux';
import {bindActionCreators}     from 'redux';
import {TransitionGroup}        from 'react-transition-group'
import Radium                   from 'radium';
import autobind                 from 'autobind-decorator';
const _debounce                 = require('lodash.debounce');
const _throttle                 = require('lodash.throttle');


@connect(null, null)
@Radium
class IconImageButton extends PureComponent {

    constructor(props) {
        super(props);
        this.myClickIcon    = this.myClickIcon.bind(this);
    }

    myClickIcon(e){
        return this.props.onClickIcon();
    }

    render() {

        let {
            id,
            classNames,
            onClickIcon,
            renderDropDown,
            iconName,
            classNameIcon,
            title,
            styles,
            isImage,
            hasTriangle,
            imageId,
            imageUrl
        } = this.props;

        return (
            <div
                className   = { classNames }
                id          = { id }
            >
                <div
                    className   = { classNameIcon }
                    title       = { title }
                    // onClick     = { this.myClickIcon }
                    onMouseDown = { this.myClickIcon }
                >
                    {
                        isImage ?
                            <img id={imageId} style={ styles } src={ imageUrl}/>
                        :
                            <i className = { `icon ${iconName}` } style={ styles } />
                    }


                </div>

                {
                    hasTriangle ? <div className="triangle-down-top-menu" /> : null
                }
                <TransitionGroup className='dropdown-animation'>
                    { this.props.renderDropDown }
                </TransitionGroup>

            </div>
        );
    }

}


IconImageButton.defaultProps =  {
    classNames:     '',
    id:             '',
    onClickIcon:    () => {},
    renderDropDown: null,
    iconName:       '',
    title:          '',
    isImage:        false,
    hasTriangle:    false,
    imageId:        '',
    imageUrl:       '',
};

IconImageButton.propTypes = {
    classNames:         PropTypes.string,
    id:                 PropTypes.string,
    onClickIcon:        PropTypes.func,
    renderDropDown:     PropTypes.node,
    iconName:           PropTypes.string,
    title:              PropTypes.string,
    isImage:            PropTypes.bool,
    hasTriangle:        PropTypes.bool,
    imageId:            PropTypes.string,
    imageUrl:           PropTypes.string,
};

export default IconImageButton;
