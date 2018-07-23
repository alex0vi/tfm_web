'use strict';

let ReactDOM = require('react-dom');

import R                        from 'ramda';
import React, {PureComponent}   from 'react';
import PropTypes                from 'prop-types';
import {connect}                from 'react-redux';
import {bindActionCreators}     from 'redux';
import Radium                   from 'radium';
import autobind                 from 'autobind-decorator';

import Dropdown                 from './components/Dropdown';
import IconImageButton          from './components/IconImageButton';
import Notifications            from './components/Dropdown/components/Notifications';
import Channels                 from './components/Dropdown/components/Channels';
import QuickLinks               from './components/Dropdown/components/QuickLinks';
import Profile                  from './components/Dropdown/components/Profile';
import SearchEngines            from './components/Dropdown/components/SearchEngines';

const KEYBOARD                      = require('../../../js/devel/constants/keyboardKeys/constants');
const CUBE_TYPES                    = require('../../../js/devel/constants/cubeTypes/cubeTypesConstants');
const { FS_TYPES }                  = require('../../../js/devel/constants/fileSystem/constants');
const {AVALIABLE_SEARCH_ENGINES}    = require('../../../js/devel/constants/topBarDropDownButtons/topBarDropDownButtons');

const USER_SETTINGS                 = require('../../../js/devel/modules-system/module-user-settings');
const {getSearchSpecs}              = require('../../../js/devel/modules-system/desktop-functions/lib/desktop');
const {CSSTransition, TransitionGroup} = require('react-transition-group'); // ES5 with npm
import SlideEffect                  from '../../TransitionEffects/SlideEffect.js'
import FadeEffect                   from '../../TransitionEffects/FadeEffect.js'

const _debounce                 = require('lodash.debounce');
const _throttle                 = require('lodash.throttle');



const componentsMap = {
    notifications:      <Notifications  />,
    messages:           <Channels       />,
    quickLinks:         <QuickLinks     />,
    searchEngines:      <SearchEngines  />,
    profile:            <Profile        />,
};



const mapStateToProps = (state, ownProps) => {

    return {
        searchEngine       :    state.user.searchEngine,
        avatar             :    state.user.avatar,
    }
};


function getMethods(obj)
{
    var res = [];
    for(var m in obj) {
        if(typeof obj[m] == "function") {
            res.push(m)
        }
    }
    return res;
}


@connect(mapStateToProps, null)
@Radium
class AddapsTopBar extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            showDropdown:   false,
            component:      null,
            searchText:     '',
        };

        this.onCloseDropDown     = this.onCloseDropDown.bind(this);
        this.renderDropDown      = this.renderDropDown.bind(this);
        this.topBarInputEvent    = this.topBarInputEvent.bind(this);
        this.onClickIcon         = this.onClickIcon.bind(this);
        this.isSameComponentOpen = this.isSameComponentOpen.bind(this);

        this.onClickIcon         = _throttle(this.onClickIcon,      500, {leading:true, trailing:false});

        let hola = getMethods(this); // todo: make an autobind with this.
        console.log("addaps top bar", hola);
    }


    render() {
        return (
                <div className="addaps-navbar">

                    { /* Brand logo*/ }
                    <div className="top-bar-sides top-bar-left-side">

                        <a className="nav-adapps-logo" style={{backgroundImage: 'url('+'./multimedia/images/logos/newLogos/logo_HN.svg'+')'}} />

                        { /* Back forward buttons */}
                        <div className="undo-redo">
                            <div className="undo-triangle" />
                            <div className="redo-triangle" />
                        </div>

                    </div>


                    { /* Zone Center */ }
                    <div className={'top-bar-center'}>


                        <div className='search-container'>
                            { /* Search engines */ }
                            <IconImageButton
                                classNames      = { 'search-engine-container' }
                                id              = { 'search-engine-container' }
                                onClickIcon     = { () => this.onClickIcon('searchEngines') }
                                renderDropDown  = { this.renderDropDown('searchEngines', 'search-engine-container') }
                                classNameIcon   = { 'search-options-dropdown' }
                                isImage         = { true }
                                imageUrl        = { AVALIABLE_SEARCH_ENGINES[this.props.searchEngine].src }
                                dropdownIsOpen  = { () => this.isSameComponentOpen('searchEngines')}
                            />


                            { /* Input search */ }
                            <div className={'input-search-engine-container'}>
                                <input
                                    id          =   "input_search_engine"
                                    placeholder =   'Search or type adress'
                                    value       =   { this.state.searchText }
                                    onChange    =   { (e) => this.setState({searchText: e.target.value }) }
                                    onKeyDown   =   { (e) => this.topBarInputEvent(e) }
                                />
                            </div>
                        </div>


                        { /* quickLinks */}
                        <IconImageButton
                            classNames      = { 'quickLinks-container' }
                            id              = { 'quicklinks-zone' }
                            onClickIcon     = { () => this.onClickIcon('quickLinks') }
                            renderDropDown  = { this.renderDropDown('quickLinks', 'quicklinks-zone') }
                            classNameIcon   = { 'icon-wrapper type-icon' }
                            iconName        = { 'glyphicon glyphicon-th glypicon-apps' }
                            styles          = { { fontSize: '20px' } }
                        />


                    </div>



                    { /* Zone Right */}
                    <div className="top-bar-sides top-bar-right-side">

                        { /* Social */ }
                        <IconImageButton
                            classNames      = { 'top-bar-social-button addaps-navbar-icon' }
                            classNameIcon   = { 'icon-wrapper type-icon icon-c' }
                            iconName        = { 'icon ion-android-people' }
                            title           = { 'Social' }
                            onClickIcon     = { () => USER_SETTINGS.isGuestMode() ? USER_SETTINGS.alertGuestMode() : USER_SETTINGS.getAddaps().addCubeToBoard({ type: CUBE_TYPES.CUBE_SOCIAL, spec: { subType: 'Social'} }) }
                        />


                        { /* Library */ }
                        <IconImageButton
                            classNames      = { 'top-bar-my-folder addaps-navbar-icon' }
                            id              = { 'boards-options' }
                            classNameIcon   = { 'icon-wrapper type-icon icon-c' }
                            iconName        = { 'icon ion-folder' }
                            title           = { 'Library' }
                            onClickIcon     = { () => USER_SETTINGS.isGuestMode() ? USER_SETTINGS.alertGuestMode() : USER_SETTINGS.getAddaps().addCubeToBoard({ type: CUBE_TYPES.CUBE_SINGLE_FOLDER, spec: { fileSystem: FS_TYPES.BOARDS   }} ) }
                        />


                        { /* Notifications */ }
                        <IconImageButton
                            classNames      = { 'top-bar-messages addaps-navbar-icon' }
                            id              = { 'notifications-options' }
                            onClickIcon     = { () => this.onClickIcon('notifications') }
                            renderDropDown  = { this.renderDropDown('notifications', 'notifications-options') }
                            classNameIcon   = { 'icon-wrapper type-icon icon-a' }
                            iconName        = { 'ion-earth' }
                            title           = { 'Notifications' }
                            showDropdown    = { this.state.showDropdown }
                        />


                        { /* Messages */ }
                        <IconImageButton
                            classNames      = { 'top-bar-messages addaps-navbar-icon' }
                            id              = { 'messages-options' }
                            onClickIcon     = { () => this.onClickIcon('messages') }
                            renderDropDown  = { this.renderDropDown('messages', 'messages-options') }
                            classNameIcon   = { 'icon-wrapper type-icon icon-b' }
                            iconName        = { 'ion-android-chat' }
                            title           = { 'Chat' }
                            showDropdown    = { this.state.showDropdown }
                        />



                        { /* Profile */ }
                        <IconImageButton
                            classNames      = { 'top-bar-user-settings addaps-navbar-icon icon-b' }
                            id              = { 'profile-options' }
                            onClickIcon     = { () => this.onClickIcon('profile') }
                            renderDropDown  = { this.renderDropDown('profile', 'profile-options') }
                            classNameIcon   = { 'icon-wrapper type-img' }
                            styles          = { { borderRadius: '50%', width: '24px' } }
                            title           = { 'Profile' }
                            isImage         = { true }
                            imageUrl        = { this.props.avatar.xs }
                        />

                    </div>

                </div>
        );
    }

    renderDropDown(component, id) {
        // console.log("render dropdown", { component, propsComp: this.state.component, propsShowDropdown: this.state.showDropdown});
        if(this.state.component !== component || !this.state.showDropdown) return null;

        return (
                <SlideEffect key={component}>
                    <Dropdown
                        dropdownButtonId={id}
                        classDropDown={ `dropdown-${this.state.component}` }
                        visible={ this.state.showDropdown }
                        onClose={ () => this.onCloseDropDown() }
                    >
                        { componentsMap[this.state.component] }
                    </Dropdown>
                </SlideEffect>

        )
    }


    onClickIcon(name) {
        let isSameIcon = name === this.state.component;

        if(!this.state.showDropdown){
             if(isSameIcon){
                 this.setState({
                     showDropdown: false,
                     component: null,
                 })
             }else{
                 this.setState({
                     showDropdown: true,
                     component: name,
                 })
             }

        }else{
            this.setState({
                showDropdown: false,
                component: null,
            })
        }
    }

    onCloseDropDown() {
        this.setState({
            showDropdown: false,
            component: null,
        })
    }

    isSameComponentOpen(id){
        console.log("is same component", this.state);
        return this.state.showDropdown && this.state.component === id;
    }


    /**
     * Event listener for the top bar search input. It gets the value from the input and opens a cube with the search
     * @param event
     */
    topBarInputEvent(event) {
        if (event.keyCode === KEYBOARD.KEY_ENTER) {
            this.openSearchCube(this.state.searchText)
        }
    };

    openSearchCube(val) {
        let spec = getSearchSpecs(val);
        return USER_SETTINGS.getActiveBoard().addCube({spec:spec, type: CUBE_TYPES.CUBE_WEBVIEW });
    };
}

export default AddapsTopBar;
