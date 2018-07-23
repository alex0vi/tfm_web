'use strict';

import React, {PureComponent}   from 'react';

import R                        from 'ramda';
import _                        from 'lodash';
import Radium                   from 'radium';
import {connect}                from 'react-redux';
import {bindActionCreators}     from 'redux';

import CONSTANTS                from '../../../../../../globals/constants.js';
import {setDiscoverFilter}      from '../../../../../../../store/actionsCreators/social/setDiscoverFilter.js';
const api                       =   require('../../../../../../../../app/js/devel/modules-system/api-calls').apiv2;

const FILTER_OPTIONS = [
    {name: CONSTANTS.FEED.FILTER_ALL, style: { top: -2,marginRight: 17, fontSize: 18, display: 'flex', color: '#FF6C6F'}, className: 'fa fa-database', icon:''},
    {name: CONSTANTS.FEED.FILTER_BOARD, style: { top: -2,marginRight: 15, fontSize: 18, display: 'flex', color: '#FF6C6F'}, className: 'icon icon-board', icon:''},
    {name: CONSTANTS.FEED.FILTER_USER, style: { top: -2,marginRight: 15, fontSize: 20, display: 'flex', color: '#FF6C6F'}, className: 'material-icons', icon:'people'},
    // {name: CONSTANTS.FEED.FILTER_WEBLINK, style: { top: -2,marginRight: 5, fontSize: 20, display: 'flex', color: '#FF6C6F',  transform: 'rotate(47deg)'}, className: 'glyphicon glyphicon-link', icon:''},
    // ['WEBAPPS'],
];

const MAPPING_FILTERS_TO_DISPATCH = {
    [CONSTANTS.FEED.FILTER_ALL]:        [CONSTANTS.FEED.FILTER_WEBLINK, CONSTANTS.FEED.FILTER_BOARD, CONSTANTS.FEED.FILTER_USER],
    [CONSTANTS.FEED.FILTER_BOARD]:      [CONSTANTS.FEED.FILTER_BOARD],
    [CONSTANTS.FEED.FILTER_USER]:       [CONSTANTS.FEED.FILTER_USER],
    // [CONSTANTS.FEED.FILTER_WEBLINK]:    [CONSTANTS.FEED.FILTER_WEBLINK],
    // ['WEBAPPS'],
}

const MAPPING_FILTERS_TO_RENDER = (filter) => {
    if(filter.length > 1 ) return FILTER_OPTIONS[0];
    else{
        if(R.equals(filter[0], CONSTANTS.FEED.FILTER_BOARD))   return FILTER_OPTIONS[1];
        if(R.equals(filter[0], CONSTANTS.FEED.FILTER_USER))    return FILTER_OPTIONS[2];
        // if(R.equals(filter[0], CONSTANTS.FEED.FILTER_WEBLINK)) return FILTER_OPTIONS[3];
        //     // ['WEBAPPS'],
    }
}


let styles = {
    container:{
        display: 'flex',
        backgroundColor: '#EDECED',
        height: 30,
        width: 49,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        margin: '0px 15px 0px 50px',
    },
    filterOptionsMenu:{
        position: 'absolute',
        width: 150,
        background: 'white',
        boxShadow: '0 0 2px 0 rgba(0,0,0,0.12), 0 2px 2px 0 rgba(0,0,0,0.24)',
        zIndex: 1,
        top: 50,
        borderRadius: 8,
    },
    myMenuLabels:{
        display: 'flex',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: '1px solid #EDECED',
        cursor: 'pointer',

    }

};

const mapStateToProps = (state, ownProps) => {

    return {
        discoverFilter:        state.socialReducer.filter
    }
}

const mapDispatchToProps = dispatch => {

    return bindActionCreators({
        dispatchSetDiscoverFilter         : setDiscoverFilter,
    }, dispatch)
};

@connect(mapStateToProps, mapDispatchToProps)
@Radium
class Filter extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            isActiveMenuSearch: false,
            hoverFilter:  null,
      }
        this.handlerSetState = this.handlerSetState.bind(this);
        this.renderFilterOptionsMenu =this.renderFilterOptionsMenu.bind(this);
        this.renderFilterOptions = this.renderFilterOptions.bind(this);
    }

    componentWillMount(){
        let {cubeInstance} = this.props;
        let $cubeDom = cubeInstance._$dom.main;
        $cubeDom.click((event) => this.onClikCube(event));
    }

    render() {
        let {discoverFilter} = this.props;
        let filtersOption = MAPPING_FILTERS_TO_RENDER(discoverFilter);

        return(
             <div
                 key='filterOptionButton'
                 className = {'menuSearchButton'}
                 style={styles.container}
                 onClick={() => this.handlerSetState('isActiveMenuSearch', !this.state.isActiveMenuSearch)}
             >
                 <i style={[filtersOption.style,{marginRight:5}]} className={filtersOption.className}>{filtersOption.icon}</i>
                 <i className="material-icons" style= {{ fontSize:15 , color: '#979797'}}>{this.state.isActiveMenuSearch ? CONSTANTS.ICONS.KEYBOARD_ARROW_UP :  CONSTANTS.ICONS.KEYBOARD_ARROW_DOWN }</i>
                  {this.state.isActiveMenuSearch ? this.renderFilterOptionsMenu(FILTER_OPTIONS) :  null }
             </div>
        )
    }

   renderFilterOptionsMenu(filtersOptions){

       return(
           <div style={styles.filterOptionsMenu}>
               {R.map(this.renderFilterOptions, filtersOptions)}
           </div>
       )
   }

   renderFilterOptions(filtersOption){
       let auxHoverFilter;

       if(!R.isNil(this.state.hoverFilter) && R.equals(this.state.hoverFilter, filtersOption.name)){
           auxHoverFilter = {
               backgroundColor: '#F5F5F5',
               borderRadius: 8,
           }
       }

        let latestItemStyle;
        if(R.equals(filtersOption.name,CONSTANTS.FEED.FILTER_USER)) latestItemStyle = {borderBottom: ''};

        return(
           <div
               key = {filtersOption.name}
               style={[styles.myMenuLabels, auxHoverFilter, latestItemStyle]}
               onClick={() => this.changeFilter(filtersOption.name)}
               onMouseEnter =  {() => this.handlerSetState( 'hoverFilter', filtersOption.name)}
               onMouseLeave = {() => this.handlerSetState( 'hoverFilter', null)}
           >
                <div style={{width: 100, display: 'flex', alignItems: 'center'}}>
                    <i style={filtersOption.style} className={filtersOption.className}>{filtersOption.icon}</i>
                    {filtersOption.name}
                </div>

           </div>
       )
   }

   changeFilter(filter){
       let {dispatchSetDiscoverFilter} = this.props;
       let newFilter = MAPPING_FILTERS_TO_DISPATCH[filter];
       dispatchSetDiscoverFilter(newFilter);
   }

   handlerSetState(state, value){
        this.setState({[state]: value})
   }

   onClikCube(event){
       if(R.isNil(event.target.closest('.menuSearchButton'))){
           if(this.state.isActiveMenuSearch) this.setState( {isActiveMenuSearch: false} );
       }
   }

}
export default Filter;
