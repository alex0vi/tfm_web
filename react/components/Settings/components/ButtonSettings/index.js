'use strict';

let ReactDOM = require('react-dom');

import React, {PureComponent}       from 'react';
import {Provider}                   from 'react-redux'
import {connect}                    from 'react-redux';
import R                            from 'ramda';
import Radium                       from 'radium';
import PropTypes                    from 'prop-types';
import Select                       from 'react-select';
import addapsMedia                  from '@addaps/addaps_media';

import CONSTANTS                    from '../../../../globals/constants.js';


const basePath      = window.location.href.split( '/' ).slice( 0, -2 ).join( '/' );

@Radium
class ButtonSettings extends PureComponent {

    constructor(props){
        super(props)

        this.renderLoader = this.renderLoader.bind(this);
    }


    render(){
        let { buttonStyles, name, onClickButton } = this.props;
        return (
            <div
                className={'buttonSettingsContainer'}
                style   = { [ buttonStyles, { opacity: this.props.disable ? 0.1 : 1, cursor: this.props.disable ? 'default' : 'pointer'}] }
                onClick = { () => this.props.disable ? {} : onClickButton() }
            >
                { this.props.updateReady ?  null : this.renderLoader() }
                { name }
            </div>
        );
    }

    renderLoader(){
        return(
            <img
                className={'loaderButtonSettings'}
                src = {addapsMedia.getImagePath(basePath, 'LOADERS', 'LOADER_DUAL_RING')}
            />
        )
    }

}

ButtonSettings.defaultProps =  {
    buttonStyles:   {},
    name:           '',
    onClickButton:  () => { console.log('click button') },
    disable:        false,
    // updateReady:    false,
};

ButtonSettings.propTypes = {
    buttonStyles:   PropTypes.object,
    name:           PropTypes.string,
    onClickButton:  PropTypes.func,
    disable:        PropTypes.bool,
    updateReady:    PropTypes.bool,
};


export default ButtonSettings;
