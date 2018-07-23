'use strict';

let ReactDOM = require('react-dom');

import React, {PureComponent}       from 'react';
// import {Provider}                   from 'react-redux'
import {connect}                    from 'react-redux';
import R                            from 'ramda';
import Radium                       from 'radium';

// import {
  // BrowserRouter as Router,
  // Route,
  // Link,
// } from 'react-router-dom';

// import PropTypes                    from 'prop-types';
// import ReactEmoji                   from 'react-emoji';
// import { toArray }                  from 'react-emoji-render';

import GeneralInformation           from './components/GeneralInformation';
import Participants                 from './components/Participants';
import Settings                     from './components/Settings';
import ProfileInformation           from './components/ProfileInformation';
// import {COLORS}                       from '../../../../../../globals/colors.js';
// import {emojify}                    from '../../utils/Emojify';
// import {getTime}                    from '../../../../utils';

// const avatarSize = 30;

const styles = {
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: 300,
        right: 0,
        borderLeft: '1px solid #e0e0e0',
        overflow: 'scroll',
    },
    titleWrapper:{
        position: 'relative',
        height: 40,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: '5px solid #E0E0E0',
    },
    iconCloseWrapper:{
        margin:           5,
        position:         'absolute',
        width:            15,
        height:           15,
        borderRadius:     '50%',
        backgroundColor:  '#E0E0E0',
        cursor:           'pointer',
        color:            'black',
        top:              0,
        left:             0,
    },
    icon:{
        position:       'relative',
        fontSize:       15,
    },
    section:{
        width:'100%',
        margin: '10px 0px',
        borderBottom: '5px solid #E0E0E0',
    },
}


const mapStateToProps = (state, ownProps) => {
    let { activeChannel } =  state.communication;

    return {
        // myself      :   state.userSettings.SESSION_DATA,
        type        :   activeChannel.type,
        channelId   :   activeChannel.item.id,
        title       :   activeChannel.title,
        channels    :   state.communication.channels,
        // messages    :   activeChannel.messages,
    }
}

@connect(mapStateToProps, null)
@Radium
class Information extends PureComponent {

    constructor(props){
        super(props);

        this.state = {
            nameValue   : '',
            editName    : false,
        }

        this.renderSection = this.renderSection.bind(this);
        this.handlerClose = this.handlerClose.bind(this);
    }

    componentWillMount(){
        let {cubeInstance} = this.props;
        let $cube = $(`#${cubeInstance.getDomCube()[0].getAttribute('id')}`);
        let width = $cube.width();
        let minWidth = parseInt($cube.css('min-width'));
        $cube.css('min-width', `${minWidth + 300}px`);
        $cube.css('width', `${width + 300}px`);
    }

    componentWillUnmount(){
        let {cubeInstance} = this.props;
        let $cube = $(`#${cubeInstance.getDomCube()[0].getAttribute('id')}`);
        let width = $cube.width();
        let minWidth = parseInt($cube.css('min-width'));
        $cube.css('min-width', `${minWidth - 300}px`);
        $cube.css('width', `${width - 300}px`);
    }


    render(){
        let {channelType} = this.props;
        let listOfSections = this.getSectionsList(channelType)

        return (
            <div style= {styles.container}>
                <div style = {styles.titleWrapper} >
                    <div
                        style={styles.iconCloseWrapper}
                        onClick= { () => {this.handlerClose()} }
                    >
                        <i className="material-icons" style={styles.icon}>close</i>
                    </div>
                    <span>{`Information ${R.toLower(channelType)}`}</span>
                </div>
                {R.map(this.renderSection,listOfSections)}
            </div>
        );
    }

    getSectionsList(type){
        return R.cond([
            [ R.equals('CONTACT'),        R.always(['GeneralInformation', 'ProfileInformation', 'Settings'])],
            [ R.equals('GROUP'),          R.always(['GeneralInformation', 'Participants', 'Settings'])],
        ])(type);
    }

    getComponentToRender(type){
        return R.cond([
            [ R.equals('GeneralInformation'),        R.always({title: 'General',                component: GeneralInformation,      key:'GeneralInformation'})],
            [ R.equals('Participants'),              R.always({title: 'Participants',           component: Participants,            key:'Participants'})],
            [ R.equals('Settings'),                  R.always({title: 'Settings',               component: Settings,                key:'Settings'})],
            [ R.equals('ProfileInformation'),        R.always({title: 'Profile',                component: ProfileInformation,      key:'ProfileInformation'})],
        ])(type);
    }


    renderSection(type){
        let listOfSections = this.getSectionsList()
        let object = this.getComponentToRender(type)
        let ReactComponent = object.component;
        return(
            <div style={styles.section}>
                <div style = {{margin: '10px 5px'}}>
                    <span>{object.title}</span>
                </div>
                <ReactComponent
                    key = {object.key}
                />
            </div>
        )
    }

    handlerClose(){
        this.props.openInformationSection();
    }

    handlerSetState(state, value){
        this.setState({[state]: value})
    }


}

export default Information;
