'use strict'

import React, {PureComponent}       from 'react';
import R                            from 'ramda';
import {connect}                    from 'react-redux';
import {bindActionCreators}         from 'redux';
import Radium                       from 'radium';
import autobind                     from 'autobind-decorator';


const api           =   require('../../../../app/js/devel/modules-system/api-calls').apiv2;
const ANALYTICS     =   require('../../../../app/js/devel/modules-system/module-analytics');

import Card                         from '../../cubes/Social/components/Card';
import Activity                     from '../../cubes/Social/components/Activity';
import Loading                      from '../Loading';
import ArrowToUp                    from '../../AddapsComponents/ArrowToUp'

import {setActiveTab}               from '../../../store/actionsCreators/social/setActiveTab';



import {COLORS}                       from '../../globals/colors.js';
import CONSTANTS                    from '../../globals/constants.js';

import {renderArrowToTopInCornerBottomRight, undoArrowToTopInCornerBottomRight}         from '../../../js/devel/entities/cubes/reactCubes/Functions/ReactToElectron.js';



let styles = {
    container: {
        display: 'flex',
        flex: 1,
        overflow: 'scroll',
        backgroundColor: '#ececec',
        justifyContent: 'center'
    },
    contentColumn: {
        width: '550px',
        flexDirection: 'column'
    },
    arrowToGoUpStyle: {
        bottom: 25,
        right: 15,
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        filter:           state.socialReducer.filter,
        cubesStyles :     state.reactCubes.cubesStyles,
    }
}

const mapDispatchToProps = dispatch => {

    return bindActionCreators({
        dispatchSetActiveTab: setActiveTab,
    }, dispatch)

};


@connect(mapStateToProps, mapDispatchToProps)
@Radium
class Feed extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            hasMoreItems: true,
            ready: false,
            activities: [],
            socialEntities: [],
            timelineItems: [],
            isFromFilter: false,
            activeArrowGoToUpContainer: false,
            isShare: false,
            isHoverCubeContent: false,
        }

        this.limit = 10;
        this.offset = 0;

        this.updateFeed = this.updateFeed.bind(this);
        this.goToUpContainer = this.goToUpContainer.bind(this);
        this.goToUpContainer = this.goToUpContainer.bind(this);
        // this.goToUpContainer = this.goToUpContainer.bind(this);
        // this.undoArrowGoToUpContainer = this.undoArrowGoToUpContainer.bind(this);
    }


    componentWillMount() {

        if(!R.isNil(this.props.location)){
            let activeTabLower = R.split('/',this.props.location.pathname)[1];
            let activeTab = R.concat( R.toUpper(R.splitAt(1,activeTabLower)[0]), R.splitAt(1,activeTabLower)[1]);
            this.props.dispatchSetActiveTab(activeTab)
        }

        let type = this.getTypeOfFeed();
        let itemInformation = this.getInformationByType(type)

        if(itemInformation.text !== 'Timeline'){
            ANALYTICS.pageView(`social/${itemInformation.selectedTab}`, itemInformation.text);
        }

        this.setState({ready:false})
        this.loadGeneralFeed()
                .then( () => this.setState({ready:true}));
    }


    componentWillUpdate(nextProps, nextState) {

        if( !R.equals(this.props.filter, nextProps.filter) ||
            !R.equals(this.props.userId, nextProps.userId)
        ) {
            let type = this.getTypeOfFeed();
            let itemInformation = this.getInformationByType(type)
            this.offset = 0;

            this.setState({
                ready: false,
                socialEntities:[],
            });

            ANALYTICS.pageView(`social/${itemInformation.selectedTab}`, itemInformation.text);

            this.loadGeneralFeed(nextProps.filter, nextProps.userId)
              .then( () => this.setState({ready:true}));
        }
    }


    render() {
        // if(!this.state.ready){
        //   return <Loading/>
        // }
        let styleContainerString = this.props.cubesStyles[`${this.props.cubeInstance.getKey()}`];
        let styleCubeBool = styleContainerString === 'minimizedStyle' ? true : false // todo: this is a redundant operation, we dont need to do the if, when we will return true or false from the boolean anyway

        let type = this.getTypeOfFeed();
        let itemInformation = this.getInformationByType(type);
        let myContainer ;

        if(type !== 'timeline'){
            if(this.state.isHoverCubeContent) this.props.cubeInstance._$dom.main.closest('.desktop-container').css('overflow','hidden');
            else this.props.cubeInstance._$dom.main.closest('.desktop-container').css('overflow','auto');
        }

        if(type !== 'timeline' && styleCubeBool){
            myContainer={
                top: styleCubeBool ? 100 : 52
            }
        }
        if(type === 'timeline'){
            myContainer = {
                position: 'relative',
                justifyContent: 'flex-end',
                overflow: '',
            }
            if(this.props.askForMoreItems){
                this.props.onPushMoreItems();
                this.loadGeneralFeed();
            }
        }

        return (
            <div
                className = {'element-with-interaction'}
                style={[ styles.container, myContainer ]}
                ref = { self => this.feedContainer = self}
                onScroll={ this.updateFeed }
                onMouseEnter =  {() => this.handlerSetState('isHoverCubeContent', true)}
                onMouseLeave = {() => this.handlerSetState('isHoverCubeContent', false)}
            >
                {
                    this.state.activeArrowGoToUpContainer ?
                        this.renderArrowGoToUpContainer()
                        :
                        this.undoArrowGoToUpContainer()
                }
                {!R.isNil(itemInformation.savedItemsState) ? this.renderContentOfFeed(type, itemInformation) : this.renderContentOfFeedEmpty()}

            </div>
        )
    }

    renderContentOfFeedEmpty(){
        return(
            <div style={ styles.contentColumn }>
                <div>There are no activities</div>
            </div>
        )
    }

    renderContentOfFeed(type, itemInformation){
        return(
            <div style={ styles.contentColumn }>
                { R.addIndex(R.map)((item, i) => this.getInformationByType(type,item).funcRender(i), itemInformation.savedItemsState )}
            </div>
        )
    }

    getTypeOfFeed(){
        if(R.isNil(this.props.type)) return this.props.location.pathname;
        else return this.props.type;
    }

    updateFeed() {
        let listElm = this.feedContainer;
        if (listElm.scrollTop + listElm.clientHeight + 50 >= listElm.scrollHeight && this.state.hasMoreItems) {
            this.setState({ready:false})
            this.loadGeneralFeed().then( () =>{
                this.setState({ready:true});
            });
        }

        if(listElm.scrollTop > ( 1.5 *  window.innerHeight)) this.setState({activeArrowGoToUpContainer: true});
        else this.setState({activeArrowGoToUpContainer: false});
    }


    undoArrowGoToUpContainer(){
        undoArrowToTopInCornerBottomRight(this.props.cubeInstance,'feed')
    }


    renderArrowGoToUpContainer(){
        let props = {
             styleArrow: styles.arrowToGoUpStyle,
             funcClick: () => this.goToUpContainer(),
        }
        renderArrowToTopInCornerBottomRight(this.props.cubeInstance, ArrowToUp, props, 'feed')
    }

    goToUpContainer(){
        let listElm = this.feedContainer;
        listElm.scrollTop = 0;
    }



    renderCard(socialCard,i) {
        return(
            <Card
                key             = {`cardItem${i}-${socialCard.type}-${socialCard.item.id}`}
                type            = {socialCard.type}
                item            = {socialCard.item}
                cubeInstance    = {this.props.cubeInstance}
                history         = {this.props.history}
            />
        )
    }

    renderActivity(activity, i) {
        return(
            <Activity
                key  = {`activityItem${i}-${activity.action.type}-${activity.id}`}
                activity        = {activity}
                cubeInstance    = {this.props.cubeInstance}
                history         = {this.props.history}
            />
        )
    }

    getInformationByType(type,item,myFilterSearch, userIdUpdated){
        return R.cond([
                    [ R.equals('/discover/'),       R.always({selectedTab: 'discover',
                                                              text: CONSTANTS.FEED.DISCOVER,
                                                              apiCall: () => this.apiCallDiscover(myFilterSearch),
                                                              savedItemsState: this.state.socialEntities,
                                                              savedItems: 'socialEntities',
                                                              funcRender: (i) => this.renderCard(item,i),
                                                              funcGoToUp: () => this.goToUpContainer.bind(),
                                                            })],
                    [ R.equals('/news/'),           R.always({selectedTab: 'news',
                                                              text: CONSTANTS.FEED.NEWS,
                                                              apiCall: () => this.apiCallNews(),
                                                              savedItemsState: this.state.activities,
                                                              savedItems: 'activities',
                                                              funcRender: (i) => this.renderActivity(item,i),
                                                              funcGoToUp: () => this.goToUpContainer.bind(),
                                                            })],
                    [ R.equals('timeline'),           R.always({selectedTab: 'timeline',
                                                              text: CONSTANTS.FEED.TIMELINE,
                                                              apiCall: () => this.apiCallTimeline(userIdUpdated),
                                                              savedItemsState: this.state.timelineItems,
                                                              savedItems: 'timelineItems',
                                                              funcRender: (i) => this.renderActivity(item,i),
                                                              funcGoToUp: () => {},
                                                            })],
                    [ R.T,                          R.I],
        ])(type);
    }


    apiCallTimeline(userIdUpdated){
        let userId = !R.isNil(userIdUpdated) ? userIdUpdated : this.props.userId;
        let url = this.props.isMyTimeline
            ? 'user/feeds/timeline'
            : `users/${userId}/feeds/timeline`

        return Promise.all([
            api.get(url, {limit:this.limit, offset: this.offset})
        ])
    }

    apiCallDiscover(myFilterSearch){
        // myFilterSearch = myFilterSearch[0] === 'ALL' ? ['BOARD', 'WEBLINK', 'USER'] : myFilterSearch;

        return Promise.all([
            api.get('user/feeds/discover', { limit:this.limit, offset: this.offset, types: myFilterSearch })
        ])
    }

    apiCallNews(){
        return Promise.all([
            api.get('user/feeds/news', {limit:this.limit, offset: this.offset})
        ])
    }


    loadGeneralFeed(myFilter, userIdUpdated) {
      let myFilterSearch = R.isNil(myFilter) ? this.props.filter : myFilter;
      let isFromFilter = R.isNil(myFilter) ? false : true;
      let type = this.getTypeOfFeed();
      let itemInformation = this.getInformationByType(type, null, myFilterSearch, userIdUpdated)

      return itemInformation.apiCall().then(([data]) => {
            if(data.length === 0) {
                if(!R.isNil(userIdUpdated)) {
                    this.handlerSetState(itemInformation.savedItems, []);
                }
                this.handlerSetState('hasMoreItems', false)
            }
            else {
                if(!isFromFilter) {
                    let allData = R.concat(itemInformation.savedItemsState, data);
                    this.handlerSetState(itemInformation.savedItems, allData);
                }
                else{
                    this.handlerSetState(itemInformation.savedItems, data);
                }
            }
                this.offset = this.offset + this.limit
        })
    }

    handlerSetState(type, value){
        this.setState({[type]: value});
    }
}

export default Feed;
