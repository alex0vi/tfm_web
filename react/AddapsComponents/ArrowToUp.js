'use strict'

import React, {PureComponent}       from 'react';
import R                            from 'ramda';
import {bindActionCreators}         from 'redux';
import Radium                       from 'radium';
import autobind                     from 'autobind-decorator';

import {COLORS}                       from '../globals/colors.js';
import CONSTANTS                    from '../globals/constants.js';

let styles = {
    arrowToGoUpStyle: {
        width: 30,
        height: 30,
        position: 'absolute',
        zIndex: 1,
        border: `2px solid ${COLORS.primary}`,
        color: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        display: 'flex',
        cursor: 'pointer'
    },
};

@Radium
class ArrowToUp extends PureComponent {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div style ={[styles.arrowToGoUpStyle, this.props.styleArrow]}>
                <i
                    className="material-icons"
                    onClick={()=>this.props.funcClick()}
                >
                    {CONSTANTS.ICONS.UPWARD_ARROW}
                </i>
            </div>
        )
    }
}

export default ArrowToUp;
