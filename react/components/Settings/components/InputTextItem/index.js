'use strict';

let ReactDOM = require('react-dom');


import React, {PureComponent}       from 'react';
import {Provider}                   from 'react-redux'
import {connect}                    from 'react-redux';
import R                            from 'ramda';
import Radium                       from 'radium';
import PropTypes                    from 'prop-types';
import Select                       from 'react-select';

// import CONSTANTS                    from '../../../../globals/constants.js';
let Cleave                          = require('cleave.js/dist/cleave-react');

let country;
let CleavePhone;

const api                           = require('../../../../../js/devel/modules-system/api-calls').apiv2;

const styles = {
    input:{
        position: 'absolute',
        width: '100%',
        top: '30px',
        border: 'none',
    }
}

@Radium
class InputTextItem extends PureComponent {

    constructor(props){
        super(props)
        this.state = {
            countries: [],
        }

        this.renderCounter  = this.renderCounter.bind(this);
        this.renderRow      = this.renderRow.bind(this);
    }

    componentDidMount(){
        if(this.props.hasSelect){
             api.get("countries").then((data) => {
                 let newData = R.map((item) => ({label: item.name, dial_code: item.dialCode, value: item.iso2}) , data)
                 this.setState({countries: newData})
             });
        }
    }

    render(){

        let auxBottomStyle = this.props.type === 'phoneType' ? { borderBottom: '0px solid' } : {};

        return (
            <div className={'inputTextItemContainer'} style = {[this.props.style, auxBottomStyle]}>
                <span className={'labelInput'} >{this.props.textlabelInput}</span>
                { this.renderRow() }
                { this.props.type === 'phoneType' ? null : this.renderCounter() }
            </div>
        );
    }


    renderRow() {

        let rowStyles2 = {
            width: 'calc(100% - 220px)',
            position: 'absolute',
            left: 220,
            top: 30,
            borderBottom: '1px solid #9E9E9E',
            height: 30
        };

        let auxPhoneStyle2;
        if(this.props.type === 'phoneType') auxPhoneStyle2 = { left: 290, width: 'calc(100% - 290px)'}

        rowStyles2 = R.merge(rowStyles2, auxPhoneStyle2);

        let auxPhoneStyle = {}

        if(this.props.type === 'phoneType') {
            auxPhoneStyle   = { top: ''};
            country         = R.toLower(this.props.valueSelected);
            CleavePhone     = require(`cleave.js/dist/addons/cleave-phone.${country}`);
        }

        auxPhoneStyle = R.merge(styles.input, auxPhoneStyle);

        return(
            <div>
                {
                    this.props.hasSelect ?
                        <Select
                          name="form-field-name"
                          wrapperStyle = {{width: 200, top: 27, position:'absolute'}}
                          value={this.props.valueSelected}
                          options={this.state.countries}
                          resetValue = {this.props.valueSelectedReset}
                          onChange={(val) => this.props.setStateSelectValue(val)}
                        />
                        :
                        null
                }
                {this.props.type === 'phoneType' ? <span className={'countryPrefixInput'}>{`(${this.props.dialCode})`}</span> : null}
                <div style = { this.props.hasSelect ? rowStyles2 : {} }>
                    <Cleave
                        placeholder = {this.props.placeholder}
                        value       = {this.props.value}
                        options     = {this.props.options}
                        style       = {auxPhoneStyle}
                        onChange    = {(text) => this.props.onChange(text.target.value)}
                        disabled    = {this.props.disabled}
                    />
                </div>
            </div>
        )
    }

    renderCounter() {
        return(
            <span className={'infoInput'}>
                {`${this.props.letters}`}
            </span>
        )
    }

}

/**
 * TO DO UPDATE THIS
 */
// InputTextItem.defaultProps =  {
//     style:               {},
//     options:             {},
//     hasSelect:           false,
//     letters:             '',
//     onChange:            () => {},
//     value:               '',
//     placeholder:         '',
//     type:                '',
//     dialCode:            '',
//     disabled:            false,
//     textlabelInput:      ''
//     valueSelected:       ''
//     valueSelectedReset:  ''
//     setStateSelectValue: ''
// };
//
// InputTextItem.propTypes = {
//     style:               PropTypes.obj,
//     options:             PropTypes.obj,
//     hasSelect:           PropTypes.bool,
//     letters:             PropTypes.string,
//     onChange:            PropTypes.string,
//     value:               PropTypes.string,
//     placeholder:         PropTypes.string,
//     type:                PropTypes.string,
//     dialCode:            PropTypes.string,
//     disabled:            PropTypes.bool,
//     textlabelInput:      PropTypes.func,
//     valueSelected:       PropTypes.func,
//     valueSelectedReset:  PropTypes.func,
//     setStateSelectValue: PropTypes.func,
// };


export default InputTextItem;
