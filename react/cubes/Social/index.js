'use strict';

let ReactDOM = require('react-dom');

import React, {PureComponent}       from 'react';
import {Provider}                   from 'react-redux';
import { withRouter }               from 'react-router';
import R                            from 'ramda';


import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';


import store                        from '../../../store';
import Profile                      from './scenes/Profile';
// import Notifications                from './scenes/Notifications/';
import Entity                       from './scenes/Entity';
import Requests                     from './scenes/Requests';
import Feed                         from '../../components/Feed';
import TopBarSocialWithRouter       from './components/TopBarSocialWithRouter';
import CubeTopBarBase               from '../../components/CubeTopBarBase';


const api                           =   require('../../../../app/js/devel/modules-system/api-calls').apiv2;

class SocialWrapper extends PureComponent {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <Provider store = {store}>
                <Router>
                    <div className="routerSocial">

                        <CubeTopBarBase
                            closeCallback    = { () => this.props.cubeInstance.close() }
                            cubeInstance     = { this.props.cubeInstance }
                        >
                            <TopBarSocialWithRouter {...this.props} />
                        </CubeTopBarBase>

                        <Route path="/"                  render={ (props) => <Redirect
                                                                                {...props}
                                                                                cubeInstance={this.props.cubeInstance}
                                                                                tabToStart={this.props.tabToStart}
                                                                                userID={this.props.userID}
                                                                                entityType={this.props.entityType}
                                                                                entityItem={this.props.entityItem}
                                                                                apiType={this.props.apiType}/>
                                                                }   />
                        <Route path="/discover"          render={ (props) => <Feed          {...props}       cubeInstance={this.props.cubeInstance}        /> }    />
                        <Route path="/news"              render={ (props) => <Feed          {...props}       cubeInstance={this.props.cubeInstance}        /> }    />
                        <Route path="/me"                render={ (props) => <Profile       {...props}       cubeInstance={this.props.cubeInstance}        /> }    />
                        <Route path="/requests"          render={ (props) => <Requests      {...props}       cubeInstance={this.props.cubeInstance}        /> }    />
                        <Route path="/users/:userId"     render={ (props) => <Profile       {...props}       cubeInstance={this.props.cubeInstance}        /> }    />
                        <Route path="/boards/:id"        render={ (props) => <Entity        {...props}       cubeInstance={this.props.cubeInstance}        /> }    />
                        <Route path="/weblinks/:id"      render={ (props) => <Entity        {...props}       cubeInstance={this.props.cubeInstance}        /> }    />
                    </div>
                </Router>
            </Provider>
        )
    }
}


class Redirect extends PureComponent {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let pathname = this.PATH_MAPPING[this.props.tabToStart];
        this.props.history.replace({
            pathname: pathname,
            state: {
                userId:     store.getState().appSettings.SESSION_DATA.id,
                first:      true,
                item:       this.props.entityItem,
                type:       this.props.entityType,
                apiType:    this.props.apiType,
            }
        });
    }

    render() {
        return null;
    }

    PATH_MAPPING = {
        'Social'        :   '/discover/',
        'Profile'       :   `/me/`,
        'UserProfile'   :   `/users/${this.props.userID}`,
        'Entity'        :   `/${this.props.apiType}/${R.isNil(this.props.entityItem) ? null : this.props.entityItem.id}`,
    } 
}


export default SocialWrapper;
