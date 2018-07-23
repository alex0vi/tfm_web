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
        height: 30,
        display: 'flex',
        alignItems: 'center'
    }
}

// @autobind
@Radium
class ListOfEmotions extends Component{

    constructor(props){
        super(props);
    }



    render(){
        let {i, emotion} = this.props;

        return(
            <div
                key = {i}
                style={styles.container}
            >
                <img style ={{width: 20, height: 20, margin: 5}} src={emotion.url}/>
                <div style ={{ fontSize: 13, margin: 5, position:'relative', top: 2 }} >{emotion.text} :</div>
                <div style ={{ fontSize: 13, position:'relative', top: 2 }} >{this.getNumberOfEmotion(emotion.text)}</div>
            </div>
        )
    }

    getNumberOfEmotion(type){
        let adaptedName =  `${ R.toLower(type)}Emotions`;
        return this.props.content.emotions[adaptedName]
    }

}

export default ListOfEmotions;
