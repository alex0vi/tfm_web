'use strict';

let ReactDOM = require('react-dom');

import React, {PureComponent}       from 'react';
import R                            from 'ramda';
import Radium                       from 'radium';
// import {connect}                    from 'react-redux';



const styles = {
    container: {
        margin: '20px 10px',
        left: 0,
        right: 0,
    },
}


// const mapStateToProps = (state, ownProps) => {
//     let { users } =  state.communication.activeChannel.channel;
//     return {
//         users  :  users,
//     }
// }

// @connect(mapStateToProps, null)
@Radium
class Settings extends PureComponent {

    constructor(props){
        super(props);
    }

    render(){

        return (
            <div style={styles.container}>
            </div>
        );
    }
}

export default Settings;
