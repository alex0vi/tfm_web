
'use strict'

import React, { PureComponent } from 'react';

import Ru from 'rutils';

import autobind from 'autobind-decorator';

import { Parallax } from 'react-parallax';

import Player from './components/Player'

import Partner from './components/Partner'

import { Grid, Row, Col } from 'react-bootstrap';

class Team extends PureComponent {

    constructor(props) {
        super(props);
    }

    render(){

        let { data } = this.props;

        return(
            <section id="team">
                <Parallax className="team-section general-section" bgImage="assets/img/bg_team2.png" strength={ 100 }>
                    <Grid>
                        <Row>
                            <Col md={ 12 }>
                                <h2 className="section-heading">
                                    { data.title }
                                </h2>
                                <p>{ data.description }</p>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={ 12 }>
                                <h2 className="title-team">{ data.titleManagement }</h2>
                            </Col>
                        </Row>
                        <Row className="team-list">
                            {
                                Ru.addIndex(Ru.map)(this.renderTeam, data.teamManagement)
                            }
                        </Row>

                        <Row>
                            <Col md={ 12 }>
                                <h2 className="title-team">
                                  { data.titleTechnical }
                                </h2>
                            </Col>
                        </Row>
                        <Row className="team-list">
                            {
                                Ru.addIndex(Ru.map)(this.renderTeam, data.teamTechnical)
                            }
                        </Row>

                        <Row>
                            <Col md={ 12 }>
                                <h2 className="title-team">
                                  { data.titleBusinessDevelopment}
                                </h2>
                            </Col>
                        </Row>
                        <Row className="team-list">
                            {
                                Ru.addIndex(Ru.map)(this.renderTeam, data.teamBusinessDevelopment)
                            }
                        </Row>

                        <Row>
                            <Col md={ 12 }>
                                <h2 className="title-team">
                                  { data.titleMarketing }
                                </h2>
                            </Col>
                        </Row>
                        <Row className="team-list">
                            {
                                Ru.addIndex(Ru.map)(this.renderTeam, data.teamMarketing)
                            }
                        </Row>
                        <Row>
                            <Col md={ 12 }>
                                <h2 className="title-team" >
                                  { data.titleAdvisors }
                                </h2>
                            </Col>
                        </Row>
                        <Row className="team-list">
                            {
                                Ru.addIndex(Ru.map)(this.renderTeam, data.teamAdvisors)
                            }
                        </Row>

                        <Row>
                            <Col md={ 12 }>
                                <h2 className="title-team">
                                  { data.titlePartners }
                                </h2>
                            </Col>
                        </Row>
                        <Row className="team-list">
                            {
                                Ru.addIndex(Ru.map)(this.renderTeam, data.teamPartners)
                            }
                        </Row>

                    </Grid>
                </Parallax>
            </section>
        )
    }

    renderTeam (spec, i) {
        if (spec.type === "team"){
            return (
                <Player spec={ spec } index = { i } />
            )
        } else {
            return (
                <Partner spec={ spec} index={ i } />
            )
        }
    }
}

export default Team;
