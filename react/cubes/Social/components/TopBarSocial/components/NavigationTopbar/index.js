'use strict';

import React, {PureComponent}       from 'react';

import R                            from 'ramda';
import Radium                       from 'radium';
import autobind                     from 'autobind-decorator';
import PropTypes                    from 'prop-types';
import {connect}                    from 'react-redux';

import {
  MemoryRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom';

import store                        from '../../../../../../../store';
import {COLORS}                       from '../../../../../../globals/colors.js';
import CONSTANTS                    from '../../../../../../globals/constants.js';

let styles = {
    container:{
        position: 'relative',
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%',
        paddingRight: 40,
    },
    navigationWrapper:{
        display: 'flex',
        position: 'relative',
    },
    navigationIconsLeftWrapper:{
        display: 'flex',
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
    },
    navigationIconsRightWrapper:{
        display: 'flex',
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
    },
};

const mapStateToProps = (state, ownProps) => {

    return {
        activeTab   :     state.socialReducer.activeTab,
    }
};

@connect(mapStateToProps, null)
@Radium
class NavigationTopbar extends PureComponent {

    constructor(props) {
        super(props);


        this.leftTabsSpec = [
            {
                tabValue: CONSTANTS.FEED.DISCOVER,
                path: '/discover/',
                render: <i style ={{ margin: '0px 10px', fontSize: 24, position: 'relative'}} className={'material-icons'}>explore</i>
            },
            {
                tabValue: CONSTANTS.FEED.NEWS,
                path: '/news/',
                render: <i style ={{margin: '0px 10px', fontSize: 24, position: 'relative'}} className={'fa  fa-newspaper-o'} />
            },
        ];

        this.rightTabsSpec = [
            {
                tabValue: CONSTANTS.USER.PROFILE,
                path: `/me/`,
                render: <img src = {store.getState().user.avatar.s} style ={{ color: '#757575', top: -4, margin: '0px 10px', width: 22, height: 22, borderRadius: 11, position: 'relative'}}  />,
                renderWithBorder: <img src = {store.getState().user.avatar.s} style ={{ border: '2px solid rgb(255, 108, 111)', color: '#757575', top: -4, margin: '0px 10px', width: 22, height: 22, borderRadius: 11, position: 'relative'}}  />
            },
            {
                tabValue: CONSTANTS.REQUESTS.REQUESTS,
                path: '/requests/',
                render: <i style ={{ margin: '0px 10px', fontSize: 24, position: 'relative'}} className={'material-icons'}>people</i>
            },
            {
                tabValue: '',
                path: '/users/*',
                render: null
            }
        ];


        this.renderTabItem = this.renderTabItem.bind(this);
    }

    render() {
        return(
            <div style={styles.container}>

                <div style = {styles.navigationWrapper}>
                    <div style={styles.navigationIconsLeftWrapper}>
                        {R.map( this.renderTabItem, this.leftTabsSpec)}
                    </div>
                    <div style ={{borderLeft: '1px solid #edeced', margin:'9px 5px'}}/>
                    <div style= {styles.navigationIconsRightWrapper}>
                        {R.map( this.renderTabItem, this.rightTabsSpec)}
                    </div>
                </div>
            </div>
        )
    }

    renderTabItem(tab) {
        let {activeTab} = this.props;

        return(
            <Link
                style       = {{textDecoration:'none'}}
                key         = { tab.tabValue }
                to          = {{
                    pathname:   tab.path,
                    // state:      state
                }}
            >
                <div style = {{color: R.equals(activeTab, tab.tabValue) ? COLORS.primary : '#757575'}} >
                    { R.equals(activeTab, tab.tabValue) && R.equals(activeTab, CONSTANTS.USER.PROFILE) ? tab.renderWithBorder : tab.render }
                </div>
            </Link>
        )
    }
}

export default NavigationTopbar;
