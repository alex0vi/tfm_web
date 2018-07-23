'use strict';

let ReactDOM = require('react-dom');

import React, {PureComponent}       from 'react';
import R                            from 'ramda';
import Radium                       from 'radium';
import {connect}                    from 'react-redux';

import {COLORS}                       from '../../../../../../../../globals/colors.js';
import {openCubeSocialProfileById}         from '../../../../../../../../../js/devel/entities/cubes/reactCubes/Functions/ReactToElectron.js';



const styles = {
    container: {
        margin: '20px 10px',
        left: 0,
        right: 0,
    },
    profileLink:{
        cursor:'pointer',
        fontSize: 14,
        color: COLORS.primary,
        textDecoration: 'underline',
    },
}


const mapStateToProps = (state, ownProps) => {
    return {
        activeUserid        :   state.communication.activeChannel.item.user.id,

    }
}


@connect(mapStateToProps, null)
@Radium
class ProfileInformation extends PureComponent {

    constructor(props){
        super(props);
    }

    render(){

        let {activeUserid} = this.props;
        return (
            <div style={styles.container}>
                <span
                    style       = {styles.profileLink}
                    onClick     = { () => openCubeSocialProfileById(activeUserid) }
                >
                    Visit this profile
                </span>
            </div>
        );
    }
}

export default ProfileInformation;
