'use strict'

import React, { Component } from 'react';

import autobind from 'autobind-decorator';

import { Grid, Row, Col } from 'react-bootstrap';

import DonwloadButtons from '../../../../components/DownloadButtons'

@autobind
class Download extends Component {

    constructor(props) {
        super(props);
    }


    handleClick(target){
        ga('send', 'event', 'Download App', target, 'Click on download app');
    }

    render(){

        let { buttons } = this.props;

        return(
            <section id="download" className="download-section general-section">
            	<Grid>
                    <Row className="download-addaps">
                        <Col md={ 10 } mdOffset={ 1 } className="download-image">
                            <img src={'assets/img/cover.png'} alt=""  />
                        </Col>
                        <Col md={ 12 }>
                            <p className="download-buttons">
                                <DonwloadButtons someClass="desktop" data= { buttons } ua={ window.navigator.userAgent  }/>

                                <a onClick={ ()=>{ this.handleClick('IOS')} } href="" target="_blank" className="btn btn-app-filled ios">
                                    <i className="fa fa-mobile"></i>
                                    <strong>{ buttons.availableOn }</strong>
                                    <span>App Store</span>
                                </a>
                                <a onClick={ ()=>{ this.handleClick('ANDROID') } } href="" target="_blank" className="btn btn-app-filled android">
                                    <i className="fa fa-android"></i>
                                    <strong>{ buttons.availableOn }</strong>
                                    <span>Google Play</span>
                                </a>
                            </p>
                        </Col>
                    </Row>
            	</Grid>
            </section>
        )
    }
}

export default Download;
