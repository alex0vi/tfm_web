'use strict'

import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

import ImageZoome from 'react-medium-image-zoom';

class BlockchainFeatures extends Component {

    constructor() {
        super();
    }

    render(){

        let { data } = this.props;

        return(
            <section id="blockchainFeatures" className="features-section f-blockhain general-section">
                <Grid>
                    <Row>
                        <Col md={ 12 }>
                            <h2 className="section-heading">
                                { data.title }
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 10 } mdOffset={ 1 }>
                            <Row className="feature-list">
                                <Col md={ 6 } sm={ 6 } className="feature-list-image order-two">
                                    <ImageZoome
                                    image={{
                                        src: 'assets/img/ldm.jpg',
                                        className: 'imagezoomIn',
                                        style: { width: '100%' }
                                    }}
                                    zoomImage={{ src: 'assets/img/ldm.jpg' }}
                                    />
                                </Col>

                                <Col md={ 6 } sm={ 6 } className="feature-list-text">
                                    <p className="title"> { data.stepOneTile }</p>
                                    <p className="description">{ data.stepOneDescription }</p>
                                    <p className="description">{ data.stepOneSubDescription }</p>
                                    <Row>
                                    <Col md={ 4 } xs={ 4 }>
                                    <div className="contain">
                                        <div className="circle">
                                            <i className="fa fa-lock"></i>
                                        </div>
                                        <p>{ data.stepOneSecured }</p>
                                    </div>
                                    </Col>
                                    <Col md={ 4 } xs={ 4 }>
                                    <div className="contain">
                                            <div className="circle">
                                                <i className="fa fa-user"></i>
                                            </div>
                                        <p>{ data.stepOneDigital }</p>
                                    </div>
                                    </Col>
                                    <Col md={ 4 } xs={ 4 }>
                                    <div className="contain">
                                        <div className="circle">
                                            <i className="fa fa-th-large"></i>
                                        </div>
                                        <p>{ data.stepOneDecentralized }</p>
                                    </div>
                                    </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 10 } mdOffset={ 1 }>
                            <Row className="feature-list">
                                <Col md={ 6 } sm={ 6 } className="feature-list-text">
                                    <p className="title">{ data.stepTwoTitle }</p>
                                    <p className="description">{ data.stepTwoDescription }</p>
                                </Col>
                                <Col md={ 6 } sm={ 6 } className="feature-list-image">
                                    <ImageZoome
                                    image={{
                                        src: 'assets/img/lyfecoin.png',
                                        className: 'imagezoomIn',
                                        style: { width: '100%' , boxShadow: 'none'}
                                    }}
                                    zoomImage={{ src: 'assets/img/lyfecoin.png' }}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }
}

export default BlockchainFeatures;
