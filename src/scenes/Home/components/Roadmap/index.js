'use strict'

import React, {Component} from 'react';
//import Styles from '../stylesheets/components/SearchBar.scss'

import { Grid, Row, Col } from 'react-bootstrap';

class Roadmap extends Component {

    constructor() {
        super();
    }

    render() {

        let { data } = this.props;

        return (
            <section id="roadmap" className="roadmap-section general-section">
                <Grid>
                    <Row>
                        <Col md={ 10 }>
                            <h2 className="section-heading">
                                { data.title }
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 10 } mdOffset={ 1 }>
                            <div className="timeline">
                                <div className="roadmap-list row">
                                    <Col sm={ 6 } smOffset={ 6 } className="roadmap-list-item-right wow fadeInRight wowed animated" data-wow-duration="1s" data-wow-delay="0.5s">
                                        <div className="contain">
                                            <p className="title">
                                                <span className="date">{ data.dateOne }</span> { data.stepOne }
                                            </p>
                                        </div>
                                        <div className="roadmap-separator"></div>
                                    </Col>
                                    <Col sm={ 6 } className="roadmap-list-item-left wow fadeInLeft wowed animated" data-wow-duration="1s" data-wow-delay="0.5s">
                                        <div className="contain">
                                            <p className="title">
                                                { data.stepTwo }<span className="date">{ data.dateTwo }</span>
                                            </p>
                                        </div>
                                        <div className="roadmap-separator"></div>
                                    </Col>
                                    <Col sm={ 6 } smOffset={ 6 } className="roadmap-list-item-right wow fadeInRight wowed animated" data-wow-duration="1s" data-wow-delay="0.5s">

                                        <div className="contain">
                                            <p className="title">
                                                <span className="date">{ data.dateThree }</span> { data.stepThree }
                                            </p>
                                            </div>
                                        <div className="current"></div>
                                    </Col>
                                    <Col sm={ 6 }  className="roadmap-list-item-left wow fadeInLeft wowed animated" data-wow-duration="1s" data-wow-delay="0.5s">
                                        <div className="contain">
                                            <p className="title">
                                                { data.stepFour } <span className="date">{ data.dateFour }</span>
                                            </p>
                                        </div>
                                        <div className="roadmap-separator"></div>
                                    </Col>
                                    <Col sm={ 6 } smOffset={ 6 } className="roadmap-list-item-right wow fadeInRight wowed animated" data-wow-duration="1s" data-wow-delay="0.5s">
                                        <div className="contain">
                                            <p className="title">
                                                <span className="date">{ data.dateFive }</span> { data.stepFive }
                                            </p>
                                        </div>
                                        <div className="roadmap-separator"></div>
                                    </Col>
                                    <Col sm={ 6 }  className="roadmap-list-item-left wow fadeInLeft wowed animated" data-wow-duration="1s" data-wow-delay="0.5s">
                                        <div className="contain">
                                            <p className="title">
                                                { data.stepSix }<span className="date">{ data.dateSix }</span>
                                            </p>
                                        </div>
                                        <div className="roadmap-separator"></div>
                                    </Col>
                                    <Col sm={ 6 } smOffset={ 6 } className="roadmap-list-item-right wow fadeInRight wowed animated" data-wow-duration="1s" data-wow-delay="0.5s">
                                        <div className="contain">
                                            <p className="title">
                                                <span className="date">{ data.dateSeven }</span>{ data.stepSeven }
                                            </p>
                                        </div>
                                        <div className="roadmap-separator"></div>
                                    </Col>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </section>)
    }
}

export default Roadmap;
