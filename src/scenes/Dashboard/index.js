'use strict'

import Ru from 'rutils'

import React, { PureComponent } from 'react'

import { connect } from 'react-redux'

import { Grid, Row , Col } from 'react-bootstrap';

const mapStateToProps = ( state, ownProps ) => {

    return {
      profile : state.user.profile,
      accessToken : state.user.accessToken,
    }
}


@connect(mapStateToProps, null)
class Dashboard extends PureComponent {

    constructor(props) {
        super(props)
    }

    render(){
        console.log('jojo',this.props);

        return(
            <section id="dashboard" className="dashboard-section section" >
                <Grid>
                    <Row>
                        <Col md={ 4 } mdOffset={ 4 }>
                            <h2 className="section-heading">
                                Hi { this.props.profile.firstName } { this.props.profile.lastName }
                            </h2>
                            <p>You account  ID: { this.props.profile.firstName }-{ this.props.profile.id }</p>

                        </Col>

                    </Row>
                </Grid>
            </section>
        )
    }
}

export default Dashboard
