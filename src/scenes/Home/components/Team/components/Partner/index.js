
'use strict'

import React, { PureComponent } from 'react';

import Ru from 'rutils';

import autobind from 'autobind-decorator';

import { Col } from 'react-bootstrap';

@autobind
class Partner extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            displayBio: 0,
            visibilityImage: 'visible',
            bioHeight: '250px'
        }
    }

    handleClick() {
        if( this.state.displayBio == 0) {
            this.setState({
                displayBio: 1,
                visibilityImage: 'hidden'
            })
        }
    }

    mouseEnter() {
        this.setState({
            displayBio: 1,
            visibilityImage: 'hidden'
        })
    }

    mouseLeave() {
        this.setState({
            displayBio: 0,
            visibilityImage: 'visible'
        })
    }

    render (){
        let classNameContainer = 'team-list-item';
        let classNameRow = 'contain';
        let customCol = 4
        if ( this.props.spec.customCol ) {
            customCol = 3;
        }


        return (
            <Col md={ customCol } className={ classNameContainer }>
                <div className={ classNameRow }>
                    <div
                        className="img"
                        onMouseEnter={ this.mouseEnter }
                        onClick ={ this.handleClick }
                        >
                        <img className="parthner-img" src={  this.props.spec.image  }/>
                        <div
                            onMouseLeave={ this.mouseLeave } 
                            style={{ opacity: this.state.displayBio, height: this.state.bioHeight }}
                            className="bio">
                            <p>{ this.props.spec.bio }</p>
                        </div>
                    </div>
                    <div className="about" style= {{ justifyContent: "space-around" }}>
                        <div className="nameBlock">
                            <div className="name"> { this.props.spec.name }</div>
                        </div>
                        <div className="social">
                            <a href={ this.props.spec.website } target="_blank" className="website">  <i className="fa fa-globe" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </Col>
        )
    }
}

export default Partner;
