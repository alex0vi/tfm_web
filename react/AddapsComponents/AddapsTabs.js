'use strict'

import React, {PureComponent}       from 'react';
import R                            from 'ramda';
import {connect}                    from 'react-redux';
import {bindActionCreators}         from 'redux';
import Radium                       from 'radium';
import autobind                     from 'autobind-decorator';


const api           =   require('../../../app/js/devel/modules-system/api-calls').apiv2;
const ANALYTICS     =   require('../../../app/js/devel/modules-system/module-analytics');

import {COLORS}                       from '../globals/colors.js';
import CONSTANTS                    from '../globals/constants.js';


let styles = {
    containerTabs:{
        display: 'flex',
    },
    tabItem:{
        color: '#d2d2d2',
        margin: '5px 10px 5px 10px',
        cursor: 'pointer',
    }

}


// @autobind
@Radium
class AddapsTabs extends PureComponent {

    constructor(props) {
        super(props);

    }


    getInformationByType(type){
        return R.cond([
                    [ R.equals('SOCIAL_TABS'),       R.always({funcRender: (tab,i) => this.renderSocialTabs(tab,i)})],
                    [ R.T,                           R.always({funcRender: () => this.renderSocialTabs})],
        ])(type);
    }

    render(){
        let item = this.getInformationByType(this.props.type)
        return(
            <div
                style={styles.containerTabs}
            >
                {R.addIndex(R.map)((tab,i)=>item.funcRender(tab, i) ,this.props.tabs)}
            </div>

        )
    }

    renderSocialTabs(tab, i){
        let auxStyleTab;
        let auxStyleMinimized;
        let auxStyleEmptyTab;
        if(tab.tabValue === this.props.value){
            auxStyleTab={
                color: COLORS.primary,
                borderBottomColor: COLORS.primary
            }
        }
        if(this.props.isMinimizedStyle){
            auxStyleMinimized={
                width:' 50%',
                justifyContent: 'center',
                display: 'flex',
                margin: '5px 0px 5px 0px',
                borderBottom: '1px solid #d2d2d2',
            }
        }

        if(R.isEmpty(tab.tabValue)){
            auxStyleEmptyTab={
                display: 'none',
            }
        }


        return(
            <div
                key={i}
                style={[styles.tabItem,auxStyleMinimized, auxStyleTab, auxStyleEmptyTab]}
                onClick = {()=>this.props.changeActiveTab(tab)}
            >
                {tab.tabValue}
            </div>
        )
    }


}


export default AddapsTabs;
