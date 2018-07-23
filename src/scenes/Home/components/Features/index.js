'use strict'

import React, { Component } from 'react';

import ImageZoome from 'react-medium-image-zoom';

import { Grid, Row, Col } from 'react-bootstrap';

class Features extends Component {

    constructor(props) {
        super(props);
    }

    render(){

        let { data } = this.props;

        return(
            <section id="features" className="features-section general-section">
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
                                <Col md={ 6 } sm={ 6 } className="feature-list-text">
                                    <p className="title"> { data.stepOneTitle }</p>
                                    <p className="description"> { data.stepOneDescription }</p>
                                </Col>

                                <Col md={ 6 } sm={ 6 } className="feature-list-image">
                                    <ImageZoome
                                    image={{
                                        src: 'assets/img/lbm.jpg',
                                        className: 'imagezoomIn',
                                        style: { width: '100%' }
                                    }}
                                    zoomImage={{
                                        src: 'assets/img/lbm.jpg'
                                    }}
                                    />
                                </Col>
                            </Row>
                            <Row className="feature-list">
                                <Col md={ 6 } sm={ 6 } className="feature-list-image order-two">
                                    <ImageZoome
                                        image={{
                                            src: 'assets/img/lam.jpg',
                                            className: 'img',
                                            style: { width: '100%' }
                                        }}
                                        zoomImage={{
                                            src: 'assets/img/lam.jpg'
                                        }}
                                        />
                                </Col>
                                <Col md={ 6 } sm={ 6 } className="feature-list-text">

                                    <p className="title"> { data.stepTwoTitle }</p>
                                    <p className="description"> { data.stepTwoDescription }</p>

                                </Col>
                            </Row>
                            <Row className="feature-list">
                                <Col md={ 6 } sm={ 6 } className="feature-list-text">
                                    <p className="title"> { data.stepThreeTitle }</p>
                                    <p className="description"> { data.stepThreeDescription }</p>

                                </Col>
                                <Col md={ 6 } sm={ 6 } className="feature-list-image">
                                    <ImageZoome
                                        image={{
                                            src: 'assets/img/lss.jpg',
                                            className: 'img',
                                            style: { width: '100%' }
                                        }}
                                        zoomImage={{
                                            src: 'assets/img/lss.jpg'
                                        }}
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

export default Features;
