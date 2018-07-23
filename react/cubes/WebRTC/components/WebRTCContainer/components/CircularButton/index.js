// 'use strict';

import React, { PureComponent } from 'react';

let ReactDOM                    = require('react-dom');
let Radium = require('radium');


let styles = {
    container: {
        display: 'flex',
        backgroundColor: 'white',
        borderRadius: '50%',
        padding: '10px',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        margin: '0 5px'
    },
    icon: {
        position: 'relative',
    }
}


class CircularButton extends PureComponent {

    constructor(props) {
      super(props);
    }


   render() {

       let {type, icon, isInverted, onClick} = this.props;

        return (

            <div
                className   = { 'element-with-interaction' }
                style       = {[styles.container, {backgroundColor: isInverted ? '#F44336' : '#ffffff'}]}
                onClick     = {onClick}
            >
                <i style={[styles.icon, {color: isInverted ? '#ffffff' : '#F44336' }]} className="material-icons">{icon}</i>
            </div>
        );
   }
}

export default Radium(CircularButton);
