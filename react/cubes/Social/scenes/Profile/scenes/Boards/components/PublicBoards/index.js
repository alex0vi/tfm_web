'use strict';

import R                        from 'ramda';
import _                        from 'lodash';
import autobind                 from 'autobind-decorator';
import React, { Component }     from 'react';

import { connect }              from 'react-redux';
import { bindActionCreators }   from 'redux';


// import api from '../../services/api.js';
import BoardsGridTemplate from '../BoardsGridTemplate';


const mapStateToProps = state => {

  return {
    myself: state.user
  }

};

@connect( mapStateToProps, null )
@autobind
class PublicBoards extends Component {

  constructor(props){
    super(props);
  }


  render(){

    let { boards, user, myself } = this.props;

    let itsMe = user.id === myself.id;

    let BoardsGridTemplateProps = {
      boards,
    }

    return (
      <BoardsGridTemplate
        boards = {boards}
        user = {user}
        hasSettings = {true}
        navigation={this.props.navigation}
        cubeInstance = {this.props.cubeInstance}
      />
    )
  }

}




export default PublicBoards;
