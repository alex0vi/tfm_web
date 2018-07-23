'use strict'

import React, { Component } from 'react';

import { Grid, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import Translations from "../Translations";

import Ru from 'rutils'

import autobind from 'autobind-decorator'

let pointerStyle = {
  cursor: 'pointer'
}

@autobind
class TopBar extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        const data = this.props.data;
        const switchLanguage = this.props.switchLanguage;

        return(

            <header className="header-section navbar-fixed-top" >
                <Navbar collapseOnSelect>
                  	<Navbar.Header>
                        <Navbar.Brand>
                            <a style =  { pointerStyle } href="/" >
                                <img className="logo-img" src={'assets/img/logoRTC.png'}  alt=""/>
                             </a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    {/*<Navbar.Collapse id="navigation" >
                        <Nav pullRight>
                            <NavItem eventKey={ 1 } href="#home">{ data.download }</NavItem>
                            <NavItem eventKey={ 2 } href="#features">{ data.features }</NavItem>
                            <NavItem eventKey={ 3 } href="#team">{ data.team }</NavItem>
                            <NavItem eventKey={ 4 } href="#roadmap">{ data.roadmap }</NavItem>
                            <NavItem eventKey={ 5 } href="#press">{ data.press }</NavItem>
                            <li><Translations switchLanguage={ switchLanguage } /></li>
                        </Nav>
                    </Navbar.Collapse> */}
                 </Navbar>
            </header>
        )
    }
}

export default TopBar;
