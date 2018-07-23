'use strict';

let ReactDOM  = require('react-dom');

import React, { PureComponent } from 'react';
import { bindActionCreators }   from 'redux';
import { connect }              from 'react-redux';

import R                        from 'ramda';
import electron                 from 'electron';
import fs                       from 'fs';
import Bluebird                 from 'bluebird';
import Radium                   from 'radium';
import autobind                 from 'autobind-decorator';
import FormData                 from 'form-data';
import IconButton               from 'material-ui/IconButton';
import {GridList, GridTile}     from 'material-ui/GridList';
import CropImageDialog          from '../../../CropImage';

import {openPopUpChangePhoto}   from '../../../../../js/devel/entities/cubes/reactCubes/Functions/ReactToElectron.js';
import {closePopUpChangePhoto}  from '../../../../../js/devel/entities/cubes/reactCubes/Functions/ReactToElectron.js';

import {openLightBoxWithComponent}   from '../../../../../js/devel/entities/cubes/reactCubes/Functions/ReactToElectron.js';
import {closeLightBoxWithComponent}  from '../../../../../js/devel/entities/cubes/reactCubes/Functions/ReactToElectron.js';


const api           =   require('../../../../../../app/js/devel/modules-system/api-calls').apiv2;




const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flex: 1,
        maxHeight: 600,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'scroll',
        height: ' 400px'
    },
    gridItem: {
        cursor: 'pointer',
        width: 120,
        height: 120,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    addImage: {
        backgroundColor: '#F5F5F5'
    },
    muiButton: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    muiFIcon: {
        fontSize: 30
    },
    loadingWrapper: {
        position: 'absolute',
        display: 'flex',
        width: '100%',
        height: '100%',
        top: 0,
        backgroundColor: 'rgba(0,0,0,0.4)'
    }
};


const ASPECT_RATIOS = {
    avatar      :    1,
    cover       :    170/63,
    wallpaper   :    NaN, // free style for cropper is NaN in the library
    avatarGroup :    1,
}

const mapStateToProps = (state, ownProps) => {

    return {
        token      :     state.appSettings.SESSION_DATA.token,
    }
};



@connect(mapStateToProps, null)
@autobind
@Radium
class PreviewImagesUploaded extends PureComponent {

    constructor(props){
        super(props);

        this.state = {
            imageUrls: [],
            loadImgReady: true,
        };

        this.renderImg = this.renderImg.bind(this);
        this.onSelectImageUploaded = this.onSelectImageUploaded.bind(this)
    }


    componentDidMount() {

        api.get(`user/images`)
            .then(imageUrls => {
                this.setState({imageUrls})
            })
            .catch(err => console.log(err))
    }


    render() {
        return(
            <div
                style = { styles.container }
                className = 'uploadedImagesPreviewContainer'
            >
                {
                      [
                          this.renderAddImage(),
                          ...R.addIndex(R.map)( this.renderImg, this.state.imageUrls ),
                      ]
                }
                { this.state.loadImgReady ? null : this.renderLoadingAnimation() }
            </div>
        );
    }


    renderLoadingAnimation(){
        return(
            <div style={styles.loadingWrapper}>
                <img src="https://www.wallies.com/filebin/images/loading_apple.gif" style = {{ position: 'relative',  "top": "calc(50% - 50px)" ,"left": "calc(50% - 50px)", height:100, width:100}} />
            </div>
        )
    }


    renderImg( img, i ){
        let url = !R.isNil(img.item) ? img.item.free : img.free;

        return (
            <div
                key = {i}
                onClick = { (e) => this.onSelectImageUploaded(url, this.props.type) }
                style = { [
                    styles.gridItem,
                    {
                        backgroundImage:    `url("${url}")`,
                        backgroundPosition: 'center center',
                        backgroundSize:     'cover'
                    }
                ]}
                className = 'gridItem'
            >
            </div>
        )
    }

    renderAddImage() {

        return (
            <div
                key = {'addImage'}
                style = { [styles.gridItem, styles.addImage] }
                className = 'addImage'
            >
                <div
                    style={styles.muiButton}
                    onClick= { () => this.onAddImagePress() }
                >
                    <i className="material-icons" style={styles.muiFIcon}>file_upload</i>
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



    onSelectImageUploaded(img, type) {
        this.setState({changeImageDialog: true});

        let aspectRatio = ASPECT_RATIOS[this.props.imageType];

        let props = {
            isOpen:         true,
            imageToCrop:    img,
            onRequestClose: () => this.onCloseImageDialog(type),
            aspectRatio:    aspectRatio,
            type:           'secondPopUp',
            imageType:      this.props.imageType,
        };

        if(!R.isNil(this.props.cubeInstance)) openPopUpChangePhoto(this.props.cubeInstance, CropImageDialog, props);
        else openLightBoxWithComponent(<CropImageDialog {...props}/>, 'Choose your new....', 'cropImageDialog')
    }


    onCloseImageDialog(type) {

        this.setState({changeImageDialog: false});

        let props = {
            isOpen:         false,
            onRequestClose: () => this.props.onRequestCloseDialog(),
            type:           'secondPopUp',
            cubeInstance:   this.props.cubeInstance,
            imageType:      this.props.imageType,
        };

        if(!R.isNil(this.props.cubeInstance)) closePopUpChangePhoto(this.props.cubeInstance, props);
        else closeLightBoxWithComponent('cropImageDialog');
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

                this.setState({ imageUrls: [newUrl, ...this.state.imageUrls], loadImgReady: true})
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

}




export default PreviewImagesUploaded;
