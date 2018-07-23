import React, {PureComponent}       from 'react';

import R                            from 'ramda';
import Radium                       from 'radium';
import {connect}                    from 'react-redux';
import {bindActionCreators}         from 'redux';
import { withRouter }               from 'react-router';
import PropTypes                    from 'prop-types';

import {COLORS}                       from '../../../../globals/colors.js';
import NavigationTopbar             from './components/NavigationTopbar';
import SearchBar                    from './components/SearchBar';
import Filter                       from './components/Filter';
import store                        from '../../../../../store';

import {setUser}                    from '../../../../../store/actionsCreators/user/setUser.js';
const api                           =   require('../../../../../../app/js/devel/modules-system/api-calls').apiv2;
import CONSTANTS                    from '../../../../globals/constants.js';

const styles = {
    container: {
        height:         37,
        width:          '100%',
        backgroundColor:'white',
        display:        'flex',
        alignItems:     'center',
        cursor:         'pointer',
    },
    icon:{
        position:       'relative',
        fontSize:       15,
    },
    searchBarWrapper:{
        position:       'relative',
        height:         '100%',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
    },
    backNavigationArrow:{
        position:       'absolute',
        fontSize:       20,
        cursor:         'pointer',
        marginLeft:     45,
        zIndex:         5,
    },
}

const mapStateToProps = (state, ownProps) => {

    return {
        myself:                state.user,
        activeTab   :          state.socialReducer.activeTab,
    }
}


const mapDispatchToProps = dispatch => {

    return bindActionCreators({
        dispatchSetMyself: setUser,
    }, dispatch)
};



@connect(mapStateToProps, mapDispatchToProps)
@Radium
class SocialTopBar extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            hoverPin:   false,
            isPined:    false,
            ready:      false,
        }
    }

    componentWillMount(){
        let {cubeInstance} = this.props;
        this.setState({isPined: cubeInstance.getIsPined()});
    }

    render() {
        let {cubeInstance, activeTab} = this.props;
        let canGoBack;
        if(!R.isNil(history.state) && !R.isNil(history.state.state)) canGoBack = !history.state.state.first;
        else canGoBack = true;

        return(
            <div
                style = {styles.container}
                onDoubleClick = {() => cubeInstance.maximize()}
            >

                { /* back button */ }
                <i
                    style={[styles.backNavigationArrow, {display: canGoBack ? 'flex' : 'none'}]}
                    className="material-icons"
                    onClick = {() => {
                        history.back()
                    }}
                >
                    arrow_back
                </i>

                <div style = {[styles.searchBarWrapper, { marginLeft: !R.equals(activeTab, CONSTANTS.FEED.DISCOVER) ? 75 : 25 } ]}>

                    { /* shows filter in discover */ }
                    {
                        R.equals(activeTab, CONSTANTS.FEED.DISCOVER ) ?
                            <Filter cubeInstance={cubeInstance}/>
                        : null
                    }


                    <SearchBar
                        history         = {this.props.history}
                        cubeInstance    = {this.props.cubeInstance}
                    />

                </div>


                <NavigationTopbar/>


            </div>
        )
    }
}

SocialTopBar.propTypes = {
    match:              PropTypes.object.isRequired,
    location:           PropTypes.object.isRequired,
    history:            PropTypes.object.isRequired
}

export default SocialTopBar;
