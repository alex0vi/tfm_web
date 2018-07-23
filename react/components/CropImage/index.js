'use strict';

import R                            from 'ramda';
import React, {PureComponent}       from 'react';
import ReactDOM                     from 'react-dom';
import {connect}                    from 'react-redux';
import {bindActionCreators}         from 'redux';
import Radium                       from 'radium';
import autobind                     from 'autobind-decorator';
import FormData                     from 'form-data';

import Loading                      from '../../components/Loading';
import {COLORS}                      from '../../globals/colors.js'

import {setImage}                   from '../../../store/actionsCreators/user/setImage.js';
import {setUser}                    from '../../../store/actionsCreators/user/setUser.js';

const USER_SETTINGS                 = require("../../../js/devel/modules-system/module-user-settings");
const api                           = require('../../../../app/js/devel/modules-system/api-calls').apiv2;
const blobToStream                  = require('blob-to-stream');

const DIALOG_WIDTH = 650;
const DIALOG_BODY_HEIGHT = 400;

const MIN_HEIGHT = 400;

const TEXT_AREA_DESCRIPTION_HEIGHT = MIN_HEIGHT - 30;

import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

const styles = {
    muiDialogStyles: {
        backgroundColor     : 'white',
        // width               : DIALOG_WIDTH,
        position            : 'relative'
    },
    header: {
        display             : 'flex',
        justifyContent      : 'space-between',
        alignItems          : 'center',
        margin              : '15px',
    },
    title: {
        fontSize            : '18px'
    },
    innerContainer: {
        display             : 'flex',
        flex                : 1,
        flexDirection       : 'column'
    },
    footer: {
        display             : 'flex',
        alignItems          : 'center',
        justifyContent      : 'center',
        margin              : '10px 0px',
        height              : 50,
    },
    buttonWrapper: {
        display             : 'flex',
        cursor              : 'pointer',
        width               : '130px',
        height              : '35px',
        borderRadius        : '20px',
        backgroundColor     : COLORS.primary,
        color               : '#ffffff',
        alignItems          : 'center',
        justifyContent      : 'center',
        margin              : '0 5px'
    },
    buttonText: {
        fontSize        : '13px',
        textTransform   : 'uppercase'
    },
    loadingWrapper: {
        position        : 'absolute',
        display         : 'flex',
        width           : '100%',
        height          : '100%',
        backgroundColor : 'rgba(0,0,0,0.4)',
        zIndex          : 1
    },
    cropperDiv: {
        display         : 'flex',
        flex            : 1,
        maxWidth        : DIALOG_WIDTH,
        maxHeight       : DIALOG_BODY_HEIGHT,
        justifyContent  : 'center',
        alignSelf       : 'center'
    },
    cropperOptions: {
        display     : 'flex',
        alignItems  : 'flex-end'
    },
    optionButton: {
        height      : '20px',
        width       : '20px',
        margin      : '0 5px',
        cursor      : 'pointer'
    }

};


const mapStateToProps = (state, ownProps) => {

    return {
        token      :     state.appSettings.SESSION_DATA.token,
    }
};

const mapDispatchToProps = dispatch => {

    return bindActionCreators({
        dispatchOpenSetImage:   setImage,
        dispatchSetUser:        setUser,
    }, dispatch)

};

@connect(mapStateToProps, mapDispatchToProps)
@Radium
class CropImageDialog extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            saveImgReady: true,
        }

        this.loadImgFromCroppedCanvas =this.loadImgFromCroppedCanvas.bind(this);
    }


    render() {
        if (this.props.isOpen) {
            return (

                <div
                    className = {'PopUpChangePhoto'}
                    style={styles.muiDialogStyles}
                >
                { this.state.saveImgReady ? null : this.renderLoadingAnimation() }

                    <div style={styles.header}>
                        <span style={ styles.title }>{`Choose your new  ${this.getTextButton(this.props.imageType)}:`}</span>

                        <div style={styles.cropperOptions}>
                            <div onClick={ () => this.refs.cropper.rotate(-90) }><i style={styles.optionButton} className="material-icons" >rotate_left</i></div>
                            <div onClick={ () => this.refs.cropper.rotate(90)  }><i style={styles.optionButton} className="material-icons">rotate_right</i></div>
                        </div>
                    </div>

                    <div className={'CropImageDiaologInnerContainer'} style={styles.innerContainer}>


                        <Cropper
                            ref= { 'cropper' }
                            src={this.props.imageToCrop}
                            style={styles.cropperDiv}
                            viewMode={0}
                            background={true}
                            aspectRatio={this.props.aspectRatio}
                            guides={false}
                        />

                    </div>

                    <div style={styles.footer}>

                        <div
                            style={[styles.buttonWrapper, {backgroundColor: COLORS.secondary}]}
                            onClick={ () => this.onCancel() }
                        >
                            <span style={ styles.buttonText }>{`Cancel`}</span>
                        </div>

                        <div
                            style={styles.buttonWrapper}
                            onClick={ () => this.handleSave(this.props.imageType) }
                        >
                            <span style={ styles.buttonText }>{`Save ${this.getTextButton(this.props.imageType)}`}</span>
                        </div>
                    </div>

                </div>

            );
        }

        return null;
    }

    getTextButton(type){
        return R.cond([
            [ R.equals('boardBackground'),    R.always('wallpaper')],
            [ R.equals('cover'),              R.always('cover')],
            [ R.equals('avatar'),             R.always('avatar')],
            [ R.equals('avatarGroup'),        R.always('avatar')],
        ])(type);
    }

    renderLoadingAnimation(){
        return(
            <div style={styles.loadingWrapper}>
                <img src="https://www.wallies.com/filebin/images/loading_apple.gif" style = {{ position: 'relative', "top": "calc(50% - 50px)" ,"left": "calc(50% - 50px)", height:100, width:100}} />
            </div>
        )
    }


    handleSave(imageType) {
        this.setState({saveImgReady: false})
        let Cropper = this.refs.cropper;
        let croppedCanvas = Cropper.getCroppedCanvas();
        this.loadImgFromCroppedCanvas( croppedCanvas, imageType )
    }


    loadImgFromCroppedCanvas(croppedCanvas, imageType) {
        const uploadResponseCallback = (err, res) => {

            let body = '';

            res.on('data', (data) => {
                body += data.toString();
            });

            res.on('end', () => {
                let bodyObj = JSON.parse( body );
                let exchangeType = this.props.exchangeType;

                let newImg = bodyObj.data;

                let apiBody = {}

                if(imageType === 'avatar') {
                    apiBody = {
                        avatar: newImg.id
                    }
                }
                else {
                    if(imageType === 'boardBackground'){
                        apiBody = {
                            defaultBoardBackground: {item: newImg.id, type: this.props.typeOfWallpaper }
                        }
                    }
                    else{

                        if(R.equals(imageType,'avatarGroup')){
                            // console.log('new image', newImg.id)
                        }

                        apiBody = {
                            cover: newImg.id
                        }
                    }
                }

                api.patch(`${'user/'}`, apiBody)
                    .then(data => {
                        if(imageType === 'boardBackground'){
                            if(exchangeType === 'WALLPAPER_DEFAULT'){
                                this.props.dispatchSetUser(data);
                            }
                            else {
                                USER_SETTINGS.getActiveBoard().setBackground(data.defaultBoardBackground.item.free,  data.defaultBoardBackground.item);
                            }
                        }
                        else{
                            this.props.dispatchOpenSetImage(newImg, imageType);
                            this.onCancel();
                        }
                        this.props.onRequestClose();
                        this.setState({saveImgReady: true})
                    })
                    .catch(err => console.log(err))

            });
        };


        const uploadBlobImage = blob => {

            let stream = blobToStream( blob );

            let formData = new FormData();

            formData.append('file', stream, {
                filename: 'cropped.jpg',
                contentType: blob.type,
                knownLength: blob.size
            } );

            // imageType = imageType === 'boardBackground' ? 'boardBackground' : imageType;

            let uploadSpec = {
                'hostname': `${process.env.CHANNEL_ID}${'.addaps.com'}`,
                'path': `${'/api/v2/user/images/'}${imageType}`,
                'headers': {
                    token: this.props.token
                },
                'protocol': 'https:'
            }

            formData.submit( uploadSpec, uploadResponseCallback );
        };

        croppedCanvas.toBlob( uploadBlobImage, 'image/jpeg' )
    }

    onCancel() {
        this.props.onRequestClose();
    }

}

export default CropImageDialog;
