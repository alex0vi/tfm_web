import React, {PureComponent}       from 'react';

import R                            from 'ramda';
import Radium                       from 'radium';
import {connect}                    from 'react-redux';
import {bindActionCreators}         from 'redux';
import PropTypes                    from 'prop-types';

import Slide                        from '../../../../ComponentsWithEffects/Slide';

import MoreMenu                     from './components/MoreMenu';
import TopBarChat                   from './components/TopBarChat';


import {openCubeSettings}           from '../../../../../js/devel/entities/cubes/reactCubes/Functions/ReactToElectron.js';
import {openCubeProfile}            from '../../../../../js/devel/entities/cubes/reactCubes/Functions/ReactToElectron.js';

import {setStatus}                  from '../../../../../store/actionsCreators/communication/setStatus';
import {resetCommunication}         from '../../../../../store/actionsCreators/communication/resetCommunication';
import {setWebRTC}                  from '../../../../../store/actionsCreators/webRTC/setWebRTC';
import {setReplaceChannel}          from '../../../../../store/actionsCreators/communication/setReplaceChannel';
import {setActiveChannel}           from '../../../../../store/actionsCreators/communication/setActiveChannel';


import {onSwitchChannel, leaveChannel}            from '../../utils/';


import { getNsMessages}             from '../../../../services/RealTime/';

const listOfSideBars = ['newChat', 'channels', 'newGroupUsers', 'newGroupConfig'];

const chainIndexed = R.addIndex( R.chain )

const getParameters= R.pipe(
    R.split('/'),
    R.drop(2),
    chainIndexed( (x, i) => (i === 0 && R.contains(x,listOfSideBars)) ? [null, x ] : x )
)

const getCubeLabel = R.cond([
  [R.equals('channels'),        R.always('Messages')],
  [R.equals('newChat'),         R.always('New chat')],
  [R.equals('newGroupUsers'),   R.always('New Group')],
  [R.equals('newGroupConfig'),  R.always('New Group')],
  [R.T,                         R.always('Messages')],
]);


const styles = {
    container: {
        height:             40,
        backgroundColor:    'white',
        position:           'absolute',
        top:                0,
        left:               90,
        right:              45,
        display:            'flex',
        alignItems:         'center',
        cursor:             'pointer',
        borderBottom:       '1px solid #e0e0e0',
    },
    leftSideContainer:{
        height:             40,
        display:            'flex',
        alignItems:         'center',
        borderRight:        '1px solid #e0e0e0',
        justifyContent:     'flex-end',
    },
    rightSideContainer:{
        height:             40,
        display:            'flex',
        justifyContent:     'space-between',
    },
    icon:{
        position:           'relative',
        fontSize:           15,
        color:              'black',
    },
    iconTopBar:{
        fontSize:           20,
        height:             20,
        position:           'relative',
        margin:             5,
        color:              '#373737',
    },
    cubeLabel:{
        fontWeight:         'bold',
        fontFamily:         "AvenirNextUltrafina",
        color:              '#373737',
        fontSize:           15,
        paddingRight:       15,
    },
    userActiveName:{
        height:             40,
        alignItems:         'center',
        marginTop:          5,
        marginLeft:         10,
        fontWeight:         '500',
        fontFamily:         "Avenir Next",
        fontSize:           18,
        color:              '#373737',
        overflow:           'hidden',
        textOverflow:       'ellipsis',
        whiteSpace:         'nowrap',
    }
}

const mapStateToProps = (state, ownProps) => {
    let isVideoCubeActive = !R.isNil(state.webRTC.channel);

    return {
        status          :   state.communication.status,
        activeChannel   :   state.communication.activeChannel,
        isVideoCubeActive,
        replaceChannel  :   state.communication.replaceChannel,
    }
}

const mapDispatchToProps = dispatch => {

    return bindActionCreators({
        dispatchResetCommunication     : resetCommunication,
        dispatchSetReplaceChannel      : setReplaceChannel,
    }, dispatch)
};


@connect(mapStateToProps, mapDispatchToProps)
@Radium
class TopBarCommunication extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            moreMenuOptionsLeft         : false,
            moreMenuOptionsRight        : false,
            activeLeftSide              : null,
            activeRightSide             : null,
        }

        this.renderLeftSide = this.renderLeftSide.bind(this);
        this.goBack = this.goBack.bind(this);
        this.onCloseMenu            = this.onCloseMenu.bind(this);
    }

    componentWillMount(){

        if(R.equals( this.props.location.pathname, '/')) this.setState({activeLeftSide: 'channels'});
        else{
            let param = getParameters(this.props.location.pathname);
            this.setState({
                activeLeftSide: R.last(param),
                activeRightSide: R.head(param)
            })
        }
    }

    componentWillReceiveProps(nextProps){
        if (!R.equals(nextProps.location.pathname, this.props.location.pathname)) {
            if(R.equals( nextProps.location.pathname, '/')) this.setState({activeLeftSide: 'channels', activeRightSide: null});
            else{
                let param = getParameters(nextProps.location.pathname);
                this.setState({
                    activeLeftSide: R.last(param),
                    activeRightSide: R.head(param)
                })
            }
        }
        if(!R.isNil(nextProps.replaceChannel)){
            if(R.equals(nextProps.replaceChannel.subType, 'withConversation')){
                this.props.history.push({pathname:`/chat/${nextProps.replaceChannel.channel.item.id}/channels`, state: {item: nextProps.replaceChannel.channel.item, type: nextProps.replaceChannel.channel.type}});
                onSwitchChannel(nextProps.replaceChannel.channel);
                this.props.dispatchSetReplaceChannel(null);
            }
        }
    }

    componentWillUnmount(){
        getNsMessages().leaveRoom(this.props.activeChannel.item.id);
        this.props.dispatchResetCommunication();

    }

    render() {
        let {cubeInstance, status, activeChannel} = this.props;
        return(
            <div
                style = {styles.container}
            >
                {this.renderLeftSide()}

                {
                    /* if we have an opened channel we render the specific top bar */
                    status !== 'INITIAL' ?
                        <TopBarChat
                            openInformationSection      = { () => this.moreMenuClickHandler('moreMenuOptionsRight', this.props.openInformationSection) }
                            cubeInstance                = { this.props.cubeInstance }
                        />
                    :
                        null
                }
            </div>
        )
    }


    renderLeftSide(){
        let {newGroupOpen, isNewGroupOpenConf, history} = this.props;

        let auxStylesMoreVertOpen;
        if(this.state.moreMenuOptionsLeft) auxStylesMoreVertOpen = {backgroundColor: '#E0E0E0', borderRadius: '50%'};

        return(

                <div className="cube-react-top-bar-left-options" style = {styles.leftSideContainer}>
                    { /* back button arrow icon */}
                    {
                        !R.equals('channels', this.state.activeLeftSide) ?
                            <i
                                style ={ [styles.iconTopBar,{margin: 10}] }
                                className="material-icons TopBarButton element-with-interaction"
                                onClick = {() => this.goBack()}
                            >
                                {'arrow_back'}
                            </i>
                        :
                            null
                    }
                    { /* Cube Label */}
                    <div className="cube-react-top-bar-label" style = {styles.cubeLabel}>{getCubeLabel(this.state.activeLeftSide)}</div>

                    {/* option icons left side */}
                    <div style= {{display:'flex', position:'relative' , alignItems:'center', color: '#373737'}}>
                        { /* New chat icon */}
                        {
                            !R.equals('channels', this.state.activeLeftSide) ?
                                null
                            :
                                <i
                                    style ={ styles.iconTopBar }
                                    className= { `${'material-icons'} ${'TopBarButton'} ${'element-with-interaction'}`}
                                    onClick = {() => history.push({ pathname:`/chat/${R.isNil(this.state.activeRightSide) ? '' : this.state.activeRightSide + '/'}newChat` })}
                                >
                                    {'message'}
                                </i>
                        }

                        { /* More options icon */}
                        {
                            !R.equals('channels', this.state.activeLeftSide) ?
                                null
                            :
                                <i
                                    style ={ [styles.iconTopBar, auxStylesMoreVertOpen] }
                                    className= { `${'material-icons'} ${'TopBarButton'} ${'element-with-interaction'}`}
                                    onClick = {() => this.handlerSetState('moreMenuOptionsLeft', !this.state.moreMenuOptionsLeft) }
                                >
                                    {'more_vert'}
                                </i>
                        }


                        { /* Pop up menu General Options communication cube*/}
                        <MoreMenu
                            isVisible       =   { this.state.moreMenuOptionsLeft }
                            cubeInstance    =   { this.props.cubeInstance }
                            onCloseMenu     =   { () => this.onCloseMenu() }
                        >
                            <MoreMenu.Item
                                title           = { 'New Group' }
                                onClick         = { () => this.moreMenuClickHandler('moreMenuOptionsLeft', () => history.push({ pathname:`/chat/${R.isNil(this.state.activeRightSide) ? '' : this.state.activeRightSide + '/'}newGroupUsers` }))}
                            />
                            <MoreMenu.Item
                                title           = { 'Profile' }
                                onClick         = { () => this.moreMenuClickHandler('moreMenuOptionsLeft', openCubeProfile) }
                            />
                            <MoreMenu.Item
                                title           = {'Settings'}
                                onClick         = { () => this.moreMenuClickHandler('moreMenuOptionsLeft', openCubeSettings) }
                            />
                        </MoreMenu>

                    </div>
                </div>
        )
    }

    goBack(){
        let {listOfUsersNewGroup, setStateListOfUsersNewGroup, history} = this.props;
        if(R.equals(this.state.activeLeftSide, 'newGroupUsers')){
            if(!R.isEmpty(listOfUsersNewGroup)) setStateListOfUsersNewGroup([]);
        }
        history.goBack();
    }

    handlerSetState(state, value){
        this.setState({[state]: value})
    }

    moreMenuClickHandler(stateValue, funct){
        funct();
        if(!this.state[stateValue]) this.setState({[stateValue]: true});
        else this.setState({[stateValue]: false});
    }

    onCloseMenu() {
        this.setState({moreMenuOptionsLeft: false})
    }
}


TopBarCommunication.defaultProps = {
    match                       :   {},
    location                    :   {},
    history                     :   {},
    openInformationSection      :   () => console.log('openInformationSection not exist'),
    setStateListOfUsersNewGroup :   () => console.log('setStateListOfUsersNewGroup not exist'),
    listOfUsersNewGroup         :   [],
};

TopBarCommunication.propTypes = {
    match:                          PropTypes.object.isRequired,
    location:                       PropTypes.object.isRequired,
    history:                        PropTypes.object.isRequired,
    openInformationSection:         PropTypes.func,
    setStateListOfUsersNewGroup:    PropTypes.func,
    listOfUsersNewGroup:            PropTypes.array,
};

export default TopBarCommunication;
