'use strict';

import React, { Component } from 'react';
import autobind             from 'autobind-decorator';

import R                    from 'ramda';
import _                    from 'lodash';
import Radium               from 'radium';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
import { TwitterPicker }    from 'react-color';
import {ChromePicker}       from 'react-color';
import { Accordion}         from 'react-sanfona';
import { AccordionItem }    from 'react-sanfona';
import u                    from 'updeep';
import {connect}            from 'react-redux';
import {bindActionCreators} from 'redux';
import electron             from 'electron';
import fs                   from 'fs';
import FormData             from 'form-data';

import Loading              from '../Loading';
import {COLORS}               from '../../globals/colors.js';
import {setUser}            from '../../../store/actionsCreators/user/setUser.js';
import CropImageDialog      from '../CropImage';

const USER_SETTINGS         = require("../../../js/devel/modules-system/module-user-settings");
const api                   = require('../../../js/devel/modules-system/api-calls').apiv2;

import PreviewImagesUploaded        from '../UploadImage/components/PreviewImagesUploaded';
import {openImageWallpaperPopUp}    from '../../../js/devel/entities/cubes/reactCubes/Functions/ReactToElectron.js';
import {closeImageWallpaperPopUp}   from '../../../js/devel/entities/cubes/reactCubes/Functions/ReactToElectron.js';

const createObjectsOfLabels = R.pipe(
    R.map( R.pick(['label'])),
    R.indexBy(R.prop('label')),
    R.map(R.empty)
);


const styles = {
  container: {
      display: 'flex',
      flex: 1,
      flexWrap: 'wrap',
      position: 'absolute',
      zIndex: 10,
      width: 600,
      height: 'auto',
      backgroundColor: 'white',
      boxShadow: '0 0 8px 0 rgba(0,0,0,0.12), 0 8px 8px 0 rgba(0,0,0,0.24)',
      borderRadius: 3,
  },
  topBarContainer:{
      position: 'relative',
      display: 'flex',
      width: '100%',
      height: 30,
      borderBottom: 'solid 1px #d2d2d2',
      alignItems: 'center',
  },
  contentWrapper:{
        position: 'relative',
        width: '100%',
        margin: 10,
        overflow: 'scroll',
        height: 600,
  },
  closeIconWrapper:{
        position: 'absolute',
        width: 15,
        height: 15,
        borderRadius: '50%',
        backgroundColor: '#f5f5f5',
        right: 10,
        cursor: 'pointer',
  },
  closeIcon:{
      position: 'relative',
      fontSize: 15,
  },
  buttonMore:{
      width: '520px',
      position:'relative',
      backgroundColor: COLORS.primary ,
      borderRadius:6,
      justifyContent: 'center',
      display: 'flex',
      alignSelf: 'center',
      color: 'white',
      margin: '10px 20px',
      cursor:'pointer',
  },
  image:{
      height: 76,
      position:'relative',
      width: 106,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      margin: 5,
      cursor:'pointer',
  },
  acceptColorPicker:{
      height: 30,
      width: '100%',
      justifyContent: 'center',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#FF6C6F',
      borderRadius: '0px 0px 6px 6px',
      zIndex: 3,
      color: 'white',
      fontSize: 14,
      boxShadow: 'rgba(0, 0, 0, 0.298039) 0px 0px 2px, rgba(0, 0, 0, 0.298039) 0px 4px 8px',
      cursor:'pointer',
      position:'relative',
  }
}

const mapStateToProps = (state, ownProps) => {

    return {
        token      :     state.appSettings.SESSION_DATA.token,
    }
};

const mapDispatchToProps = dispatch => {

    return bindActionCreators({
        dispatchSetUser: setUser,
    }, dispatch)
};

@connect(mapStateToProps, mapDispatchToProps)
@Radium
class PopUpWallpaper extends Component{

    constructor(props){

        super(props);

        this.state = {
            // ready:              true,
            addapsImages:       null,
            displayColorPicker: false,
            colorSelected:      COLORS.primary,
            color: {
                      r: '255',
                      g: '255',
                      b: '255',
                      a: '1',
                    },
            activeItems: [],
            addapsImagesTypes: null,
            userImages: null,
            userImagesReady: null,
            imageUrls: [],
            loadImgReady: true,
        }

        this.hidePopup = this.hidePopup.bind(this);
        this.renderSelectColor =this.renderSelectColor.bind(this);
        this.changeColorSelected =this.changeColorSelected.bind(this);
        this.handleClose =this.handleClose.bind(this);
        this.renderAddapsImages = this.renderAddapsImages.bind(this);
        this.renderAddapsImagesWrapper =this.renderAddapsImagesWrapper.bind(this);
        this.onChangeAccordion = this.onChangeAccordion.bind(this);
        this.onClickMoreImages =this.onClickMoreImages.bind(this);
        this.renderUpdateMyImage = this.renderUpdateMyImage.bind(this);
        this.callApiToUpdateWallpaper = this.callApiToUpdateWallpaper.bind(this);
        this.changeColorPicker = this.changeColorPicker.bind(this);
        this.acceptColorPicker = this.acceptColorPicker.bind(this);
        this.renderUserImages = this.renderUserImages.bind(this);
        this.openPopUpCropImages = this.openPopUpCropImages.bind(this);
        this.closePopUpCropImage =this.closePopUpCropImage.bind(this);
        this.onAddImagePress = this.onAddImagePress.bind(this);
        this.loadImgFromFile = this.loadImgFromFile.bind(this);

    }

    componentWillMount(){
        api.get('addaps/lib/images').then((data) =>{
            let listTypes = createObjectsOfLabels(data)
            let listTypesKeys = R.keys(listTypes);
            R.map((myKey) => listTypes[myKey] = 'prevMode'  , R.keys(listTypes))
            this.setState({addapsImages: data, addapsImagesTypes: listTypes,  activeItems: listTypesKeys });
        });
        api.get('user/images').then((data) =>{
            this.setState({userImages: data, userImagesReady: 'prevMode'});
        });
    }

    render(){
        return(
            <div style={styles.container}>
                <div style={styles.topBarContainer}>
                    <span style={[styles.textTop, {paddingLeft: 10}]}>{'Choose wallpaper'}</span>
                    <div
                        style={styles.closeIconWrapper}
                        onClick= { () => this.hidePopup() }
                    >
                        <i className="material-icons" style={styles.closeIcon}>close</i>
                    </div>
                </div>
                { !R.isNil(this.state.userImagesReady) && !R.isNil(this.state.addapsImages) && this.state.loadImgReady ? this.renderWallpapers() : this.renderLoading()}
            </div>
        )
    }

    hidePopup(){
        this.props.onClick();
    }

    renderLoading(){
        return(
            <MuiThemeProvider>
                <div style = {{ width: '100%',height: 600, position: 'relative'}}>
                        <Loading style= {{position:'absolute', top: 'calc(50% - 80px)', left: 'calc(50% - 80px)'}}/>
                </div>
            </MuiThemeProvider>
        )
    }

    renderWallpapers(){
        return(
            <div style={styles.contentWrapper} >
                <div style ={{marginBottom: 15}}>
                    <div style={{display: 'flex', position:'relative', height: 40, alignItems: 'center'}}>
                        <span style={[styles.textTop, {paddingLeft: 10}]}>{"Color"}</span>
                    </div>
                    {this.renderSelectColor()}
                    { this.state.displayColorPicker ? this.renderColorPicker() : null}
                </div>
                <div style = {{marginBottom: 15}}>
                    <div style={{display: 'flex', position:'relative', height: 40, alignItems: 'center'}}>
                        <span style={[styles.textTop, {paddingLeft: 10}]}>{"My images"}</span>
                    </div>
                    {this.renderUpdateMyImage()}
                </div>
                <div>
                    <div style={{display: 'flex', position:'relative', height: 40, alignItems: 'center'}}>
                        <span style={[styles.textTop, {paddingLeft: 10}]}>{"Addaps's image library"}</span>
                    </div>
                    <div style = {{ width: '100%', position:'relative', borderRadius:6}}>
                        <Accordion activeItems={this.state.activeItems} allowMultiple={true} onChange={(value)=> this.onChangeAccordion(value)}>
                            {R.map(this.renderAddapsImagesWrapper, this.state.addapsImages)}
                        </Accordion>
                    </div>
                </div>
            </div>
        )
    }

    renderUpdateMyImage(){
        let isPrevMode = this.state.userImagesReady ==='prevMode';
        let isBiggerThan10 = this.state.userImages.length > 9;
        let images = isPrevMode ? R.splitAt(9,this.state.userImages)[0] : this.state.userImages;
        let textButton = isPrevMode ? 'See more' : 'See less'
        return(
             <div style = {{width: '100%', position:'relative', overflow:'scroll', fontSize:14, marginBottom: 15}}>
                 <div style = {{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', transition: 'height 300ms linear'}}>
                         {this.renderUserUpdateImage()}
                         {R.map(this.renderUserImages, images)}
                         { isBiggerThan10 ? this.renderButtonMoreUserImage(textButton): null}
                 </div>
             </div>
        )
    }

    renderButtonMoreUserImage( textButton){
        return(
            <div style= {styles.buttonMore} onClick={() => this.onClickMoreUserImages()} >{textButton}</div>
        )
    }

    onClickMoreUserImages(){
        let newType = this.state.userImagesReady === 'prevMode' ? 'allMode' : 'prevMode';
        this.setState({userImagesReady: newType})
    };

    renderUserUpdateImage(){
        return(
            <div
                key = {'addImageWallpaper'}
                style = { [styles.image, {backgroundColor: 'rgb(245, 245, 245)'}] }
                className = 'addImage'
            >
                <div
                    style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center', alignSelf: 'center'}}
                    onClick= { () => {this.onAddImagePress()} }
                >
                    <i className="material-icons" style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', paddingTop: 20, overflow: 'hidden'}}>file_upload</i>
                    <span>Upload Image</span>
                </div>

          </div>
        )
    }

    onAddImagePress(){
        let spec = {
          properties: ['openFile', 'createDirectory'],
          title: 'select one image',
          filters: [
            { name: 'Images', extensions: ['jpg']}
          ]
        };

        electron.remote.dialog.showOpenDialog(spec, filePaths => filePaths && this.loadImgFromFile(filePaths[0]) || null  )
    }

    /*
     *  Upload raw image to the api
     */
    loadImgFromFile(filePath) {
        this.setState({ loadImgReady: false});
        let formData = new FormData();

        formData.append('file', fs.createReadStream(filePath) );

        const responseCallback = (err, res) => {

            let body = '';

            res.on('data', (data) => {
                body += data.toString();
            });

            res.on('end', () => {
                let bodyObj = JSON.parse( body );
                let newUrl = bodyObj.data;
                api.get('user/images').then((data) =>{
                    this.setState({userImages: data, userImagesReady: 'prevMode', loadImgReady: true});
                });
                // this.setState({ imageUrls: [newUrl, ...this.state.imageUrls], loadImgReady: true})
            });
        };

        let spec = {
            'hostname': `${process.env.CHANNEL_ID}${'.addaps.com'}`,
            'path': '/api/v2/user/images/',
            'headers': {
                token: this.props.token,
            },
            'protocol': 'https:'
        };
        formData.submit( spec, responseCallback);

    }

    renderUserImages(userImage){
        return(
            <div style= {[styles.image,{backgroundImage: `url(${userImage.item.free})`}]} onClick={() => this.openPopUpCropImages(userImage)}>
            </div>
        )
    }

    openPopUpCropImages(image){
        let props={
              isOpen: true,
              imageToCrop: image.item.free,
              onRequestClose: this.closePopUpCropImage,
              aspectRatio: NaN,
              cubeInstance: this.props.cubeInstance,
              imageType: 'boardBackground',
              typeOfWallpaper: 'USER_IMG',
              exchangeType : this.props.type,
        }

        openImageWallpaperPopUp(this.props.cubeInstance, CropImageDialog, props);
    }


    closePopUpCropImage(){
        let props={
              isOpen: false,
              imageToCrop: null,
              onRequestClose: this.closePopUpCropImage,
              aspectRatio: NaN,
              cubeInstance: this.props.cubeInstance,
              imageType: 'boardBackground',
              typeOfWallpaper: null,
              exchangeType: null,
        }

        closeImageWallpaperPopUp(this.props.cubeInstance, CropImageDialog, props);
    }

    onChangeAccordion(value){this.setState({activeItems : value.activeItems})}
    onOpenColorPicker(){this.setState({displayColorPicker : !this.state.displayColorPicker,})}
    handleClose(){this.setState({displayColorPicker : !this.state.displayColorPicker,})}

    renderColorPicker(){
        return(
            <div style={{position:'absolute', zIndex:2, right:25}}>
                <div style={{position:'fixed', top:0, right:0, left:0, bottom:0}} onClick={() => this.handleClose() }/>
                <ChromePicker color={ this.state.colorSelected } onChange={(value) => this.changeColorPicker(value)}/>
                <div style={styles.acceptColorPicker} onClick={() => this.acceptColorPicker(this.state.colorSelected)}>Accept</div>
            </div>
        )
    }

    changeColorPicker(value){
        this.setState({ colorSelected : value.hex })
    }

    acceptColorPicker(value){
        this.callApiToUpdateWallpaper('CSS_COLOR', value)
    }

    changeColorSelected(value){
        this.setState({ colorSelected : value.hex })
        this.callApiToUpdateWallpaper('CSS_COLOR', value.hex)
    }

    renderSelectColor(){
        return(
            <div style = {{ width: '100%', position:'relative', borderRadius: 6, height: 80, overflow:'scroll', justifyContent:'center', display: 'flex', flexDirection:'column'}}>
                <TwitterPicker color={ this.state.colorSelected } triangle={'hide'} width={580} onChange={(value) => this.changeColorSelected(value) } />
                <div style={{backgroundColor: this.state.colorSelected, width: 40, height:40, position:'absolute', right:10, cursor:'pointer'}} onClick={() => this.onOpenColorPicker() }></div>
            </div>
        )
    }

    renderAddapsImagesWrapper(itemImage){
        let searchByLabel = item => item.label === itemImage.label;
        let isPrevMode = this.state.addapsImagesTypes[itemImage.label] ==='prevMode';
        let isBiggerThan10 = R.find(searchByLabel, this.state.addapsImages).images.length > 10;
        let images = isPrevMode ? R.splitAt(10,itemImage.images)[0] :itemImage.images;
        let textButton = isPrevMode ? 'See more' : 'See less'
        return(
            <AccordionItem bodyClassName={'accordionItem'} title={this.renderTitleOfAddapsLibraries(itemImage.label)} slug={itemImage.label} key={itemImage.label}>
                    {R.map(this.renderAddapsImages, images)}
                    { isBiggerThan10 ? this.renderButtonMore(itemImage.label, textButton): null}
            </AccordionItem>


        )
    }

    renderButtonMore(label, textButton){
        return(
            <div style= {styles.buttonMore} onClick={() => this.onClickMoreImages(label)} >{textButton}</div>
        )
    }

    onClickMoreImages(label){
        let isPrevMode = this.state.addapsImagesTypes[label] ==='prevMode';
        let newType = isPrevMode ? 'allMode' : 'prevMode'
        let addapsImagesTypes = u({[label]: newType},this.state.addapsImagesTypes)
        this.setState({addapsImagesTypes: addapsImagesTypes})
    }

    renderAddapsImages(addapsImage){
        return(
            <div style= {[styles.image,{backgroundImage: `url(${addapsImage.sm})`}]} onClick={() => this.callApiToUpdateWallpaper('ADDAPS_IMG', addapsImage)}></div>
        )
    }

    renderTitleOfAddapsLibraries(title){
        let arrowType = 'arrow_drop_down';
        let auxStyleArrow;
        if(!R.contains(title, this.state.activeItems)){
            auxStyleArrow = {
                    transform: 'rotate(-90deg)',
                    transition: '300ms linear all',
            }
        }
        return(
            <div style = {{display:'flex',cursor:'pointer'}}>
                <i className="material-icons" style={[{transition: '300ms linear all'},auxStyleArrow]}>{arrowType}</i>
                <span style={[styles.textTop, {paddingLeft: 10}]}>{title}</span>
            </div>
        )
    }

    callApiToUpdateWallpaper(myType, value){
        let myValue = value;
        if(myType !=='CSS_COLOR') myValue = value.id;
        if(R.equals(this.props.type,"WALLPAPER_DEFAULT")){
            let body = {};
            let defaultBoardBackground = {item: myValue, type: myType};
            body['defaultBoardBackground'] = defaultBoardBackground;
            return api.patch("user", body).then((data) => {
                this.props.dispatchSetUser(data);
                this.hidePopup();
            });
        }else{
            if(myType !=='CSS_COLOR') USER_SETTINGS.getActiveBoard().setBackground(value.free, value);
            else USER_SETTINGS.getActiveBoard().setBackgroundColor(value);
            USER_SETTINGS.getActiveBoard().boardModify(true);

        }
    }

}

export default PopUpWallpaper;
