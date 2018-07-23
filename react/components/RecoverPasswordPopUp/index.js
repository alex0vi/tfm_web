'use strict';

let ReactDOM = require('react-dom');

import R                        from 'ramda';
import {bindActionCreators}     from 'redux';
import autobind                 from 'autobind-decorator';
import React, {PureComponent}   from 'react';
import PropTypes                from 'prop-types';
import {connect}                from 'react-redux';
import Radium                   from 'radium';

const API                       = require("../../../js/devel/modules-system/api-calls");
const {T_}                      = require('../../../js/devel/modules-system/module-translation');
const {re_email}                = require("../../../js/devel/constants/regularExpressions.js");
const { KEY_ENTER }             = require("../../../js/devel/constants/keyboardKeys/constants.js");


const style = {
    popupBase: {

    },

    goBackButton: {
        zIndex: 100,
    },

    passwordTitleWrapper: {
        marginBottom: 0,
    },

    passwordTitle: {
        display:            "flex",
        justifyContent:     "center",
        alignItems:         "center",
        fontSize:           "32px"
    },

    passwordExplanation:{
        marginTop: 0,
    },

    darkBackground:{
        position:           "absolute",
        top:                "0px",
        bottom:             "0px",
        left:               "0px",
        right:              "0px",
        zIndex:             "1",
        display:            "flex",
        alignItems:         "center",
    },

    popupWrapper: {
        padding:            "20px",
        borderRadius:       "7px",
        width:              "500px",
        height:             "500px",
        position:           "relative",
        zIndex:             "20",
        display:            "flex",
        flexDirection:      "column",
        justifyContent:     "center"
    },

    recoverPassButton: {
        width: "100%",
    },

    recoverPassButtonGreyed:{
        width:              "100%",
        backgroundColor:    "#7b7b7b !important",
        color:              "#909090 !important",
        opacity:            "0.8",
    },

    closeButton:{
        position: "absolute",
        top: "10px",
        right: "10px",
    },

    inputField:{
        borderRadius: "4px",
        overflow: "hidden",
        marginBottom: "10px"
    }
};


const mapStateToProps = (state, ownProps) => {
    return {
        language: state.user.language, // todo; connects the info from redux to an specific value inside the element. Here we dont need notifications, however we might need language
    }
};

@connect(mapStateToProps, null)
@Radium
class RecoverPasswordPopUp extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            show: true,
            emailField: "",
            processFinished: false,
        };

        // binds the "this" to each of the object's functions
        this.handleRetypePassword   = this.handleRetypePassword.bind(this);
        this.handleKeypress         = this.handleKeypress.bind(this);
        this.sendRecoveryPass       = this.sendRecoveryPass.bind(this);
        this.renderResponseForm     = this.renderResponseForm.bind(this);
        this.renderRecoveryForm     = this.renderRecoveryForm.bind(this);
    }

    /**
     * updates the state of the value we have in the email field of the input
     * @param event
     */
    handleRetypePassword(event) {
        this.setState({emailField: event.target.value})
    }

    /**
     * checks if the key that the user has pressed was enter or not
     * @param event
     */
    handleKeypress(event) {
        let emailIsValid = validateEmail(this.state.emailField);
        console.log('do validate', { event, emailIsValid, theEmail: this.state.emailField, key: event.nativeEvent.key });
        if (event.nativeEvent.key === "Enter" && emailIsValid) {
            this.sendRecoveryPass();
        }else{
            console.log("no validation for email ", this.state.emailField)
        }
    }

    /**
     * get the email and send to the api the request to do the forget password
     */
    sendRecoveryPass() {
        let self = this;
        API.apiv2.post("forgotPassword", { email: this.state.emailField })
            .then(res => {
                console.log("res", res);
                self.setState({processFinished: true});
            });
    }


    /**
     * render everything
     * @returns {XML}
     */
    render(){
        let text = {
            LOGIN:              T_("LOGIN"),
            GO_BACK:            T_("Go Back to Login"),
        };


        console.log("processFinished?", this.state);
        return (
            <div className="popup-base" style={style.popupBase}>

                <div className="pre-login sign-up-login-buttons" style={ style.goBackButton }>
                    <div className="sign-up-login-group-set text-set">
                        <div className="">{ text.GO_BACK }</div>
                    </div>

                    <div className="sign-up-login-group-set switch-login-type">
                        <button className="sign-up-button login-button" onClick={ this.props.closeCallback }>{ text.LOGIN }
                        </button>
                    </div>
                </div>

                {
                    !this.state.processFinished ? this.renderRecoveryForm()
                                                : this.renderResponseForm()
                };
                <div className="dark-background login-background" style={style.darkBackground}
                     onClick={ this.props.closeCallback } />
            </div>
        )
    }

    /**
     * render the response. That is, the image that appears when someone has succesfully send the request to the api
     * @returns {XML}
     */
    renderResponseForm(){
        let text = {
            RESET_TITLE:   T_("reset password completed"),
            RESET_TEXT_1:  T_("An email has been sent to the following email "),
            RESET_TEXT_2:  T_("follow its instructions to reset your addaps account password"),
            GO_BACK:       T_("ok"),
        };

        return (
            <div className="popup-wrapper login-zone-block" style={style.popupWrapper}>
                <div className="login-line-center-text pre-login password-title-wrapper"
                     style={style.passwordTitleWrapper}>
                    <div className="line-span"/>
                    <div className="line-writing" style={style.passwordTitle}>{ text.RESET_TITLE }</div>
                    <div className="line-span"/>
                </div>

                <div className="login-line-center-text pre-login password-explanation"
                     style={style.passwordExplanation}>
                    <div className="line-writing">{ text.RESET_TEXT_1 } <b>{ this.state.emailField }</b> { text.RESET_TEXT_2 }</div>
                </div>

                <div className="button-set">
                    <button id="recover-pass-submit"
                            className="btn btn-default login-align login-button"
                            style={ style.recoverPassButton }
                            onClick={ this.props.closeCallback }>
                        {text.GO_BACK}
                    </button>
                </div>
            </div>
        )
    }

    /**
     * render the recovery form that appears when you click the "forgot password?" option
     * @returns {XML}
     */
    renderRecoveryForm() {
        let emailIsValid = validateEmail(this.state.emailField);
        let text = {
            PASS_TITLE:         T_("Password recovery"),
            PASS_HELP:          T_("Send an message to my email address"),
            EMAIL:              T_("Email"),
            RECOVER_PASSWORD:   T_("RECOVER PASSWORD"),
        };


        return (
            <div className="popup-wrapper login-zone-block" style={style.popupWrapper}>

                <div className="login-line-center-text pre-login password-title-wrapper"
                     style={style.passwordTitleWrapper}>
                    <div className="line-span"/>
                    <div className="line-writing" style={style.passwordTitle}>{ text.PASS_TITLE }</div>
                    <div className="line-span"/>
                </div>

                <div className="login-line-center-text pre-login password-explanation"
                     style={style.passwordExplanation}>
                    <div className="line-writing">{ text.PASS_HELP }</div>
                </div>

                <div className="form-set-white">
                    <div className="form-group addaps-form-group" style={style.inputField}>
                        <input type="text"
                               className="form-control"
                               id="login-login"
                               placeholder={ text.EMAIL }
                               value={this.state.emailField}
                               onChange={this.handleRetypePassword}
                               onKeyPress={this.handleKeypress}
                        />
                    </div>
                </div>

                <div className="button-set">
                    <button id="recover-pass-submit"
                            className={ "btn btn-default login-align login-button " + (emailIsValid ? null : "greyed-button") }
                            style={ emailIsValid ? style.recoverPassButton : style.recoverPassButtonGreyed }
                            onClick={ emailIsValid ? this.sendRecoveryPass : () => null}>
                        {text.RECOVER_PASSWORD}
                    </button>
                </div>
            </div>
        );
    }

}


const validateEmail = R.test(re_email);


RecoverPasswordPopUp.defaultProps =  {
    // notification props
    acceptCallback: () => alert("accept"),
    closeCallback:  () => alert("close"),
};

RecoverPasswordPopUp.propTypes = {
    acceptCallback: PropTypes.func,
    closeCallback:  PropTypes.func,
};


export default RecoverPasswordPopUp;
