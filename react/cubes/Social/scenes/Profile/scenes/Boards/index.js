'use strict';

import React, { Component }     from 'react';
import R                        from 'ramda';
import _                        from 'lodash';
import Radium                   from 'radium';
import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';


import autobind         from 'autobind-decorator';
import Loading          from '../../.././../../../components/Loading';
import PublicBoards     from './components/PublicBoards';

import {setPublicBoards}  from '../../../.././../../../store/actionsCreators/social/setPublicBoards.js'

const api           =   require('../../../../../../../../app/js/devel/modules-system/api-calls').apiv2;


const styles = {
  container: {
    flex:1,
    flexDirection: 'column',
  }
};


const mapStateToProps = (state, ownProps) => {
  return {
    myself: state.user,
    publicBoards: state.socialReducer.publicBoards
  }
}


const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({
        dispatchSetPublicBoards: setPublicBoards,
    }, dispatch)
}


@connect( mapStateToProps, mapDispatchToProps )
@autobind
@Radium
class Boards extends Component {

    constructor(props){
        super(props);

        this.state = {
            ready: false
        }
    }


    componentDidMount() {
        let userId = this.props.userId;

        Promise.all([api.get(`users/${userId}/boards`)]).then(([publicBoards]) => {
            this.props.dispatchSetPublicBoards(publicBoards)
            this.setState({ready: true})
        }).catch(err => {
            console.log(err)
        })
    }


    render(){
        if (!this.state.ready) {
            return <Loading />
        }

        let { myself, user } = this.props;
        let publicBoardsProps = {
          boards: this.props.publicBoards,
          user,
          myself,
          cubeInstance: this.props.cubeInstance,

        }

        return (
          <div style = {styles.container}>

              <PublicBoards
                {...publicBoardsProps}
              />

            {
              // <FollowedBoards  {...followedBoardsProps}/>
            }
          </div>
        )

    }


}




export default Boards;
