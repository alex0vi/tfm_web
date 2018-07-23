'use strict';

let ReactDOM = require('react-dom');

import React, {PureComponent}       from 'react';
import {Provider}                   from 'react-redux'
import R                            from 'ramda';
import Radium                       from 'radium';
import PropTypes                    from 'prop-types';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import store                        from '../../../store';

import Account                      from './scenes/Account';
import General                      from './scenes/General/';
import Updates                      from './scenes/Updates';
import Password                     from './scenes/Password';
import Advanced                     from './scenes/Advanced';

import SideBarItem                  from './components/SideBarItem';


const api                           =   require('../../../../app/js/devel/modules-system/api-calls').apiv2;

const tabSpec = [
    {
        tabValue: 'Account',
        path: '/account/',
    },
    {
        tabValue: 'General',
        path: '/general/',
    },
    {
        tabValue: 'Updates',
        path: `/updates/`,
    },
    {
        tabValue: 'Password',
        path: `/password/`,
    },
    {
        tabValue: 'Advanced',
        path: `/advanced/`,
    },
];

class SettingsRouting extends PureComponent {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Provider store = {store}>
                <Router>
                    <div className="cube-react-settings cube-content" >
                            <Route path="/"             render={ (props) => <Settings  {...props} /> }   />
                            <Route path="/account/"     render={ (props) => <Account   {...props} /> }   />
                            <Route path="/general/"     render={ (props) => <General   {...props} /> }   />
                            <Route path="/password/"    render={ (props) => <Password  {...props} /> }   />
                            <Route path="/updates/"     render={ (props) => <Updates   {...props} /> }   />
                            <Route path="/advanced/"    render={ (props) => <Advanced  {...props} /> }   />
                    </div>
                </Router>
            </Provider>
        )
    }
}


@Radium
class Settings extends PureComponent {

    constructor(props){
        super(props)

        this.state = {
            activeTab: 'Account',
        }

        this.onClickTab     = this.onClickTab.bind(this);
        this.renderMenuItem = this.renderMenuItem.bind(this);
    }

    componentDidMount() {
        this.props.history.replace({ pathname: '/account/' });
    }

    render(){
        return (
            <div className={'sideBarContent'}>
                    { R.map( this.renderMenuItem, tabSpec) }
            </div>
        );
    }

    renderMenuItem(item) {
        let isActiveTab = this.state.activeTab === item.tabValue;
        return(
            <SideBarItem
                key         = { item.tabValue }
                item        = { item }
                isActiveTab = { isActiveTab }
                onClickTab  = { () => this.onClickTab(item) }
            />
        )
    }

    onClickTab(item) {
        this.setState({ activeTab: item.tabValue })
        this.props.history.replace({ pathname: item.path })
    }

}

Settings.childContextTypes = {
    history: PropTypes.object
}

export default SettingsRouting;
