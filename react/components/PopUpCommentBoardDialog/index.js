'use strict';

import React, { Component } from 'react';
import autobind             from 'autobind-decorator';

import R                    from 'ramda';
import _                    from 'lodash';
import Radium               from 'radium';

import SocialButton         from '../ButtonSocial';

const api                   = require('../../../js/devel/modules-system/api-calls').apiv2;


const styles = {
    containerStyle:{
        backgroundColor: 'white',
        borderRadius: 5,
        // padding: 10,
        width: 350,
        height: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    titleWrapper:{
        width: '100%',
        display: 'flex',
    },
    title:{
        justifyContent: 'center',
        display: 'flex',
        fontWeight: 600,
        marginTop: 10,
        alignItems: 'center',
        width: '100%',
    },
    formContent:{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        padding: '5px 18px',
    },
    closeIcon:{
        margin: '15px 15px',
        position: 'absolute',
    },
}


@Radium
class PopUpCommentBoardDialog extends Component{

    constructor(props){

        super(props);

        this.state={
            comment: '',
        }

        this.handleChange = this.handleChange.bind(this);
    }


    render(){
        return(
            <div
                style       = {styles.containerStyle}
                className   = {'PopUpGeneral'}
            >
                <div style = {styles.titleWrapper}>
                    <span
                        style = {styles.closeIcon}
                        className="window_buttons window_buttons_close"
                        onClick = {() => this.props.onClick()}
                    >
                    </span>
                    <span style={styles.title}>Write a comment</span>
                </div>

                <div style= {styles.formContent}>
                    <span>Send comment for this board</span>
                    <input className ='form-control' type="text" value={this.state.comment} onChange={this.handleChange} />
                </div>

                <div style={{display: 'flex', paddingBottom: 15, marginTop: 15, width: '100%', justifyContent: 'center'}}>

                    <SocialButton
                        key = {`AceptPopUpCommentBoardDialog`}
                        type ={'request'}
                        status={'ACCEPT'}
                        style = {{width: 115, fontSize: 13}}
                        id = {'AceptPopUpCommentBoardDialog'}
                        acceptFunct = {() => this.onSendComment()}
                    />

                    <SocialButton
                        key = {`CancelPopUpCommentBoardDialog`}
                        type ={'request'}
                        style = {{ position: 'absolute', width: 115, fontSize: 13}}
                        status = {'CANCEL'}
                        id = {'CancelPopUpCommentBoardDialog'}
                        cancelFunct = {() => this.props.onClick()}
                    />

                </div>
            </div>
        )
    }

    onSendComment() {
        let type = this.props.type;
        let id = this.props.item.id;
        if(!R.isEmpty(this.state.comment)) {
            let url = type + 's/' + id + '/comments'
            let body = {
              type: 'TEXT',
              item: {
                text: this.state.comment
              }
            }
            api.post(url, body)
            .then(() => {
                this.setState({comment: ''});
                this.props.onClick();
            }).catch(err => {
                console.log(err)
            })
        }
    }

    handleChange(event){
        this.setState({comment: event.target.value});
    }

    hidePopup(){
        this.props.onClick();
    }

}

export default PopUpCommentBoardDialog;
