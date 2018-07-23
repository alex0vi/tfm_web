'use strict';

import R                                        from 'ramda';
import React, { Component }                     from 'react';
import _                                        from 'lodash';
import {connect}                                from 'react-redux';
import autobind                                 from 'autobind-decorator';
import Radium                                   from 'radium';
import {COLORS}                                   from '../../../../globals/colors.js';


const styles = {
  container: {
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
  avatarStyle:{
      width: 40,
      height: 40,
      borderRadius: '50%',
      paddingLeft: 2,
      margin: '5px 10px 5px 0px',
  },
  wrapperUserInformation:{
      width: '85%',
      height: '100%',
  },
  userName:{
      fontWeight: 900,
      fontSize: 15,
  },
  userDescription:{
      fontWeight: 500,
      fontSize: "12px",
  },
}

const mapStateToProps = (state, ownProps) => {
    return {
        myself:              state.user
    }
}


@connect(mapStateToProps, null)
@Radium
class ListOfUsers extends Component{

    constructor(props){
        super(props);

        this.state = {
            isHover: false,
        };

        this.goToUsers = this.goToUsers.bind(this);
        this.hoverUserItem = this.hoverUserItem.bind(this);
        this.unHoverUserItem = this.unHoverUserItem.bind(this);
    }



    render(){
        let item = this.props.user;
        let auxHoverStyles;

        if(this.state.isHover){
            auxHoverStyles={
                backgroundColor: COLORS.primary,
            }
        }
        return(
            <div
                 key = {item.id}
                 style={[styles.container, auxHoverStyles]}
                 onMouseEnter =  {() => this.hoverUserItem()}
                 onMouseLeave = {() => this.unHoverUserItem()}
                 onClick = {() => this.goToUsers(item.id)}
             >
                <img src={item.avatar.xs} style={styles.avatarStyle}/>
                <div style={styles.wrapperUserInformation}>
                    <div style={styles.userName}>{`${item.firstName} ${item.lastName}`}</div>
                    <div style={styles.userDescription}>{item.description}</div>
                </div>
            </div>
        )
    }


    hoverUserItem(){
        this.setState({ isHover: true});
    }

    unHoverUserItem(){
        this.setState({ isHover: false});
    }

    goToUsers(userId) {
        let {history, myself} = this.props;
        if(R.equals(userId, myself.id)) history.push({ pathname:'/me/', state: { userId: userId } });
        else history.push({ pathname:`/users/${userId}`, state: { userId: userId } });
        this.props.hidePopup()
    }
}

export default ListOfUsers;
