'use strict';

import React, { PureComponent } from 'react';

let ReactDOM                    = require('react-dom');

import PropTypes                from 'prop-types';
import Radium                   from 'radium';
import moment                   from 'moment';


let styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        position: 'absolute',
        opacity: 0.3,
        marginTop: '10px',

        ':hover': {
            opacity: 1
        }
    },
    text: {
        fontSize: '12px',
    }
}

@Radium
class Chronometer extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            start: 0,
            time: null,
        }

    }

    componentDidMount() {
        this.myInterval = setInterval( () => {

            let finalTime = moment.unix(this.state.start).format('mm:ss');

            this.setState({
                start: this.state.start+1,
                time: finalTime
            });

        }, 1000)
    }


    componentWillUnmount() {
        clearInterval(this.myInterval)
    }


    render() {

        return (

            <div style = {[styles.container]}>
                <span style = {[ styles.text, {color: this.props.cronometerColor} ]}>{this.state.time}</span>
            </div>
        );
    }
}





Chronometer.defaultProps =  {
    cronometerColor:    'white',
};

Chronometer.propTypes = {
    cronometerColor:   PropTypes.string,
};

export default Chronometer;
