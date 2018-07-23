'use strict';

import R                        from 'ramda';
import _                        from 'lodash';
import React, { Component }     from 'react';
import Radium                   from 'radium';
import { connect }              from 'react-redux';
import { bindActionCreators }   from 'redux';

import autobind     from 'autobind-decorator';
import Loading      from '../../../../../../components/Loading';
import ContactView  from './components/Contact';

const api           =   require('../../../../../../../../app/js/devel/modules-system/api-calls').apiv2;


const styles = {
    container: {
        display: 'flex',
        flex: 1,
        flexWrap: 'wrap',
    },
};


const mapStateToProps = (state, ownProps) => {
    let userId = ownProps.userId;

    return {
        // feedItems: timelineFeedSelector( state ),
        myself: state.user,
        userId,
    }
}


@connect( mapStateToProps, null )
@autobind
@Radium
class Contacts extends Component {

  constructor(props){
    super(props);

    this.state = {
      friends: null,
      ready: false
    }

    this.renderFriend = this.renderFriend.bind(this);

  }


    componentDidMount(){
        let userId = this.props.userId;
        let type = this.props.type;

        this.getContacts(userId, type);
    }

    getContacts(userId, type) {


        let url = '';

        if(userId === this.props.myself.id) {
            url = 'user/'+ type;
            if(type === 'following') {
                url = url + '/users'
            }
        }
        else {
            url = `users/${userId}/${type}`
        }

        api.get(url)
            .then( friends => {
                this.setState({
                    ready: true,
                    friends,
                })
            })
    }


    componentWillUpdate(nextProps, nextState) {
        if( !R.equals(this.props.userId, nextProps.userId)  ||
            !R.equals(this.props.type, nextProps.type)
        ) {
            let userId  = nextProps.userId;
            let type    = nextProps.type;

            this.getContacts(userId, type)
        }
    }


    render(){
        if (!this.state.ready) {
            return <Loading />
        }

        return (
          <div style = {styles.container}>
            {
                !R.isNil(this.state.friends) ?
                    R.map(this.renderFriend.bind(), this.state.friends)
                    :
                    null
            }

          </div>
        )


    }

    renderFriend(friend){
        return (
            <ContactView
                key = { friend.id }
                {...friend}
                {...this.props}
            />
        )
    }


}




export default Contacts;
