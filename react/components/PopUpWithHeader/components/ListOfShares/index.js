'use strict';

import R                                        from 'ramda';
import React, { Component }                     from 'react';
import _                                        from 'lodash';
import autobind                                 from 'autobind-decorator';
import Radium                                   from 'radium';

import {COLORS}                                   from '../../../../globals/colors.js';


const styles = {
    container: {
        width: '100%',
        alignItems: 'center'
    }
}

// @autobind
@Radium
class ListOfShares extends Component{

    constructor(props){
        super(props);
    }



    render() {

        return(
            <div style={ styles.container}>
                <div style ={{ fontSize: 17, margin: 5,width: '100%'}} >{`${this.props.content} people`}</div>
                <div style ={{ fontSize: 13, margin: 5, width: '100%'}} > Sorry this content is not available right now</div>
            </div>
        )
    }
}

export default ListOfShares;
