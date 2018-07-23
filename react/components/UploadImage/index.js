'use strict';

import R                        from 'ramda';
import React, { PureComponent } from 'react';
import ReactDOM                 from 'react-dom';
import Radium                   from 'radium';
import autobind                 from 'autobind-decorator';
import { connect }              from 'react-redux';
import { bindActionCreators }   from 'redux';

import Dialog                   from 'material-ui/Dialog';
import FlatButton               from 'material-ui/FlatButton';
import Avatar                   from 'material-ui/Avatar';
import TextField                from 'material-ui/TextField';
import Divider                  from 'material-ui/Divider';
import IconButton               from 'material-ui/IconButton';
import FontIcon                 from 'material-ui/FontIcon';
import Paper                    from 'material-ui/Paper';


import PreviewImagesUploaded        from './components/PreviewImagesUploaded';

const DIALOG_WIDTH = 650;
const DIALOG_BODY_HEIGHT = 440;


const styles = {
    container: {
        zIndex: 2,
        backgroundColor: 'white',
        width: DIALOG_WIDTH,
        height: DIALOG_BODY_HEIGHT,
        position: 'relative',
    },
    innerContainer: {},
    topBar: {
        display: 'flex',
        position: 'relative',
        top: 0,
        flex: 1,
        marginBottom: 10,
        justifyContent: 'space-between'
    },
    xButton: {
        display: 'flex',
        alignItems: 'center',
        margin: '10px',
    },
    textWrapper: {
        display: 'flex',
        alignItems: 'center',
        margin: '10px',
    },
    muiButton: {
        cursor: 'pointer'
    },
    muiFIcon: {
        fontSize: 25,
    }
};



@Radium
class UploadedImagesPreviewDialog extends PureComponent {

    constructor(props){
        super(props);
    }

    render() {

        if(!R.isNil(this.props.cubeInstance)) return (this.renderUploadImageWithTopBar());
        else return (this.renderUploadImageWithoutTopBar());

    }

    renderUploadImageWithTopBar(){
        return(
            <div
                className = {'PopUpChangePhoto'}
                style={[styles.container,{height:470}]}
            >

                <div style={styles.innerContainer}>

                    <div style={styles.topBar}>

                        <div style={styles.textWrapper}>
                            <span>Pick a image</span>
                        </div>

                        <div style={styles.xButton}>

                            <div
                                style={styles.muiButton}
                                onClick= { () => this.onCancel() }
                            >
                                <i className="material-icons" style={styles.muiFIcon}>close</i>
                            </div>

                        </div>

                    </div>

                    <PreviewImagesUploaded
                        ref                     = { self => this.PreviewImagesUploaded = self }
                        onRequestCloseDialog    = { () => this.onCancel() }
                        imageType               = { this.props.imageType }
                        cubeInstance            = { this.props.cubeInstance}
                    />

                </div>
            </div>
        )
    }

    renderUploadImageWithoutTopBar(){
        return(
            <div
                className = {'PopUpChangePhoto'}
                style={styles.container}
            >
                <PreviewImagesUploaded
                    ref                     = { self => this.PreviewImagesUploaded = self }
                    imageType               = { this.props.imageType }
                />
            </div>
        )
    }

    onCancel() {
        let {onRequestClose, onClick} = this.props
        if(!R.isNil(onClick)) onClick();
        else onRequestClose();
    }
}

export default UploadedImagesPreviewDialog;
