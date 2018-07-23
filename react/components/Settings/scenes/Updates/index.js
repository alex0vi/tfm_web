'use strict';

let ReactDOM            = require('react-dom');
const {ipcRenderer}     = require('electron');
import React, {PureComponent}       from 'react';

import ButtonSettings               from '../../components/ButtonSettings';
const appVersion  = require('../../../../../../package.json').version;

class Updates extends PureComponent {

    constructor(props){
        super(props)

        this.state = {
            updateReady: true,
        }

        this.checkForUpdates = this.checkForUpdates.bind(this);
    }

    render() {
        return(
            <div className={'settingsContainerUpdates'}>
                <div className={'contentWrapper'}>
                    { /* Section Version */ }
                    <div className={'section'}>
                        <span className={'sectionTitle'}>Version</span>
                        <div className={'sectionBody'}>
                            <div>
                                <span>Addap's version: </span>
                                <span>{appVersion}</span>
                            </div>
                            <ButtonSettings
                                onClickButton   = { () => this.checkForUpdates() }
                                name            = { 'Check for updates' }
                                buttonStyles    = {{ height: 45, marginLeft: 15, marginRight: 15, flex: 1}}
                                updateReady     = {this.state.updateReady}
                                disable         = {true }
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    checkForUpdates() {
        // console.log(ipcRenderer.sendSync('checkForUpdates', 'ping')) // prints "pong"
        //
        // console.log('checkForUpdates idnex')
        //
        // ipcRenderer.on('checkForUpdates', (event, arg) => {
        //     console.log('arg', arg) // prints "pong"
        // })
    }
}

export default Updates;
