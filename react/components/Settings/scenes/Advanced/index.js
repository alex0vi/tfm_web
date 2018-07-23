'use strict';

let ReactDOM = require('react-dom');

import React, {PureComponent}       from 'react';
import {Provider}                   from 'react-redux'
import {connect}                    from 'react-redux';
import Radium                       from 'radium';

import {cleanAllFolders}            from './services/';

import {COLORS}                       from '../../../../globals/colors.js';

import ButtonSettings               from '../../components/ButtonSettings';
const {cleanUrlPermissionsList}     = require('../../../../../js/devel/modules-system/module-custom-electron-settings');

@Radium
class Advanced extends PureComponent {

    constructor(props){
        super(props);

        this.state = {
            updateReady: true,
        };

        this.cleanAllFoldersHandler = this.cleanAllFoldersHandler.bind(this);
    }


    render(){

        return(
            <div className={'settingsContainerAdvanced'}>
                <div className={'contentWrapper'}>

                    { /* Section Storage */ }
                    <div className={'section'}>

                        <span className={'sectionTitle'}>Permissions</span>

                        <div className={'sectionBody'}>
                            <ButtonSettings
                                onClickButton   = { () => cleanUrlPermissionsList() }
                                name            = { 'Delete user browsing permissions' }
                                buttonStyles    = {{ height: 45, marginLeft: 15, marginRight: 15, flex: 1}}
                                updateReady     = {this.state.updateReady}
                            />
                        </div>


                        <span className={'sectionTitle'}>Storage</span>

                        <div className={'sectionBody'}>
                            <ButtonSettings
                                onClickButton   = { () => this.cleanAllFoldersHandler() }
                                name            = { 'Delete local content' }
                                buttonStyles    = {{ height: 45, marginLeft: 15, marginRight: 15, flex: 1}}
                                updateReady     = {this.state.updateReady}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    cleanAllFoldersHandler(){
        this.setState({updateReady: false});
        cleanAllFolders().then((res) => {
            setTimeout(() => {
                this.setState({
                    updateReady: true
                })
            }, 500);
        })
    }


}

export default Advanced;
