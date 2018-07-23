'use strict';

let ReactDOM = require('react-dom');

import React, {PureComponent}       from 'react';
import {Provider}                   from 'react-redux'
import {connect}                    from 'react-redux';
import Radium                       from 'radium';
import R                            from 'ramda';
import {bindActionCreators}         from 'redux';
import MuiThemeProvider             from 'material-ui/styles/MuiThemeProvider';

// import {COLORS}                       from '../../../../globals/colors.js';
import CONSTANTS                    from '../../../../globals/constants.js'

import ButtonSettings               from '../../components/ButtonSettings';
import InputTextItem                from '../../components/InputTextItem';

// import Loading                      from '../../../../components/Loading';
import PopUpWallpaper               from '../../../../components/PopUpWallpaper';

import USER_SETTINGS                from '../../../../../../app/js/devel/modules-system/module-user-settings';

import {openImageWallpaperPopUp}         from '../../../../../js/devel/entities/cubes/reactCubes/Functions/ReactToElectron.js';
import {closeImageWallpaperPopUp}        from '../../../../../js/devel/entities/cubes/reactCubes/Functions/ReactToElectron.js';


import SelectWithWrapper            from './components/SelectWithWrapper';

import {setUser}                    from '../../../../../store/actionsCreators/user/setUser';
import {setCubeDesigner}            from '../../../../../store/actionsCreators/user/setCubeDesigner';
import {setSearchEngine}            from '../../../../../store/actionsCreators/user/setSearchEngine';

import {
    MAX_NUMBERS_WIDTH_AND_HEIGHT,
    DEFAULT_LANGUAGE,
    OPENING_DIRECTIONS,
    CUBE_SIZES,
    ELEM_SEARCH,
    MAP_ELEM_SEARCH,
    OPENING_DIRECTIONS_MAP,
    isPredefinedSize,
    isEqualToPredefinedSize,
    getBoardBackground,
    differenceBetweenStringsInNumbers
} from './services';

const api                           =   require('../../../../../../app/js/devel/modules-system/api-calls').apiv2;

const mapStateToProps = (state, ownProps) => {

    return {
        myself: state.user,
    }
}

const mapDispatchToProps = dispatch => {

    return bindActionCreators({
        dispatchSetMyself:          setUser,
        dispatchSetCubeDesigner:    setCubeDesigner,
        dispatchSetSearchEngine:    setSearchEngine,
    }, dispatch)
};


@connect(mapStateToProps, mapDispatchToProps)
@Radium
class General extends PureComponent {

    constructor(props){
        super(props)

        let {cubeDesigner} = props.myself.desktopSystem;

        this.state = {
            sizeValue:              '',
            openingDirectionValue:  '',
            languageValue:          '',
            heightValue:            cubeDesigner.cubeSize.height,
            widthValue:             cubeDesigner.cubeSize.width,
            searchEngine:           '',
            ready:                  false,
            updateReady:            true,
        };

        this.checkedIsUserLogged                = this.checkedIsUserLogged.bind(this);
        this.callApiToUpdateSettings            = this.callApiToUpdateSettings.bind(this);
        this.onChangeSelectWithWrapper          = this.onChangeSelectWithWrapper.bind(this);
        this.onChangeTextInput                  = this.onChangeTextInput.bind(this);
        this.openPopUpWallpaper                 = this.openPopUpWallpaper.bind(this);
    }


    render() {
        let CubeDesigner = this.props.myself.desktopSystem.cubeDesigner;
        let isDisabledTextInput;

        if(!R.isNil(this.state.sizeValue) && !R.isEmpty(this.state.sizeValue) && R.equals(this.state.sizeValue.label, 'Manual')){
            isDisabledTextInput = false
        }
        else{
            isDisabledTextInput = true
        }

        let auxStyleInputSize = isDisabledTextInput ? {color : 'rgb(158, 158, 158)'} : {}

        if(R.isEmpty(this.props.myself)) {
            return (
                <div className={'settingsContainerGeneral'}>
                    <div className={'loading'}>
                        <img alt="loading..." src='./multimedia/images/not-avaliable/loader-dual-ring.gif'/>
                    </div>
                </div>
            )
        }

        let predefinedSize = isPredefinedSize( CubeDesigner.cubeSize.width, CubeDesigner.cubeSize.height)

        return(
            <div className={'settingsContainerGeneral'}>
                <div className={'contentWrapper'}>

                    { /* Language */ }
                    <div className= {'section'}>
                        <span className={'sectionTitle'}>{CONSTANTS.SETTINGS.LANGUAGE_TEXT}</span>
                        <div className={'sectionBody'} style = {{height: 80}}>
                               <SelectWithWrapper
                                   textTitle    = {'Language'}
                                   style        = {{height:80 }}
                                   value        = {this.state.languageValue}
                                   options      = {CONSTANTS.LANGUAGES}
                                   resetValue   = {DEFAULT_LANGUAGE}
                                   placeholder  = {DEFAULT_LANGUAGE.label}
                                   onChange     = {(value) => this.onChangeSelectWithWrapper('languageValue', value)}
                                   noResultsText= {'More languages coming soon'}
                               />
                        </div>
                    </div>

                    { /* search engine */ }
                    <div className= {'section'}>
                        <span className={'sectionTitle'}>{CONSTANTS.SETTINGS.SEARCH_ENGINE_TEXT}</span>
                        <div className={'sectionBody'} style = {{height: 80}}>
                            <SelectWithWrapper
                                textTitle = {CONSTANTS.SETTINGS.SEARCH_ENGINE_TEXT}
                                style = {{height:80 }}
                                value={this.state.searchEngine}
                                options = {ELEM_SEARCH}
                                resetValue = {MAP_ELEM_SEARCH[this.props.myself.searchEngine]}
                                placeholder = {MAP_ELEM_SEARCH[this.props.myself.searchEngine].label}
                                onChange = {(value) => this.onChangeSelectWithWrapper('searchEngine', value)}
                            />
                        </div>
                    </div>

                    { /* default wallpaper */ }
                    <div className= {'section'}>

                        <span className={'sectionTitle'}>{CONSTANTS.SETTINGS.DEFAULT_WALLPAPER}</span>

                        <div className={'sectionBody'} style = {{height: 150, display: 'flex', justifyContent:'space-between', alignItems: 'center'}}>
                            {this.renderWallpaperDefault()}
                            <div
                                className={'buttonUpdateWallpaper'}
                                onClick = {() => this.openPopUpWallpaper()}
                            >
                                Update wallpaper
                            </div>
                        </div>
                    </div>

                    { /* Cube designer */ }
                    <div className= {'section'}>

                        <span className={'sectionTitle'}>{CONSTANTS.SETTINGS.CUBE_DESIGNER_TEXT}</span>

                        <div className={'sectionBody'} style = {{height: 250}}>
                                <SelectWithWrapper
                                    textTitle        = {'Open cubes'}
                                    style            = {{height:80 }}
                                    value            = {this.state.openingDirectionValue}
                                    options          = {OPENING_DIRECTIONS}
                                    resetValue       = {OPENING_DIRECTIONS_MAP[CubeDesigner.openingDirection]}
                                    placeholder      = {OPENING_DIRECTIONS_MAP[CubeDesigner.openingDirection].label}
                                    onChange         = {(value) => this.onChangeSelectWithWrapper('openingDirectionValue', value)}
                                />
                                <SelectWithWrapper
                                    textTitle = {'Size of cubes'}
                                    style = {{height:80 }}
                                    value={this.state.sizeValue}
                                    options={CUBE_SIZES}
                                    resetValue = {predefinedSize}
                                    placeholder = {predefinedSize.label}
                                    onChange = {(value) => this.onChangeSelectWithWrapper('sizeValue', value)}
                                />

                            <div style = {{height: 100, width: '100%', position:'relative', display: 'flex'}}>

                                <InputTextItem
                                    textlabelInput   = 'Height'
                                    type             = 'stringType'
                                    options          = {{blocks: [MAX_NUMBERS_WIDTH_AND_HEIGHT], delimiter: '.', numericOnly: true}}
                                    placeholder      = {CubeDesigner.cubeSize.height}
                                    value            = {this.state.heightValue}
                                    onChange         = {(value) => this.onChangeTextInput('heightValue', value)}
                                    style            = {[{width:'calc(45% - 55px)'}, auxStyleInputSize]}
                                    letters          = {differenceBetweenStringsInNumbers(this.state.heightValue)}
                                    disabled         = {isDisabledTextInput}
                                />

                                <InputTextItem
                                    textlabelInput   = 'Width'
                                    type             = 'stringType'
                                    options          = {{blocks: [MAX_NUMBERS_WIDTH_AND_HEIGHT], delimiter: '.', numericOnly: true}}
                                    placeholder      = {CubeDesigner.cubeSize.width}
                                    value            = {this.state.widthValue}
                                    onChange         = {(value) => this.onChangeTextInput('widthValue', value)}
                                    style            = {[{width:'calc(45% - 55px)', right: 40}, auxStyleInputSize]}
                                    letters          = {differenceBetweenStringsInNumbers(this.state.widthValue)}
                                    disabled         = {isDisabledTextInput}
                                />

                            </div>
                        </div>
                    </div>
                </div>

                <div className={'wrapperButtonSettings'}>
                    <ButtonSettings
                        onClickButton   = { () => this.checkedIsUserLogged() }
                        name            = { 'UPDATE SETTINGS' }
                        buttonStyles    = {{ height: 45, marginLeft: 15, marginRight: 15, flex: 1, marginBottom:4}}
                        updateReady     = {this.state.updateReady}
                    />
                </div>

            </div>
        )
    }


    renderWallpaperDefault(){
        let background = getBoardBackground(this.props.myself.defaultBoardBackground.type, this.props.myself.defaultBoardBackground)
        return(
            <div className={'defaultWallpaper'} style={background}/>
        )
    }


    openPopUpWallpaper(){
        let props = {
            type:           'WALLPAPER_DEFAULT',
            onClick:        () => {this.closePopUpWallpaper()},
            cubeInstance:   this.props.cubeInstance,
        };
        openImageWallpaperPopUp(this.props.cubeInstance, PopUpWallpaper, props );
    }


    closePopUpWallpaper(){
        let props = {
            type:           'WALLPAPER_DEFAULT',
            onClick:        () => {this.closePopUpWallpaper()},
            cubeInstance:   this.props.cubeInstance,
        };
        closeImageWallpaperPopUp(this.props.cubeInstance, props)
    }


    onChangeTextInput(state, value){
        if(R.toString(value).length <= MAX_NUMBERS_WIDTH_AND_HEIGHT ) this.setState({[state]: value})
    }


    onChangeSelectWithWrapper(state, value) {
        if(R.equals(state, 'sizeValue')) {
            if(R.equals(value.label, 'Manual')){
                this.setState({
                    [state]:        value,
                    heightValue:    '',
                    widthValue:     ''
                })
            }
            else{
                this.setState({
                    [state]:        value,
                    heightValue:    value.value.height,
                    widthValue:     value.value.width
                })
            }
        }
        else {
            this.setState({[state]: value});
        }
    }


    checkedIsUserLogged(){
        return USER_SETTINGS.isGuestMode() ? Promise.resolve() : this.callApiToUpdateSettings();
    }


    callApiToUpdateSettings(){
        this.setState({updateReady: false});

        let CubeDesigner = this.props.myself.desktopSystem.cubeDesigner;

        let body = {};
        let cubeDesigner = {}
        let cubeSize = {}

        if(!R.isNil(this.state.openingDirectionValue) && !R.isEmpty(this.state.openingDirectionValue))   {
            cubeDesigner['openingDirection'] = this.state.openingDirectionValue.value;
        }

        if(!R.isNil(this.state.heightValue)) {
            if(!R.isEmpty(this.state.heightValue)) cubeSize['height'] = this.state.heightValue;
            else cubeSize['height'] = this.state.heightValueReset;
        }

        if( !R.isNil(this.state.widthValue) ) {
            if(!R.isEmpty(this.state.widthValue)) cubeSize['width'] = this.state.widthValue;
            else cubeSize['width'] = this.state.widthValueReset;
        }

        if(!R.isEmpty(cubeSize))cubeDesigner['cubeSize'] = cubeSize;
        if(!R.isNil(cubeDesigner) && !R.isEmpty(cubeDesigner)) body = {'desktopSystem': {'cubeDesigner': cubeDesigner}}
        if(!R.isNil(this.state.searchEngine) && !R.isEmpty(this.state.searchEngine)) body['searchEngine'] = this.state.searchEngine.value;

        return api.patch("user", body).then((data) => {
            // USER_SETTINGS.setCubeDesignerSize( this.state.widthValue, this.state.heightValue);

            let openingDirection = !R.isNil(this.state.openingDirectionValue) && !R.isEmpty(this.state.openingDirectionValue) ? this.state.openingDirectionValue.value : CubeDesigner.openingDirection;

            let cubeDesigner = {
                openingDirection: openingDirection,
                cubeSize: {
                    width: this.state.widthValue,
                    height: this.state.heightValue,
                }
            }

            this.props.dispatchSetCubeDesigner(cubeDesigner)

            if(!R.isNil(this.state.searchEngine) && !R.isEmpty(this.state.searchEngine)) this.props.dispatchSetSearchEngine(this.state.searchEngine.value);

            this.props.dispatchSetMyself(data);

            this.setState({
                updateReady: true,
                searchEngine: '',
                sizeValue: '',
                languageValue:'',
                openingDirectionValue: ''
            });
        });
    }
}




export default General;
