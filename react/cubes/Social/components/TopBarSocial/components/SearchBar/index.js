'use strict';

import React, {PureComponent}   from 'react';

import R                        from 'ramda';
import _                        from 'lodash';
import Radium                   from 'radium';
import {connect}                from 'react-redux';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import {openWeblinkAdapter, openBoardAdapter}     from '../../../../../../../js/devel/entities/cubes/reactCubes/Functions/ReactToElectron'
import CONSTANTS                from '../../../../../../globals/constants.js';
const api                       = require('../../../../../../../../app/js/devel/modules-system/api-calls').apiv2;
const {ipcRenderer}             = require('electron')
const USER_SETTINGS             = require("../../../../../../../js/devel/modules-system/module-user-settings");

const NO_RESULTS_MESSAGE        = 'NO AVAILABLE RESULTS WITH THIS OPTIONS'

const NUMBER_OF_FILTERS         = 3;

let styles = {
    container: {
        display: 'flex',
        borderRadius: 8,
        backgroundColor: '#EDECED',
        justifyContent: 'center',
        alignItems: 'center',
        padding: "0 16px 0",
        overflow: "hidden",
        height: 30,
        width: 280,
    },
    input:{
        border: 'none',
        outline: 'none',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        color: '#979797',
        fontFamily: "Avenir Next",
        fontSize: 14,
        textAlign: 'justify',
        width: '100%',
    },
    searchIcon:{
        marginRight: 5,
        color: '#979797',
        fontSize: 16,
        marginRight:15,
    },
    resultsContainer:{
        position: 'absolute',
        top: 40,
        width: 455,
        maxHeight: 300,
        minHeight: 100,
        backgroundColor: 'white',
        boxShadow: '0 0 2px 0 rgba(0,0,0,0.12), 0 2px 2px 0 rgba(0,0,0,0.24)',
        borderRadius: '5px',
        zIndex: 150,
    },
    resultItem:{
        position: 'relative',
        width: '100%',
        height: 50,
        marginTop: 5,
        marginBottom:5,
        display: 'inline-flex',
        cursor: 'pointer',
    },
    imageResultItem:{
        position: 'relative',
        width: 40,
        height: 40,
        marginLeft: 15,
        marginRight: 10,
        borderRadius: '50%',
        border: 'solid 1px black',
        alignSelf: 'center',
    },
    textResultItem:{
        position: 'relative',
        display: 'flex',
        alignSelf: 'center',
        overflow: 'hidden',
        height: 20,
    },
    filterOption:{
        position: 'relative',
        width: `${100/NUMBER_OF_FILTERS}%`,
        height: 40,
        textAlign: 'center',
        verticalAlign: 'middle',
        lineHeight: '50px',
        cursor: 'pointer',
        marginBottom: 5,
        borderBottom: 'solid 1px #F5F5F5',
    },
    filtersOptions:{
        position: 'relative',
        display: 'inline-flex',
        height: 40,
        width: 'calc(100% - 20px)',
        alignContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginBottom:15,
    },
    wrapperIcon:{
        position: 'relative',
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 40,
        backgroundColor: '#d2d2d2',
        borderRadius: '50%',
        marginLeft: 15,
        marginRight: 10,
        alignSelf: 'center',

    },
    resultsContainerScroll:{
        width: '100%',
        height: '80%',
        overflow: 'scroll',
        display: 'inline-block',
        maxHeight: 235,
    },
    noResultItemMessage:{
        position: 'relative',
        width: '100%',
        height: 50,
        marginTop: 13,
        marginLeft: 15,
        fontSize: 13,
    },

};

const mapStateToProps = (state, ownProps) => {
    return {
        myself:              state.user
    }
}


@connect(mapStateToProps, null)
@Radium
class SearchBar extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            ds : [],
            searchText: '',
            activeFilters: ["ALL"],
            noResultsAvaiable : false,
            hoverResult: null,
            filtersOptions : [
                {
                    text: CONSTANTS.FEED.FILTER_ALL,
                },
                {
                     text: CONSTANTS.FEED.FILTER_BOARD,
                },
                {
                     text: CONSTANTS.FEED.FILTER_USER,
                },
                // {
                //      text: CONSTANTS.FEED.FILTER_WEBLINK,
                // },
            ],
      }

        this.onUpdateInput = this.onUpdateInput.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
        this.renderResultsContainer =  this.renderResultsContainer.bind(this);
        this.renderFilterTabs = this.renderFilterTabs.bind(this);
        this.handlerSetState = this.handlerSetState.bind(this);
        this.changeFilter= this.changeFilter.bind(this);
        this.renderSearchResult= this.renderSearchResult.bind(this);
        this.openResultItem= this.openResultItem.bind(this);
        this.onClikCube = this.onClikCube.bind(this);
        this.renderSearchUserItem = this.renderSearchUserItem.bind(this);
        this.renderSearchGeneralItem = this.renderSearchGeneralItem.bind(this);
        this.closeSearch = this.closeSearch.bind(this);
        this.upHoverResult = this.upHoverResult.bind(this);
        this.downHoverResult = this.downHoverResult.bind(this);
        this.goToUsers = this.goToUsers.bind(this);
        this.onInputKeyPressed = this.onInputKeyPressed.bind(this);
        this.handleInputKeyDown = this.handleInputKeyDown.bind(this);

    }

    componentWillMount() {

        this.handleSearchDebounced =  _.debounce( (event) => this.updateSearch( this.state.searchText, this.state.activeFilters), 150, {leading:false, trailing:true})

        ipcRenderer.on('EscKey',(event) => this.onPressEsc(event));

        let {cubeInstance} = this.props;
        let $cubeDom = cubeInstance._$dom.main;
        $cubeDom.click((event) => this.onClikCube(event));
    }

    componentWillUnmount() {
        ipcRenderer.removeListener('EscKey',(event) => this.onPressEsc(event));
    }

    render() {
        return (
            <div
                style       = {styles.container}
                className   = {'searchBar'}
            >
                <i style={styles.searchIcon} className="material-icons">{CONSTANTS.ICONS.SEARCH}</i>
                <input
                    style={styles.input}
                    ref = { self => this.InputSearch = self }
                    type="text" value={this.state.searchText}
                    onKeyPress={(event) => this.onInputKeyPressed(event)}
                    onChange={(value) => this.onUpdateInput(value)}
                    placeholder={'search board, user...'}
                    onKeyDown={(event) => this.handleInputKeyDown(event)}
                />
                { R.isEmpty(this.state.searchText)  ? null : this.renderResultsContainer() }
            </div>
        );
    }

    renderResultsContainer(){
        return(
            <div
                style={styles.resultsContainer}
                key = {'resultsContainer'}
            >
                <div style={styles.filtersOptions}>
                    {R.map(this.renderFilterTabs, this.state.filtersOptions)}
                </div>
                <div
                    style={styles.resultsContainerScroll}
                    ref = { self => this.resultsContainer = self}
                >
                  {this.state.noResultsAvaiable ? this.renderWrapperNoResults() : R.map(this.renderSearchResult, this.state.ds)}
                </div>
            </div>
        )
    }

    // render no results message
    renderWrapperNoResults(){
        return(
            <div
                 style={styles.noResultItemMessage}
             >
                {NO_RESULTS_MESSAGE}
            </div>
        )
    }

    // render filters options
    renderFilterTabs(filterOption){
        let isHover = filterOption.isHover;
        let auxActiveStyles;

        if(R.equals(filterOption.text, this.state.activeFilters[0])){
            auxActiveStyles={
                color: '#ff6c6f',
                borderBottom: 'solid 1px #ff6c6f',
            }
        }
        return(
            <div
                key = {filterOption.text}
                style={[styles.filterOption, auxActiveStyles]}
                onClick={() => this.changeFilter(filterOption.text)}
            >
                {filterOption.text}
            </div>
        )

    }

    _searchActualHoverResultOnTheStateListDS(){
        return R.findIndex( R.pathEq(['item', 'id'], this.state.hoverResult))(this.state.ds)
    }

    upHoverResult(){
        if(!R.isEmpty(this.state.searchText)){
            let pos = this._searchActualHoverResultOnTheStateListDS()
            if( pos > 0){
                pos -=1;
                this.setState({hoverResult: this.state.ds[pos].item.id})
                this.resultsContainer.scrollTop = this.resultsContainer.scrollTop - 50 ;
            }
        }
    }

    downHoverResult(){
        if(!R.isEmpty(this.state.searchText)){
            let pos = this._searchActualHoverResultOnTheStateListDS()
            if( pos < 9 && pos < this.state.ds.length){
                pos +=1;
                this.setState({hoverResult: this.state.ds[pos].item.id})
                this.resultsContainer.scrollTop = 50 + this.resultsContainer.scrollTop;
            }
        }
    }


    changeFilter(filterOption) {
        let filter = R.append(filterOption, []);
        this.setState({activeFilters: filterOption});
        this.updateSearch( this.state.searchText, filter );
        this.InputSearch.focus();
    }

    renderSearchResult(result){
        return R.cond([
            [ R.equals('USER_PREVIEW'),          () => this.renderSearchUserItem(result) ],
            [ R.equals('BOARD_PREVIEW'),         () => this.renderSearchGeneralItem(result, "icon icon-board", {fontSize: 20, display: 'flex'}) ],
            // [ R.equals('WEBLINK_PREVIEW'),       () => this.renderSearchGeneralItem(result, 'glyphicon glyphicon-link', {fontSize: 20, transform: 'rotate(47deg)'}) ],
        ])(result.type);
    }

    renderSearchUserItem(result){
        let auxHoverStyles;
        if(!R.isNil(this.state.hoverResult) && result.item.id === this.state.hoverResult){
            auxHoverStyles = {backgroundColor: '#F5F5F5'}
        }
        return(
            <Link
                style = {{ textDecoration: 'none', color: 'black'}}
                to= {{
                    pathname:  `/users/${result.item.id}`,
                }}
            >
                <div
                    ref = {result.item.id}
                    key = {result.item.id}
                    style={[styles.resultItem, auxHoverStyles]}
                    onMouseEnter =  {(e) => this.handlerSetState( 'hoverResult' ,result.item.id)}
                    onMouseLeave = {() => this.handlerSetState( 'hoverResult' ,null)}
                    onClick = { () => this.closeSearch() }
                >
                   <img src={result.item.image.xs} style={[styles.imageResultItem, {backgroundSize: 'cover', backgroundRepeat:' no-repeat', border: 'none'}]}/>
                   <div style={styles.wrapperOptionInformation}>
                       <div style={styles.textResultItem}>{result.item.name}</div>
                       <div style={[styles.textResultItem,styles.descriptionOption]}>{result.item.description}</div>
                   </div>
                </div>
            </Link>
        )
    }

    renderSearchGeneralItem(result, auxClassName, auxStyles){
        let auxHoverStyles;
        if(!R.isNil(this.state.hoverResult) && result.item.id === this.state.hoverResult){
            auxHoverStyles = {backgroundColor: '#F5F5F5'}
        }
        return(
            <div
                 ref = {result.item.id}
                 key = {result.item.id}
                 style={[styles.resultItem,auxHoverStyles]}
                 onMouseEnter =  {(e) => this.handlerSetState( 'hoverResult' ,result.item.id)}
                 onMouseLeave = {() => this.handlerSetState( 'hoverResult' ,null)}
                 onClick = {() => this.openResultItem(result)}

             >
                 <div style={styles.wrapperIcon}>
                    <i style={auxStyles} className={auxClassName} />
                </div>
                <div style={styles.wrapperOptionInformation}>
                    <div style={styles.textResultItem}>{result.item.name}</div>
                    <div style={[styles.textResultItem, styles.descriptionOption]}>{result.item.description}</div>
                </div>
            </div>
        )
    }

    onUpdateInput( event ){
        let inputText = event.target.value;
        if( R.isEmpty(inputText) ){
            this.setState( {ds: [], searchText: ''} );
            return
        }
        this.setState( {searchText: inputText} );
        this.handleSearchDebounced();

    }

    openResultItem(result){
        // user is a link
        this.setState( {ds: [], searchText: ''} );
        R.cond([
            [ R.equals('USER_PREVIEW'),          ()=>{this.goToUsers(result.item.id)}],
            [ R.equals('BOARD_PREVIEW'),         ()=>{openBoardAdapter(result.item)}],
            [ R.equals('WEBLINK_PREVIEW'),       ()=>{openWeblinkAdapter(result.item)}],
            [ R.equals('ACTIVITY_PREVIEW'),      ()=>{}],
        ])(result.type);
    }

    //api search call
    updateSearch(searchText, filter){

        if(!R.isEmpty(searchText)){
            let types = filter;
            let qTerm = searchText;
            if(R.equals(types , [CONSTANTS.FEED.FILTER_ALL])){
               types = [CONSTANTS.FEED.FILTER_BOARD,CONSTANTS.FEED.FILTER_WEBLINK,CONSTANTS.FEED.FILTER_USER]
            }

            api.get('previewSearch', {qTerm , types}).then(searchPreviews =>{
                if( R.isEmpty(searchPreviews)){
                    this.setState({
                       ds:[],
                       hoverResult:  null,
                       activeFilters: filter,
                       noResultsAvaiable: true,
                    })
                }
                else{
                    this.setState({
                        ds:searchPreviews,
                        hoverResult:  searchPreviews[0].item.id,
                        activeFilters: filter,
                        noResultsAvaiable: false,
                    })
                }
            })
        }
    }

    onPressEsc(event){
        let {cubeInstance} = this.props;
        let $cubeDom = cubeInstance._$dom.main;
        if($cubeDom.hasClass('selected-cube')){
            this.setState( {ds: [], searchText: ''} );
        }
    }

    onClikCube(event){
        if(R.isNil(event.target.closest('.searchBar'))){
            this.setState( {ds: [], searchText: ''} );
        }
    }

    handlerSetState(state, value){
         this.setState({[state]: value})
    }

    closeSearch(){
        this.setState( {ds: [], searchText: ''} );
    }

    openResultOnPressEnter(){
        if(!R.isEmpty(this.state.searchText) && !R.isEmpty(this.state.ds)){
            let listObjectToOpen = R.reject((object) => !R.equals(object.item.id, this.state.hoverResult) , this.state.ds)
            let objectToOpen = listObjectToOpen[0];
            this.openResultItem(objectToOpen);
        }
    }

    goToUsers(userId) {
        let {myself, history} = this.props;
        if(R.equals(userId, myself.id)) history.push({ pathname:'/me/', state: { userId: userId } });
        else history.push({ pathname:`/users/${userId}`, state: { userId: userId } });
    }

    onInputKeyPressed(event){
        if(R.equals(event.key, 'Enter')) this.openResultOnPressEnter();
    }

    handleInputKeyDown(event){
        if(R.equals(event.key, 'ArrowUp')) this.upHoverResult();
        else if(R.equals(event.key, 'ArrowDown')) this.downHoverResult();
    }

}




export default SearchBar;
