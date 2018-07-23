'use strict'

import React, {PureComponent}       from 'react';
import R                            from 'ramda';
import {connect}                    from 'react-redux';
import {bindActionCreators}         from 'redux';
import Radium                       from 'radium';
import autobind                     from 'autobind-decorator';


const api           =   require('../../../../../../app/js/devel/modules-system/api-calls').apiv2;
const ANALYTICS     =   require('../../../../../../app/js/devel/modules-system/module-analytics');

import Loading                      from '../../../../components/Loading';
import ArrowToUp                    from '../../../../AddapsComponents/ArrowToUp'



import Request                      from './components/Request'
import {COLORS}                       from '../../../../globals/colors.js';
import CONSTANTS                    from '../../../../globals/constants.js';

import {renderArrowToTopInCornerBottomRight, undoArrowToTopInCornerBottomRight}         from '../../../../../js/devel/entities/cubes/reactCubes/Functions/ReactToElectron.js';
import {setActiveTab}               from '../../../../../store/actionsCreators/social/setActiveTab';




let styles = {
    container: {
        display: 'flex',
        flex: 1,
        overflow: 'scroll',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#ececec',
        top: 60,
    },
    contentColumn: {
        width: '850px',
        flexDirection: 'column',
        position: 'relative',
    },
    arrowToGoUpStyle: {
        bottom: 25,
        right: 15,
    },
    refreshIconWrpapper:{
        cursor: 'pointer',
        width: '850px',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    refreshIcon: {
        display: 'flex',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyItem:{
        width: '100%',
        height: 80,
        backgroundColor: 'white',
        position: 'relative',
        justifyContent: 'center',
        display: 'flex',
        overflow: 'hidden',
        alignItems: 'center',
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
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
class Requests extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            ready: false,
            requestsItems: [],
            activeArrowGoToUpContainer: false,
            isHoverCubeContent: false,
        }

        this.updateFeed         = this.updateFeed.bind(this);
        this.goToUpContainer    = this.goToUpContainer.bind(this);
    }

    componentWillMount() {

    let {location, dispatchSetActiveTab} = this.props;

        if(!R.isNil(location)){
            let activeTabLower = R.split('/', location.pathname)[1];
            let activeTab = R.concat( R.toUpper(R.splitAt(1,activeTabLower)[0]), R.splitAt(1,activeTabLower)[1]);
            dispatchSetActiveTab(activeTab)
        }

        let type = this.getTypeOfFeed();
        let itemInformation = this.getInformationByType(type)

        this.loadGeneralFeed()
            .then( () => this.setState({ready:true}));
    }


    render() {
        let {cubeInstance} = this.props;

        if(this.state.isHoverCubeContent) cubeInstance._$dom.main.closest('.desktop-container').css('overflow','hidden');
        else cubeInstance._$dom.main.closest('.desktop-container').css('overflow','auto');

        let type = this.getTypeOfFeed();
        let itemInformation = this.getInformationByType(type);

        return (
            <div
                className = {'element-with-interaction'}
                style={styles.container}
                ref = { self => this.feedContainer = self}
                onScroll={ this.updateFeed }
                onMouseEnter =  {() => this.handlerSetState('isHoverCubeContent', true)}
                onMouseLeave = {() => this.handlerSetState('isHoverCubeContent', false)}
            >

                {this.state.activeArrowGoToUpContainer ? this.renderArrowGoToUpContainer() : this.undoArrowGoToUpContainer()}

                <div style={ styles.contentColumn }>
                    <div
                        style={styles.refreshIconWrpapper}
                        onClick= { () => this.refreshRequests(itemInformation) }
                    >
                        <i className="material-icons" style={styles.refreshIcon}>refresh</i>
                    </div>

                    { R.isEmpty(this.state.requestsItems) ? this.renderContentEmpty() : R.map((item) => this.getInformationByType(type,item).funcRender(), itemInformation.savedItemsState )}
                </div>
            </div>
        )
    }

    renderContentEmpty(){
        return(
            <div style = {styles.emptyItem}>
                No new requests
            </div>
        )
    }

    renderRequests(request){
        return(
            <Request
                item            = {request}
                key             = {request.id}
                cubeInstance    = {this.props.cubeInstance}
                history         = {this.props.history}
                refreshItems    = {() => this.refreshRequests()}
            />
        )
    }

    refreshRequests(itemInformation) {
        this.loadGeneralFeed();
    }

    getInformationByType(type,item){
        return R.cond([
                    [ R.equals('/requests/'),   R.always({selectedTab: 'requests',
                                                              text: CONSTANTS.REQUESTS.REQUESTS,
                                                              apiCall: () => this.apiCallRequests(),
                                                              savedItemsState: this.state.requestsItems,
                                                              savedItems: 'requestsItems',
                                                              funcRender: () => this.renderRequests(item),
                                                              funcGoToUp: () => this.goToUpContainer.bind(),
                                                            })],
                    [ R.T,                          R.I],
        ])(type);
    }

    getTypeOfFeed(){
        let {type, location} = this.props;
        if(R.isNil(type)) return location.pathname;
        else return type;
    }

    updateFeed() {
        if(listElm.scrollTop > ( 1.5 *  window.innerHeight)) this.setState({activeArrowGoToUpContainer: true});
        else this.setState({activeArrowGoToUpContainer: false});
    }

    apiCallRequests(){
        return Promise.all([
            api.get('user/friendshipPending/received')
        ])
    }

    loadGeneralFeed() {
        let type = this.getTypeOfFeed();
        let itemInformation = this.getInformationByType(type, null)

        return itemInformation.apiCall().then(([data]) => {
            if(data.length === 0) {
                this.setState({[itemInformation.savedItems]: data });
            }
            else{
                this.setState({[itemInformation.savedItems]: data });
            }
        })
    }



    /**
     * Arrow functions
     */
    undoArrowGoToUpContainer() {
        undoArrowToTopInCornerBottomRight(this.props.cubeInstance)
    }

    renderArrowGoToUpContainer(){
        let props = {
            styleArrow: styles.arrowToGoUpStyle,
            funcClick: () => this.goToUpContainer(),
        }

        renderArrowToTopInCornerBottomRight(this.props.cubeInstance, ArrowToUp, props)
    }

    goToUpContainer() {
        let listElm = this.feedContainer;
        listElm.scrollTop = 0;
    }

    handlerSetState(type, value){
        this.setState({[type]: value});
    }


}

export default Requests;
