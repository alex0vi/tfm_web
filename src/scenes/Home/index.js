'use strict'

import React, { Component } from 'react'

import Cover from './components/Cover'

import Video from './components/Video'

import Features from './components/Features'

import BlockchainFeatures from './components/BlockchainFeatures'

import Team from './components/Team'

import Roadmap from './components/Roadmap'

import Press from './components/Press'

import Download from './components/Download'

import Footer from './components/Footer'

class Home extends Component {

    constructor() {
        super();
    }

    render(){
        const home = this.props.data;
        const buttons = this.props.buttons;

        return(
            <div className="sections-container">
                <Cover data={ home.cover } buttons={ buttons }/>
                {/*<Video />
                <Features data={ home.features } />
                <BlockchainFeatures data={ home.blockchainFeatures } />
                <Team data={ home.ourTeam }/>
                <Roadmap data={ home.roadmap } />
                <Press data={ home.press } />

                <Download buttons={ buttons }/>
                <Footer data={ home.footer }/>*/}
            </div>
        )
    }
}

export default Home;
