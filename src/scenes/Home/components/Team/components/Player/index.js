
'use strict'

import React, { PureComponent } from 'react';

import Ru from 'rutils';

import autobind from 'autobind-decorator';

import { Col } from 'react-bootstrap';

@autobind
class Player extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
            icon:      '',
            displayBio: 0,
            visibilityImage: 'visible',
            bioHeight: '250px'
        }
    }

    expandedText() {
        if (this.state.expanded) {
            this.setState({
                expanded: false,
                bioHeight: '250px',
                icon: 'right'
            });
        } else {
            this.setState({
              expanded: true,
              bioHeight: 'auto',
              icon: 'left'
            });
        }
    }

    getMoreTextDiv(myText) {
        if (myText.length <= 310 || this.state.expanded === true) {
            return myText;
        } else {
            this.setState({
                expanded: false,
                icon: 'right'
            });
            return myText.substr(0, 311)+'...';
        }
    }

    checkOpen(icon) {
        const aPropsIcon = {
            className: `icon-m-l fa fa-angle-double-${icon}`
        }

        const aPropsLink = {
            onClick: this.expandedText,
        }

        return (
            <a { ...aPropsLink }>
                <i { ...aPropsIcon } aria-hidden='true'></i>
            </a>
        )
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
        let linked = this.checkOpen( this.state.icon );

        // if (this.props.spec.type === 'team') {
        //     switch (this.props.index) {
        //         case 0:
        //             classNameContainer = 'wow fadeInLeft wowed animated team-list-item'
        //             break;
        //         case 1:
        //             classNameContainer = 'wow zoomIn wowed animated team-list-item'
        //             break;
        //         case 2:
        //             classNameContainer = 'wow zoomIn wowed animated team-list-item'
        //             break;
        //         case 3:
        //             classNameContainer = 'wow fadeInRight wowed animated team-list-item'
        //             break;
        //         default:
        //     }
        // }

        return (
            <Col md={ 3 } className={ classNameContainer }>
                <div className={ classNameRow }>
                    <div
                        onMouseEnter={ this.mouseEnter }
                        onClick ={ this.handleClick }
                        className="img"
                        style={{
                            backgroundImage: `url( ${ this.props.spec.image } )`

                        }}>
                        <div
                            onMouseLeave={ this.mouseLeave }
                            style={{ opacity: this.state.displayBio, height: this.state.bioHeight }}
                            className="bio">
                            <p>{ this.getMoreTextDiv(this.props.spec.bio) }
                            { linked }</p>
                        </div>
                    </div>
                    <div className="about">
                        <div className="nameBlock">
                            <div className="name"> { this.props.spec.name }</div>
                            <div className="office">{ this.props.spec.office }</div>
                            <div className="office">{ this.props.spec.company }</div>
                        </div>
                        <div className="social">
                            <a href={ this.props.spec.linkedin } target="_blank" className="linkedin">  <i className="fa fa-linkedin" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </Col>
        )
    }
}

export default Player;
