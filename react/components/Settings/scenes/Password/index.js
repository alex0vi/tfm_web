'use strict';

let ReactDOM = require('react-dom');

import React, {PureComponent}       from 'react';
import {Provider}                   from 'react-redux'
import Radium                       from 'radium';
import R                            from 'ramda';


import CONSTANTS                    from '../../../../globals/constants.js'
import ButtonSettings               from '../../components/ButtonSettings';
import InputTextItem                from '../../components/InputTextItem';
import MessageValidation            from '../../components/MessageValidation';

const api                           =   require('../../../../../../app/js/devel/modules-system/api-calls').apiv2;

@Radium
class Password extends PureComponent {

    constructor(props){
        super(props)

        this.state = {
            ready:                  false,
            isEqual:                false,
            oldPassword:            '',
            newPassword:            '',
            confirmPassword:        '',
            showLoading:            false,
            validation:        {}
        };

        this.handleOldPassword                  = this.handleOldPassword.bind(this);
        this.handleChangeNewPassword            = this.handleChangeNewPassword.bind(this);
        this.handleChangeVerify                 = this.handleChangeVerify.bind(this);
        this.isStringEqual                      = this.isStringEqual.bind(this);
        this.handleSubmitNewPassword            = this.handleSubmitNewPassword.bind(this);
        this.closeValidationMessage            = this.closeValidationMessage.bind(this);
    }


    render() {
        let isButtonAble    = !R.isEmpty(this.state.oldPassword) && !R.isEmpty(this.state.newPassword) && this.state.isEqual;
        let showIcon        = !R.isEmpty(this.state.oldPassword) && !R.isEmpty(this.state.newPassword) && !R.isEmpty(this.state.confirmPassword);
        let icon            = this.state.isEqual ? 'check' : 'close';

        return(
            <div className={'settingsContainerPassword'}>
                <div className={'contentWrapper'}>

                    { /* Change password */ }
                    <div className={'section'}>

                        <span className={'sectionTitle'}>{CONSTANTS.SETTINGS.CHANGE_PASSWORD}</span>

                        <div className={'sectionBody'}>

                                        { /* Old password */ }
                                        <label className={'wrapperInput'} >
                                            Old password:
                                            <input className={'input'} type="password" value={this.state.oldPassword}  onChange={ (value) => this.handleOldPassword(value) }       />
                                        </label>

                                        { /* New password */ }
                                        <label className={'wrapperInput'}>
                                            New password:
                                            <input className={'input'} type="password" value={this.state.newPassword}  onChange={ (value) =>this.handleChangeNewPassword(value) }  />
                                        </label>

                                        { /* Confirm new password */ }
                                        <label className={'wrapperInput'}>
                                            Confirm new password:
                                            <input className={'input'} type="password" value={this.state.confirmPassword}  onChange={ (value) =>this.handleChangeVerify(value) }   />

                                            {
                                                showIcon ?
                                                    <i style = {{color: this.state.isEqual ? '#2ed865' : '#FF0000'}} className="material-icons icon">{icon}</i>
                                                :
                                                    null
                                            }
                                        </label>
                        </div>
                    </div>

                    {
                        !R.isEmpty(this.state.validation) ?
                        <div>
                            <MessageValidation
                                type            = { this.state.validation.type }
                                text            = { this.state.validation.message }
                            />
                        </div>
                        :
                        null
                    }

                    <div className={'buttonWrapper'}>
                        <ButtonSettings
                            onClickButton   = { () => this.handleSubmitNewPassword() }
                            name            = { 'UPDATE PASSWORD' }
                            buttonStyles    = { { height: 45, marginLeft: 15, marginRight: 15, flex: 1, marginBottom:4} }
                            updateReady     = { !this.state.showLoading }
                            disable         = { !isButtonAble }
                        />
                    </div>
                </div>
            </div>
        )
    }


    handleOldPassword(e) {
        this.setState({oldPassword: e.target.value})
    }

    handleChangeNewPassword(e) {
        this.setState({newPassword: e.target.value})
        this.isStringEqual(e.target.value,this.state.confirmPassword)
    }

    handleChangeVerify(e) {
        this.setState({confirmPassword: e.target.value})
        this.isStringEqual(this.state.newPassword, e.target.value)
    }

    isStringEqual(s1, s2) {
        if(s1===s2) this.setState({isEqual: true})
        else this.setState({isEqual: false})
    }

    handleSubmitNewPassword() {
        this.setState({showLoading: true})

        let body = {
            oldPassword: this.state.oldPassword,
            newPassword: this.state.newPassword
        };

        api.put('user/password', body)
            .then( data => {
                setTimeout(() => {
                    this.setState({
                        oldPassword:     '',
                        newPassword:     '',
                        confirmPassword: '',
                        showLoading:     false,
                        validation: {
                            message: 'Your password has changed successfully',
                            type: 'success',
                        },
                    })
                }, 500);

            })
            .catch( err => {
                setTimeout(() => {
                    this.setState({
                        showLoading: false,
                        validation: {
                            message: errorControl[err.data.code],
                            type: 'error',
                        },
                    })
                }, 500);
            })
    }


    closeValidationMessage() {
        this.setState({validation: {} })
    }
}


const errorControl = {
    NEW_PASSWORD_INCORRECT: 'New password is missing or it is not the same.',
    OLD_PASSWORD_INCORRECT: 'Your current password is missing or incorrect.'
}


export default Password;
