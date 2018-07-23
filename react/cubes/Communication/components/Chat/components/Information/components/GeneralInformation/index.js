'use strict';

let ReactDOM = require('react-dom');

import React, {PureComponent}       from 'react';
import R                            from 'ramda';
import Radium                       from 'radium';
import {connect}                    from 'react-redux';
import {bindActionCreators}         from 'redux';


import {setActiveChannel}           from '../../../../../../../../../store/actionsCreators/communication/setActiveChannel';
const api                           = require('../../../../../../../../../js/devel/modules-system/api-calls').apiv2;
import {COLORS}                       from '../../../../../../../../globals/colors.js';


const styles = {
    container: {
        width:'100%',
    },
    avatarWrapper:{
        width: '100%',
        justifyContent: 'center',
        display: 'flex',
        margin: '15px 0px',
    },
    avatar:{
        width: 100,
        height: 100,
        backgroundSize: 100,
    },
    inputWrapper:{
        width: '100%',
        padding: '0px 10px',
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    input:{
        borderLeft:'none',
        borderTop:'none',
        borderRight:'none',
        width: 250,
        padding: '0px 10px',
    },
}


const mapStateToProps = (state, ownProps) => {
    // state.communication.activeChannel
    // let { activeChannel } =  ;

    return {
        title       :   state.communication.activeChannel.title,
        item        :   state.communication.activeChannel.item,
        type        :   state.communication.activeChannel.type,
    }
}

const mapDispatchToProps = dispatch => {

    return bindActionCreators({
        dispatchSetActiveChannel: setActiveChannel,
    }, dispatch)
};

@connect(mapStateToProps, mapDispatchToProps)
@Radium
class GeneralInformation extends PureComponent {

    constructor(props){
        super(props);

        this.state = {
            nameValue   : '',
            editName    : false,
        }

        this.changeName = this.changeName.bind(this);
        this.onClickEditDone =this.onClickEditDone.bind(this);
    }

    componentWillMount(){
        this.setState({ nameValue : '', editName : false})
    }

    componentWillUnmount(){
        this.setState({ nameValue : '', editName : false})
    }

    render(){
        let {item, type, title} = this.props;

        let auxStyleInputOnEditMode = styles.input;
        if(this.state.editName) auxStyleInputOnEditMode = R.merge(auxStyleInputOnEditMode,  { borderBottom: `2px solid ${COLORS.primary}`})
        else R.merge(auxStyleInputOnEditMode,  { borderBottom: ''});

        let icon = 'mode_edit';
        if(this.state.editName) icon = 'done'

        let auxStyleEditButton;
        if(R.equals(type,'CONTACT')) auxStyleEditButton = {display: 'none'};

        return (
            <div style={styles.container}>
                <div style= {styles.avatarWrapper} >
                    <div style= {[ styles.avatar ,{backgroundImage: `url(${item.avatar.sm})`}]}></div>
                </div>
                <div style = {styles.inputWrapper}>
                    <input
                        type            = 'text'
                        value           = {this.state.nameValue}
                        onChange        = {(event) => this.changeName(event.target.value)}
                        style           = {auxStyleInputOnEditMode}
                        placeholder     = {title}
                        disabled        = {!this.state.editName}
                    />
                    <i className="material-icons" style={[{fontSize: 15, cursor:'pointer'}, auxStyleEditButton]} onClick= {()=>this.onClickEditDone()}>{icon}</i>
                </div>
            </div>
        );
    }

    onClickEditDone(){
        let {item, dispatchSetActiveChannel} = this.props;
        if(this.state.editName){
            if(!R.isEmpty(this.state.nameValue)){

                let body = {
                    label: this.state.nameValue,
                };

                api.patch(`user/channels/${item.id}`, body)
                    .then((data) => {
                        let label = data.type === 'CONTACT' ? null : data.item.label;
                        dispatchSetActiveChannel(data.type, data.item, label);
                    });
                this.setState({'nameValue': '' })
            }
        }
        this.setState({'editName': !this.state.editName })
    }

    changeName(value){
        this.setState({nameValue: value})
    }

}

export default GeneralInformation;
