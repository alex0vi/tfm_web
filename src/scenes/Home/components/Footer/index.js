'use strict'

import React, {PureComponent} from 'react';

import { Grid, Row, Col } from 'react-bootstrap';

import autobind from 'autobind-decorator'

@autobind
class Footer extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {

        let { data } = this.props;

        return (
            <footer className="footer-section section">
                <Grid>
                    <Row>
                        <Col md={ 4 } mdOffset={ 4 }>
                            <img className="small-logo" src={'assets/img/metalyfe_lg.png'}/>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={ 12 }>
                            <ul className="social-media-links">
                                <li>
                                    <a href="https://fb.me/metalyfe" target="new">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/metalyfe" target="new">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
        							<a href="https://www.instagram.com/metalyfe_official/" target="new">
        								<i className="fa fa-instagram"></i>
        							</a>
        						</li>
                                <li>
                                    <a href="https://medium.com/@media_32399" target="new">
                                        <i className="fa fa-medium"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.reddit.com/user/MetaLyfe/" target="new">
                                        <i className="fa fa-reddit"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://metalyfe.slack.com/" target="new">
                                        <i className="fa fa-slack"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://t.me/MetaLyfe" target="new">
                                        <i className="fa fa-telegram"></i>
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>

                    <Row className="navbar navbar-default footer-menu">
                        <Col md={ 12 } className="footer-border">
                            <div className="navbar-header">
                                <div className="copyright_with_menu">Copyright © 2018 Metalyfe.com</div>
                            </div>
                            <div id="bottomnavigation">
                                <ul className="nav navbar-nav navbar-right">
                                    <li>
                                        <a href={'terms.html'} target="_blank">{data.termsAndConditions}</a>
                                    </li>
                                    <li>
                                        <a href="#home" className="anchor-link">{data.download}</a>
                                    </li>
                                    <li>
                                        <a href="#features" className="anchor-link">{data.features}</a>
                                    </li>
                                    <li>
                                        <a href="#roadmap" className="anchor-link">{data.roadmap}</a>
                                    </li>

                                    <li>
                                        <a href="mailto:contact@metalyfe.com">{data.contact}</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </footer>
        )
    }
}

export default Footer;
