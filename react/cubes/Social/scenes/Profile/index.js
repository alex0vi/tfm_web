'use strict';

import React, {PureComponent}       from 'react';
import R                            from 'ramda';
import Radium                       from 'radium';
import autobind                     from 'autobind-decorator';
import {connect}                    from 'react-redux';
import {bindActionCreators}         from 'redux';

import MuiThemeProvider             from 'material-ui/styles/MuiThemeProvider';

import {setUser}                    from '../../../../../store/actionsCreators/user/setUser.js';
import {COLORS}                       from '../../../../globals/colors.js'
import CONSTANTS                    from '../../../../globals/constants.js';
import Loading                      from '../../../../components/Loading';
import PopUpShare                   from '../../../../components/PopUpShare';
import ProfileInformation           from './components/Header';
import Boards                       from './scenes/Boards';
import Contacts                     from './components/Contacts';
import Feed                         from '../../../../components/Feed'
import ArrowToUp                    from '../../../../AddapsComponents/ArrowToUp'
import {setActiveTab}               from '../../../../../store/actionsCreators/social/setActiveTab';
import AddapsText                   from '../../../../AddapsComponents/AddapsText';

const api           =   require('../../../../../../app/js/devel/modules-system/api-calls').apiv2;

import {renderArrowToTopInCornerBottomRight, undoArrowToTopInCornerBottomRight}         from '../../../../../js/devel/entities/cubes/reactCubes/Functions/ReactToElectron.js';


let styles = {
    containerWrapper:{
        display:'flex',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    container: {
        display: 'flex',
        flex: 1,
        overflow: 'scroll',
        backgroundColor: '#ececec',
        justifyContent: 'center',
    },
    contentColumn: {
        width: '850px',
        flexDirection: 'column'
    },
    headerContainer: {
        position: 'relative',
        display: 'inline',
    },
    tabBarStyle:{
        height: 70,
        width:850 ,
        backgroundColor: 'white',
        display: 'flex',
        paddingLeft: 302,
        boxShadow: '1px 1px 1px 1px rgba(0,0,0,0.12)',
        borderTop: 'solid 1px #d2d2d2',
        zIndex: 2,
    },
    userNameOnScrollAvatarFixed:{
        position:'absolute',
        width:200,
        top:335,
        left:85,
        fontWeight: 600,
        zIndex: 4,
    },
    arrowToGoUpStyle:{
        bottom: 25,
        right: 15,
    },
    editButtonStyle:{
        width: 110,
        marginLeft: 25,
        marginRight: 10,
        fontSize: 13,
        height: 25,
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 64,
        border: '1px solid #d2d2d2',
        cursor: 'pointer',
        zIndex: 3,
    },
    wrapperEditButtonsSaveAndCancel:{
        display: 'inherit',
        width: 290,
        right: -258,
        position: 'relative',
    }
};



const tabSpec = [
    {
        tabValue: CONSTANTS.FEED.TIMELINE_TAB,
        path: 'profile/timeline/',
        component: Feed,
        type: 'timeline'
    },
    {
        tabValue: CONSTANTS.FEED.MY_BOARDS_TAB,
        path: 'profile/boards/',
        component: Boards,
        type: 'boards'
    },
    {
        tabValue: CONSTANTS.FEED.FRIENDS_TAB,
        path: 'profile/friends/',
        component: Contacts,
        type: 'friends'
    },
    {
        tabValue: CONSTANTS.FEED.FOLLOWERS_TAB,
        path: 'profile/followers/',
        component: Contacts,
        type: 'followers'
    },
    {
        tabValue: CONSTANTS.FEED.FOLLOWING_TAB,
        path: 'profile/following/',
        component: Contacts,
        type: 'following'
    },
];

const mapStateToProps = (state, ownProps) => {

    return {
        myself:             state.user,
    }
}

const mapDispatchToProps = dispatch => {

    return bindActionCreators({
        dispatchSetMyself:      setUser,
        dispatchSetActiveTab:   setActiveTab,
    }, dispatch)
};


@connect(mapStateToProps, mapDispatchToProps)
@Radium
class Profile extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            ready: true,
            user: {},
            activeTab: 'Timeline',
            isMyTimeline: false,
            topBarFixed: false,
            posTopBar: null,
            avatarFixed: false,
            askForMoreItems: false,
            activeArrowGoToUpContainer:  false,
            isHoverCubeContent: false,

        }

        this.renderTab = this.renderTab.bind(this);
        this.renderContentOfTabs = this.renderContentOfTabs.bind(this);
        this.updateScrollProfile = this.updateScrollProfile.bind(this);
        this.goToUpProfileContainer = this.goToUpProfileContainer.bind(this);
        this.getUserById = this.getUserById.bind(this);
    }

    componentWillMount(){
        let { myself, location, dispatchSetActiveTab} = this.props;

        if(!R.isNil(location)){
            let activeTabLower = R.split('/', location.pathname)[1];
            let activeTab = R.concat( R.toUpper(R.splitAt(1,activeTabLower)[0]), R.splitAt(1,activeTabLower)[1]);
            if(R.equals(activeTabLower, 'me')) dispatchSetActiveTab('Profile')
            else dispatchSetActiveTab('')
        }


        if(R.equals(location.pathname, "/me/")){
            this.setState({user: myself, isMyTimeline: true})
        }
        else{
             let activeTabLower = R.split('/',location.pathname)[2];
             if(R.equals(activeTabLower,R.toString(myself.id))) this.setState({user: myself, isMyTimeline: true});
             else this.getUserById(activeTabLower);
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        let { myself, location} = this.props;
        if(!R.equals(location.pathname, nextProps.location.pathname)){
            // let { myself} = this.props;
            if(R.equals(nextProps.location.pathname, "/me/")){
                this.setState({user: myself, isMyTimeline: true})
            }
            else{
                 let activeTabLower = R.split('/',nextProps.location.pathname)[2];
                 if(R.equals(activeTabLower,R.toString(myself.id))) this.setState({user: myself, isMyTimeline: true});
                 else this.getUserById(activeTabLower);
                //  this.forceUpdate();
            }
        }
        return true
    }

    render() {
        if(!this.state.ready || R.isEmpty(this.state.user)){
          return (
            <MuiThemeProvider>
              <Loading/>
            </MuiThemeProvider>
          )
        }
        let auxRelativeTabsStyle;
        let userNameOnScrollTabBarFixed;
        let auxAbsoluteTabsStyle;
        if(this.state.topBarFixed){
            auxRelativeTabsStyle = {
                display: 'none',
            }
            auxAbsoluteTabsStyle = {
                display:'flex'
            }
            userNameOnScrollTabBarFixed={
                top:19,
                left:85,
            }
        }
        let firstName = this.state.user.firstName;
        let lastName = this.state.user.lastName;
        let fullname = this.state.user.fullname || `${firstName} ${lastName}`;
        let styleCubeBool;

        if(this.state.isHoverCubeContent) this.props.cubeInstance._$dom.main.closest('.desktop-container').css('overflow','hidden');
        else this.props.cubeInstance._$dom.main.closest('.desktop-container').css('overflow','auto');


        return(
            <div
                className = {'element-with-interaction'}
                style = {styles.containerWrapper}
            >
                <div style = {[styles.tabBarStyle, {position:'absolute', display: 'none'}, auxAbsoluteTabsStyle]}>
                    { this.state.avatarFixed ? <AddapsText style= {[styles.userNameOnScrollAvatarFixed, userNameOnScrollTabBarFixed]}> {fullname}</AddapsText> : null}
                    { R.map(this.renderTab, tabSpec )}
                </div>
                <div
                    style = {[styles.container, {top: styleCubeBool ? 100 : 52 }  ]}
                    onScroll={ this.updateScrollProfile }
                    ref=  { self => this.profileContainer = self}
                    onMouseEnter =  {() => this.handlerSetState('isHoverCubeContent', true)}
                    onMouseLeave = {() => this.handlerSetState('isHoverCubeContent', false)}
                >
                    <div style={ styles.contentColumn }>
                        <div style={styles.headerContainer}>
                            <ProfileInformation
                                user            = { this.state.user}
                                posTopBar       = { this.state.posTopBar}
                                topBarFixed     = { this.state.topBarFixed}
                                avatarFixed     = { this.state.avatarFixed}
                                isMyTimeline    = { this.state.isMyTimeline }
                                cubeInstance    = { this.props.cubeInstance}
                            />

                            <div style = {[styles.tabBarStyle, auxRelativeTabsStyle]}>
                                {this.state.avatarFixed ? <AddapsText style= {styles.userNameOnScrollAvatarFixed}> {fullname}</AddapsText> : null}
                                {R.map(this.renderTab, tabSpec )}
                            </div>
                        </div>
                        <div  style= {[ { display:'inline', width:'70%', position:'relative'}]} >
                                { R.map(this.renderContentOfTabs, tabSpec)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    updateScrollProfile(){
        let listElm = this.profileContainer;

        this.setState({posTopBar: listElm.scrollTop})
        if(listElm.scrollTop >= 315) this.setState({topBarFixed: true});
        else this.setState({topBarFixed: false});
        if(listElm.scrollTop >= 254) this.setState({avatarFixed: true});
        else this.setState({avatarFixed: false});

        if (listElm.scrollTop + listElm.clientHeight + 50 >= listElm.scrollHeight ) {
            this.setState({askForMoreItems: true});
        }
        if(listElm.scrollTop > ( 1.5 *  window.innerHeight)) this.setState({activeArrowGoToUpContainer: true});
        else this.setState({activeArrowGoToUpContainer: false});

    }

    renderContentOfTabs(tabSpec){
        let {component, tabValue, type } = tabSpec;
        let RenderComponent = component;

        let aux;
        if(this.state.activeTab !== 'Timeline'){
            aux = {
                position: 'relative',
                width: 555,
                top: 15,
                left: 297,
            }
        }

        let listElm = this.profileContainer;
        return (
            this.state.activeTab === tabValue ?
                <MuiThemeProvider key = 'MuiThemeProviderProfile'>
                    <div style= {aux}>
                        { this.state.activeArrowGoToUpContainer ? this.renderArrowGoToUpContainer() :  this.undoArrowGoToUpContainer()}
                        <RenderComponent
                            user                = { this.state.user }
                            userId              = { this.state.user.id }
                            isMyTimeline        = { this.state.isMyTimeline }
                            type                = { type }
                            askForMoreItems     = {this.state.askForMoreItems}
                            onPushMoreItems     = {()=> this.onPushMoreItems()}
                            cubeInstance        = {this.props.cubeInstance}
                            history             = { this.props.history }
                        />
                    </div>
                </MuiThemeProvider>
            : null
        )
    }

    onPushMoreItems(){
        this.setState({askForMoreItems: false})
    }

    undoArrowGoToUpContainer(){
        undoArrowToTopInCornerBottomRight(this.props.cubeInstance,'profile')
    }

    renderArrowGoToUpContainer(){
        let props = {
             funcClick: () => this.goToUpProfileContainer(),
             styleArrow: styles.arrowToGoUpStyle,
        }
        renderArrowToTopInCornerBottomRight(this.props.cubeInstance, ArrowToUp, props, 'profile' )
    }

    goToUpProfileContainer(){
        let listElm = this.profileContainer;
        listElm.scrollTop = 0;
        this.updateScrollProfile()
    }

    setActiveTab(tabItem){
        if (this.state.activeTab === tabItem) this.goToUpProfileContainer();
        else this.setState({activeTab: tabItem});
    }


    renderTab(tabSpec) {
        let {component, tabValue, type } = tabSpec;
        let iconBar =  {
            height: '70px',
            backgroundColor: 'white',
            color: this.state.activeTab === tabValue ? COLORS.primary : '#757575',
            width: 110,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 4,
            cursor: 'pointer',
            borderBottom:  this.state.activeTab === tabValue ? 'solid 2px' : null
        }


        return (

            <div
                key={tabValue}
                style={iconBar}
                onClick= {()=>this.setActiveTab(tabValue)}
            >
                { tabValue }
            </div>
        )
    }

    handlerSetState(type, value){
        this.setState({[type]: value});
    }

    getUserById(userId) {
        api.get(`users/${userId}`)
          .then(user => {
            this.setState({
              ready: true,
              user: user,
              isMyTimeline: false,
            })
            this.forceUpdate()
        })
    }
}


Profile.propTypes = {
    // isOpen: React.PropTypes.bool,
    // dispatchOpenAddPostDialog: React.PropTypes.func.isRequired,

};


export default Profile;
