'use strict'

import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-bootstrap';


class Press extends Component {

    constructor() {
        super();
    }

    render(){

        let { data } = this.props;

        return(
            <section id="press" className="press-section general-section">
                <Grid>
                    <Row>
                        <Col md={ 12 }>
                            <h2 className="section-heading">
                                { data.title }
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={ 4 } sm={ 6 } mdOffset={ 2 }>
                            <div className="contain">
                                <a
                                href="https://cryptonomist.ch/en/blockchain-en/blockchain-competition/"
                                target="_blank"
                                ><img src={"assets/img/news1.jpg"}/></a>
                                <p><span>Second in the ranking</span>, Metalyfe, whose project is linked to the world of privacy with an innovative browser.</p>
                            </div>
                        </Col>
                        <Col md={ 4 } sm={ 6 }>
                            <div className="contain last">
                                <a href="https://cryptonomist.ch/en/ico-en/lars-schlichting/" target="_blank"><img src={"assets/img/news2.jpg"}/></a>
                                <p><span>“Not an easy decision”</span>, explains in this interview Lars Schlichting, legal expert, CEO of Poseidon Group, the holding company to which Eidoo also belongs, as well as Chairman of the ICO Race jury.</p>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }
}

export default Press;
