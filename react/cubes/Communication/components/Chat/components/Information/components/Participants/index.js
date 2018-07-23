'use strict';

let ReactDOM = require('react-dom');

import React, {PureComponent}       from 'react';
import R                            from 'ramda';
import Radium                       from 'radium';
import {connect}                    from 'react-redux';
import {openCubeSocialProfileById}         from '../../../../../../../../../js/devel/entities/cubes/reactCubes/Functions/ReactToElectron.js';


const styles = {
    container: {
        margin: '20px 10px',
        left: 0,
        right: 0,
    },
    userWrapper:{
        display: 'flex',
        flex: 1,
        flexWrap: 'wrap',
        position: 'relative',
        zIndex: 10,
        width: '100%',
        height: 50,
        overflow: 'hidden',
        cursor: 'pointer',
    },
    userAvatar:{
        width: 40,
        height: 40,
        borderRadius: '50%',
        paddingLeft: 2,
        margin: '5px 10px 5px 0px',
    },
    wrapperUserInformation:{
        height: '100%',
        width: '80%',
    },
    userName:{
        fontFamily: "Avenir Next",
        fontWeight: 600,
        fontSize: "12px",
        height: 20,
        width: '100%',
        overflow: 'hidden',
    },
    userDescription:{
        fontWeight: 500,
        fontSize: "12px",
        height: 20,
        width: '100%',
        overflow: 'hidden',
    },
}


const mapStateToProps = (state, ownProps) => {
    let { users } =  state.communication.activeChannel.item;
    return {
        users  :  users,
    }
}

@connect(mapStateToProps, null)
@Radium
class Participants extends PureComponent {

    constructor(props){
        super(props);

        this.renderUser = this.renderUser.bind(this);
    }

    render(){
        let {users} = this.props;
        return (
            <div style={styles.container}>
                {R.map(this.renderUser, users)}
            </div>
        );
    }

    renderUser(user){

        return(
            <div
                 key = {user.id}
                 style={styles.userWrapper}
                 onClick = {() => openCubeSocialProfileById(user.id)}
             >
                <img src={user.avatar.xs} style={styles.userAvatar}/>
                <div style={styles.wrapperUserInformation}>
                    <div style={styles.userName}>{`${user.firstName} ${user.lastName}`}</div>
                    <div style={styles.userDescription}>{user.description}</div>
                </div>
            </div>
        )
    }
}

export default Participants;
