'use strict'

import React, { Component } from 'react';

import autobind from 'autobind-decorator';

import DonwloadButtons from '../../../../components/DownloadButtons'

@autobind
class Cover extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            displayVideo: ''
        };
    }

    openModal () {
      this.setState({isOpen: true})
      this.setState({ displayVideo: 'displayVideo'});
    }

    handleClick(target){
        ga('send', 'event', 'Download', target, 'Download on cover section');
    }

    render(){

        let { data, buttons }  = this.props;

        return(
            <section id="home" className="cover-section general-section" style={{ background: "url('assets/img/background-v2.jpg')", backgroundSize: "100% 101%", backgroundRepeat: 'no-repeat' }}>
                {/*<a className="tlg" href="https://t.me/metalyfe" target="_blank"><i className="fa fa-telegram" aria-hidden="true"></i></a>
                <a className="go-to-ico" target="_blank" href="https://metalyfe.io/"><img src={'assets/img/coin_small.png'}/><p>Metalyfe.io ICO</p></a> */}
                <div className="wrap">
                    {/*<div className="text">
                        <h1 className="title">Regain your data ownership</h1>
                         <p className="description">{ data.description } <span>{ data.descriptionTwo }</span></p>

                        <div className="lc-soon">
                            <p className="soon-text">LAUNCHING SOON</p>
                            <p className="text">
                                <a className="more-info" href="https://metalyfe.typeform.com/to/yOVZRH" target="_blank">
                                    Pre-register here to be first in line to download the Metalyfe Blockchain Browser & Portal
                                    <i className="fa fa-external-link" aria-hidden="true"></i>
                                </a>
                            </p>
                        </div>
                        <p className="description"> It is time for you to <span>reclaim</span> what is rightfully yours</p>

                        <p className="download-buttons">
                            <DonwloadButtons data={ buttons } ua={ window.navigator.userAgent  }/>
                        </p>
                    </div>
                    <div className="images">
                        <img src={ 'assets/img/cover.png' }/>
                    </div> */}
                </div>
            </section>
        )
    }
}

export default Cover;
