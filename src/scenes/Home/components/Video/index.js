'use strict'

import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

class Video extends Component {

    constructor() {
        super();
    }

    render(){
        return(
            <section id="video" className="video-section general-section" style={{ background: "url('assets/img/bg_video.jpg')", backgroundSize: "100% 70%", backgroundRepeatY: "no-repeat" }}>
                <Grid className="text-center">
                    <Row>
                        <Col md={ 10 } mdOffset={ 1 }>
                            <div className="iframe-yt" >
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/PvVeaDzwukc?rel=0&loop=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }
}

export default Video;
