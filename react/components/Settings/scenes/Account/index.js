'use strict';

let ReactDOM = require('react-dom');

import React, {PureComponent}       from 'react';
import {Provider}                   from 'react-redux'
import {connect}                    from 'react-redux';
import {bindActionCreators}         from 'redux';
import Radium                       from 'radium';
import R                            from 'ramda';
import Slider                       from'react-slick';
import Select                       from 'react-select';
import u                            from 'updeep';
import addapsMedia                  from '@addaps/addaps_media';

const basePath      = window.location.href.split( '/' ).slice( 0, -2 ).join( '/' );


import {setUser}                        from '../../../../../store/actionsCreators/user/setUser.js';
import InputTextItem                    from '../../components/InputTextItem';
import CONSTANTS                        from '../../../../globals/constants.js';
import {openLightBoxWithComponent}     from '../../../../../js/devel/entities/cubes/reactCubes/Functions/ReactToElectron.js';
import {closeLightBoxWithComponent}    from '../../../../../js/devel/entities/cubes/reactCubes/Functions/ReactToElectron.js';
import UploadedImagesPreviewDialog      from '../../../../components/UploadImage';
import ButtonSettings                   from '../../components/ButtonSettings';

// Be sure to include styles at some point, probably during your bootstrapping
import 'react-select/dist/react-select.css';

const api                           =   require('../../../../../../app/js/devel/modules-system/api-calls').apiv2;
const DEFAULT_PHONE_FORMAT = {label: 'Spain', value: 'ES' ,dial_code: '+34'}


const NUMBER_OF_LETTERS = {
    nameLetters: [50],
    familyNameLetters: [50],
    description: [140],
    phonelenght: 20,
};



const mapStateToProps = (state, ownProps) => {

    return {
        myself:             state.user,
        cubeWidth :         state.reactCubes.settings.cubeWidth,
    }
};

const mapDispatchToProps = dispatch => {

    return bindActionCreators({
        dispatchSetMyself: setUser,
    }, dispatch)
};

@connect(mapStateToProps, mapDispatchToProps)
@Radium
class Account extends PureComponent {

    constructor(props){
        super(props)

        this.state = {
            pointOfInterestImage: null,
            hoverCoverPhoto:  false,
            hoverAvatarPhoto: false,
            nameValue: '',
            familyNameValue: '',
            descriptionValue: '',
            selectedPointsOfInterest: [],
            imageOnMouseDown: null,
            positionOnMouseDown: null,
            updateReady: true,
            countryValue: '',
            countries:  null,
            countriesObjectIndexByIso: null,
            genderValue     : '',
            countriesObjectIndexByDialCode: null,
            teldialCodeValue: '',
            telLocalNumberValue: '',

        };

        this.handleChange = this.handleChange.bind(this);
        this.getMyUserInformation = this.getMyUserInformation.bind(this);
        this.onPressImageButton = this.onPressImageButton.bind(this);
        this.onCloseImageDialog = this.onCloseImageDialog.bind(this);
        this.renderAddNewProfileImage = this.renderAddNewProfileImage.bind(this);
        this.renderAddNewAvatarImage = this.renderAddNewAvatarImage.bind(this);
        this.onHoverCoverPhoto = this.onHoverCoverPhoto.bind(this);
        this.onUnhoverCoverPhoto = this.onUnhoverCoverPhoto.bind(this);
        this.onHoverAvatarPhoto = this.onHoverAvatarPhoto.bind(this);
        this.onUnhoverAvatarPhoto = this.onUnhoverAvatarPhoto.bind(this);
        this.onChangeTextInput = this.onChangeTextInput.bind(this);
        this.setStateSelectValue = this.setStateSelectValue.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
        this.renderPointOfInterest = this.renderPointOfInterest.bind(this);
        this.getPointsOfInterestImage = this.getPointsOfInterestImage.bind(this);
        this.selectPointOfInterestImage = this.selectPointOfInterestImage.bind(this);
        this.onChangeRadioButton = this.onChangeRadioButton.bind(this);
    }

    componentWillMount(){
        let p1 = this.getMyUserInformation();
        let p2 = this.getPointsOfInterestImage();
        api.get("countries").then((data) => {
            let newData = R.map((item) => ({label: item.name, dial_code: item.dialCode, value: item.iso2}) , data)
            let dataObjIndexByIso = R.indexBy(R.prop('value'), newData );
            let dataObjIndexByCode = R.indexBy(R.prop('dial_code'), newData );
            Promise.all([p1, p2]).then(()=> {
                this.setState({
                    selectedPointsOfInterest: this.props.myself.labels,
                    countries: newData,
                    countriesObjectIndexByIso: dataObjIndexByIso,
                    countriesObjectIndexByDialCode: dataObjIndexByCode,
                })
            })
        });
    }

    render(){
        let heightBackgound = 0;
        if(!R.isNil(this.SettingsWrapper)) heightBackgound = (this.SettingsWrapper.offsetWidth / (2.7))
        else heightBackgound = 188;
        let auxImageBackground = { backgroundImage: `url(${this.props.myself.cover.m})`, height: heightBackgound, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}
        let auxImageAvatar     = { backgroundImage: `url(${this.props.myself.avatar.sm})`, width: 100, height: 100, backgroundSize: 'contain', borderRadius: 50, position:'relative', top: -40, left: 20 }
        let myUser = this.props.myself;
        let auxGenderValue = R.isEmpty(this.state.genderValue) ? myUser.gender  : this.state.genderValue

        function SampleNextArrow(props) {
          const {className, style, onClick} = props
          return (
            <div
              className={className}
              style={{...style, position: 'absolute', top: 65,right: -30,  filter: 'invert(40%)' }}
              onClick={onClick}
            ></div>
          );
        }

        function SamplePrevArrow(props) {
          const {className, style, onClick} = props
          return (
            <div
              className={className}
              style={{...style, position: 'absolute', left: -30, filter: 'invert(40%)', top:65}}
              onClick={onClick}
            ></div>
          );
        }

        let settings = {
            dots            : false,
            infinite        : true,
            slidesToShow    : 3,
            swipe           : true,
            arrows          : true,
            draggable       : true,
            nextArrow       : <SampleNextArrow />,
            prevArrow       : <SamplePrevArrow />,
            slidesToScroll  : 1,
            swipeToSlide    : true,
            touchMove       : false,

        }

        if(R.isNil(this.state.pointOfInterestImage) || R.isEmpty(myUser) || R.isNil(this.state.countriesObjectIndexByIso)){
            return (
                <div className={'settingsContainerAccount'}>
                    <div className={'loadingAccountWrapper'}>
                        <img className={'loadingImg'} alt="loading..." src = {addapsMedia.getImagePath(basePath, 'LOADERS', 'LOADER_DUAL_RING')}/>
                    </div>
                </div>
            )
        }

        let valueSelectedResetObj      =  R.isNil(myUser.tel) || R.isNil(myUser.tel.dialCode) ? DEFAULT_PHONE_FORMAT : this.state.countriesObjectIndexByDialCode[myUser.tel.dialCode];
        let valueSelectedReset         =  valueSelectedResetObj.value;
        let valueSelectedObj           =  R.isEmpty(this.state.teldialCodeValue) || R.isNil(this.state.teldialCodeValue) ? valueSelectedResetObj : this.state.countriesObjectIndexByDialCode[this.state.teldialCodeValue];
        let valueSelected              =  valueSelectedObj.value;
        let dialCode                   =  valueSelectedObj.dial_code;

        return(
            <div className = {'settingsContainerAccount'}>
                <div style= {{overflow: 'scroll', width: '100%'}}>
                    <div ref = { self => this.SettingsWrapper = self } className={'wrapperUserImages'}>
                            <div
                                className = {'backgroundImage'}
                                style= {auxImageBackground}
                                onMouseEnter={()=>this.onHoverCoverPhoto()}
                                onMouseLeave={()=>this.onUnhoverCoverPhoto()}
                            >
                                {this.state.hoverCoverPhoto ? this.renderAddNewProfileImage() : null}
                            </div>
                            <div
                                style= {auxImageAvatar}
                                onMouseEnter={()=>this.onHoverAvatarPhoto()}
                                onMouseLeave={()=>this.onUnhoverAvatarPhoto()}
                            >
                                 {this.state.hoverAvatarPhoto ? this.renderAddNewAvatarImage() : null}
                            </div>

                    </div>
                    <div className ={'accountWrapperInputs'}>
                        {/*Name input*/}
                        <div className = {'input'}>
                            <InputTextItem
                                hasSelect       = {false}
                                textlabelInput  = 'Name'
                                type            = 'stringType'
                                options         = {{blocks: NUMBER_OF_LETTERS.nameLetters, delimiter: '.', numericOnly: false}}
                                value           = {this.state.nameValue}
                                onChange        = {(value) => this.onChangeTextInput('nameValue', value)}
                                style           = {{width: '45%', left: 10}}
                                placeholder     = {myUser.firstName}
                                letters         = {this.calcRemainingLetters('nameValue')}
                            />
                            {/*lastName input*/}
                            <InputTextItem
                                hasSelect       = {false}
                                textlabelInput  = 'Family Name'
                                options         = {{blocks: NUMBER_OF_LETTERS.familyNameLetters, delimiter: '.', numericOnly: false}}
                                type            = 'stringType'
                                value           = {this.state.familyNameValue}
                                onChange        = {(value) => this.onChangeTextInput('familyNameValue', value)}
                                style           = {{width: '45%', right: 10}}
                                placeholder     = {myUser.lastName}
                                letters         = {this.calcRemainingLetters('familyNameValue')}
                            />
                        </div>

                        {/*description input*/}
                        <div className = {'input'}>
                            <InputTextItem
                                hasSelect       = {false}
                                textlabelInput  = 'Description'
                                type            = 'stringType'
                                options         = {{blocks: NUMBER_OF_LETTERS.description, delimiter: '.', numericOnly: false}}
                                value           = {this.state.descriptionValue}
                                onChange        = {(value) => this.onChangeTextInput('descriptionValue', value)}
                                style           = {{ left:10, right:10}}
                                placeholder     = {myUser.description}
                                letters         = {this.calcRemainingLetters('descriptionValue')}
                            />
                        </div>

                        {/*country input*/}
                        <div className = {'input'}>
                            <span className ={'labelInput'}>{'Country'}</span>
                            <Select

                              name              =   "form-field-name"
                              wrapperStyle      =   {{width: 'calc(100% - 20px)', left: 10, top: 27, position:'absolute'}}
                              value             =   {this.state.countriesObjectIndexByIso[this.state.countryValue]}
                              options           =   {this.state.countries}
                              resetValue        =   {this.state.countriesObjectIndexByIso[myUser.country]}
                              onChange          =   {(val) => this.setStateSelectCountry(val)}
                              placeholder       =   { R.isEmpty(myUser.country) || R.isNil(myUser.country) ? 'Select select your country...' : this.state.countriesObjectIndexByIso[myUser.country].label}
                            />
                        </div>

                        {/*gender input*/}
                        <div className = {'input'} style = {{height: 70}}>
                            <span className ={'labelInput'}>{'Gender'}</span>
                            <div className={'wrapperGenderInput'}>
                                <div style = {{marginTop: 7}}>
                                    <input className={'inputGender'} type="radio" value={'MALE'}   checked={R.equals('MALE', auxGenderValue)}  onChange={(value) => this.onChangeRadioButton(value)}/>
                                    {'Male'}
                                </div>
                                <div style = {{marginTop: 7}}>
                                    <input className={'inputGender'} type="radio" value={'FEMALE'} checked={R.equals('FEMALE', auxGenderValue)} onChange={(value) => this.onChangeRadioButton(value)}/>
                                    {'Female'}
                                </div>
                                <div style = {{marginTop: 7}}>
                                    <input className={'inputGender'} type="radio" value={'OTHER'}  checked={R.equals('OTHER', auxGenderValue)}  onChange={(value) => this.onChangeRadioButton(value)}/>
                                    {'Other'}
                                </div>
                            </div>
                        </div>

                        {/*phone input*/}
                        <div className = {'input'}>
                            <InputTextItem
                                hasSelect           = {true}
                                textlabelInput      = 'Phone'
                                type                = 'phoneType'
                                options             = {{phone: true , phoneRegionCode: R.toLower(valueSelected) }}
                                placeholder         = { R.isNil(myUser.tel) ? '' : myUser.tel.localNumber }
                                value               = {this.state.phoneValue}
                                style               = {{left:10, right:10}}
                                onChange            = {(value) => this.onChangeTextInput('telLocalNumberValue', value)}
                                disabled            = {false}
                                valueSelected       = {valueSelected}
                                valueSelectedReset  = {valueSelectedReset}
                                setStateSelectValue = {(value) => this.setStateSelectValue(value)}
                                dialCode            = {dialCode}
                            />
                        </div>

                        {/*point of interest input*/}
                        <div style= {{width: '100%', height: 180}}>
                            <span style = {{width: '100%', color: '#9E9E9E'}}>{CONSTANTS.SETTINGS.POI_TEXT}</span>
                            <div style = {[{ width: '85%', height: 120, marginLeft: 30, marginTop: 10 }]}>
                                <Slider {...settings} className={'slider-settings-poi'}>
                                    { R.map( this.renderPointOfInterest, this.state.pointOfInterestImage)}
                                </Slider>
                            </div>
                        </div>
                </div>
            </div>
            <div className = {'buttonWrapper'}>
                <ButtonSettings
                    onClickButton   = { () => this.saveChanges() }
                    name            = {'UPDATE SETTINGS'}
                    buttonStyles    = {{ height: 45, marginLeft: 15, marginRight: 15, flex: 1, marginBottom:10}}
                    updateReady     = {this.state.updateReady}
                />
            </div>
        </div>
        )
    }

    onChangeRadioButton(value){
        this.setState({genderValue: value.currentTarget.value, telLocalNumberValue: ''})
    }

    setStateSelectCountry(value){
        this.setState({countryValue: value.value})
    }

    renderPointOfInterest(imagePoint) {
      let auxOpacityImgIsSelected;
      let isImgSelected = false;
      if(R.contains(imagePoint.name,this.state.selectedPointsOfInterest)){
          auxOpacityImgIsSelected = {opacity: 0.4}
          isImgSelected = true;
      }

      return (
        <div
            key={imagePoint.id}
            className = {'poisImageWrapper'}
            style = {{backgroundImage: `url(${imagePoint.image})`}}
            onMouseDown = { (event) => this.onMouseDownImage(event, imagePoint.name)}
            onMouseUp = {(event) => this.selectPointOfInterestImage(event, imagePoint.name)}
        >
            <span className={'poisWrapperLabels'}>{imagePoint.name}</span>
            {isImgSelected ? this.renderSelectedIcon() : null}
        </div>
      )
    }

    onMouseDownImage(event, imgName){
        this.setState({imageOnMouseDown: imgName, positionOnMouseDown: event.nativeEvent.offsetY})
    }

    selectPointOfInterestImage(event, imgName){
        if(R.equals(this.state.imageOnMouseDown, imgName) && R.equals(event.nativeEvent.offsetY, this.state.positionOnMouseDown)){
            if(!R.contains(imgName,this.state.selectedPointsOfInterest)){
                let newSelectedPointsOfInterest = R.append(imgName, this.state.selectedPointsOfInterest)
                this.setState({selectedPointsOfInterest: newSelectedPointsOfInterest, imageOnMouseDown: null, positionOnMouseDown: null})
            }
            else{
                let index = R.findIndex(el => R.equals(el,imgName))(this.state.selectedPointsOfInterest)
                if(!R.equals(index, -1)){
                    let newSelectedPointsOfInterest = R.remove(index, 1, this.state.selectedPointsOfInterest);
                    this.setState({selectedPointsOfInterest: newSelectedPointsOfInterest, imageOnMouseDown: null, positionOnMouseDown: null})
                }
            }
        }
    }

    renderSelectedIcon(){
        return(
            <div className={'poisOverlayerSelectedWrapper'}>
                <i className="material-icons iconSelected">{CONSTANTS.ICONS.DONE}</i>
            </div>
        )
    }

    getPointsOfInterestImage(){
        return api.get('pois')
        .then( data => {
            this.setState({pointOfInterestImage: data})
        } )
    }

    setStateSelectValue(val) {
        this.setState({teldialCodeValue: val.dial_code})
    }

    getNumberOfLetters(stateValue){
        return R.cond([
                    [ R.equals('nameValue'),             R.always(NUMBER_OF_LETTERS.nameLetters)],
                    [ R.equals('familyNameValue'),       R.always(NUMBER_OF_LETTERS.familyNameLetters)],
                    [ R.equals('descriptionValue'),      R.always(NUMBER_OF_LETTERS.description)],
                    [ R.equals('telLocalNumberValue'),   R.always(NUMBER_OF_LETTERS.phonelenght)],
        ])(stateValue);
    }

    calcRemainingLetters(state){
        return this.getNumberOfLetters(state) - this.state[state].length
    }

    onChangeTextInput(state, value){
        if(value.length <= this.getNumberOfLetters(state))this.setState({[state]: value})
    }

    renderAddNewProfileImage(){
        return(
            <div
                className={'wrapperMssgAdd'}
                onClick={()=>this.onPressImageButton('cover')}
            >
                <i className="material-icons" style = {{fontSize: 45, marginRight: 20}}>{CONSTANTS.ICONS.ADD_PHOTO}</i>
                <span style = {{fontSize: 25}}>{CONSTANTS.USER.CHANGE_COVER_PHOTO}</span>
            </div>
        )
    }


    renderAddNewAvatarImage(){
        return(
            <div
                className={'wrapperMssgAdd'}
                onClick = {()=>this.onPressImageButton('avatar')}
            >
                <i className="material-icons" style = {{fontSize: 20, paddingRight: 6}}>{CONSTANTS.ICONS.ADD_PHOTO}</i>
                <span style = {{fontSize: 12}}>{CONSTANTS.USER.CHANGE_PROFILE_PHOTO}</span>
            </div>
        )
    }

    onCloseImageDialog(type) {
        // let props = {
        //     isOpen:         false,
        //     onClick:        () => this.onCloseImageDialog(type),
        //     type:           'firstPopUp',
        // }
        closeLightBoxWithComponent('uploadImages');
    }

    onPressImageButton(type) {
        let props = {
            isOpen:         true,
            onClick:        () => this.onCloseImageDialog(type),
            type:           'firstPopUp',
            imageType:      type,
        }
        // openImageWallpaperLightBox(null, UploadedImagesPreviewDialog, props);

        openLightBoxWithComponent(<UploadedImagesPreviewDialog {...props}/>, 'Pick a image', 'uploadImages');
    }

    onHoverCoverPhoto(){this.setState({hoverCoverPhoto: true})}
    onUnhoverCoverPhoto(){this.setState({hoverCoverPhoto: false})}
    onHoverAvatarPhoto(){this.setState({hoverAvatarPhoto: true})}
    onUnhoverAvatarPhoto(){this.setState({hoverAvatarPhoto: false})}

    getMyUserInformation(){

        this.setState({
            user: this.props.myself,
        })
    }

    handleChange() {
        this.setState({value: event.target.value});
    }

    saveChanges(){
        let updateTelNumber = !R.isNil(this.state.telLocalNumberValue) && !R.isEmpty(this.state.telLocalNumberValue);
        let updateTelDialCode = !R.isNil(this.state.teldialCodeValue) && !R.isEmpty(this.state.teldialCodeValue);
        let updateTel = updateTelNumber || updateTelDialCode;
        let valueSelectedResetObj      =  R.isNil(this.props.myself.tel) || R.isNil(this.props.myself.tel.dialCode) ? DEFAULT_PHONE_FORMAT : this.state.countriesObjectIndexByDialCode[this.props.myself.tel.dialCode];
        let valueSelectedReset         =  valueSelectedResetObj.dial_code;
        let body = {};

        if(!R.isNil(this.state.nameValue) && !R.isEmpty(this.state.nameValue))                                   body['firstName'] = this.state.nameValue;
        if(!R.isNil(this.state.familyNameValue) && !R.isEmpty(this.state.familyNameValue))                       body['lastName'] = this.state.familyNameValue;
        if(!R.isNil(this.state.descriptionValue) && !R.isEmpty(this.state.descriptionValue))                     body['description'] =  this.state.descriptionValue;
        if(updateTel){
            let tel = u({
                dialCode : updateTelDialCode ? this.state.teldialCodeValue : valueSelectedReset,
                localNumber : updateTelNumber ? R.replace(/\s/g, '', this.state.telLocalNumberValue) : !R.isNil(this.props.myself.tel) ? this.props.myself.tel.localNumber : null ,
            }, tel);
             body['tel'] = tel;
        }
        if(!R.isEmpty(this.state.genderValue))                                                                   body['gender'] = this.state.genderValue;
        if(!R.isNil(this.state.countryValue) && !R.isEmpty(this.state.countryValue))                             body['country'] = this.state.countryValue;
        if(!R.isNil(this.state.selectedPointsOfInterest) && !R.isEmpty(this.state.selectedPointsOfInterest))     body['labels'] = this.state.selectedPointsOfInterest;

        console.log('body', body)
        api.patch('user', body)
            .then( data => {
                this.setState({
                    nameValue: '',
                    familyNameValue: '',
                    descriptionValue: '',
                    teldialCodeValue: '',
                    updateReady: true,
                    countryValue: ''
                });
                this.props.dispatchSetMyself(data);
            })
            .catch(err => {
                console.log(err)
            });
    }

}

export default Account;
