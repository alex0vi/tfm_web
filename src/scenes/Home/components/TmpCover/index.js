'use strict'

import React, { Component } from 'react';

import autobind from 'autobind-decorator';

@autobind
class TmpCover extends Component {

    constructor(props) {
        super(props);
    }

    render(){


        return(
            <section id="home" className="cover-section general-section">
                {/*<div className="video-background-container">
                    <video className="video-background" preload="auto" autoPlay loop muted>
                        <source type="video/mp4" src={'assets/img/final_video_bg.mp4'} />
                    </video>
                    <a href="#timeline" className="anchor-link">
		                  <img src={'assets/img/arrow.png'} alt="" className="arrow"/>
	                </a>
                </div>*/}
                {/* -<div className="black-dot-background-overlay"> </div> */}


                <div className="wrap">

                        <img className="metalyfe-logo" src={'assets/img/metalyfe_logo.png'}/>

                </div>
            </section>
        )
    }
}

export default TmpCover;
