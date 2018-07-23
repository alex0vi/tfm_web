'use strict';

let ReactDOM      = require('react-dom');

import R from 'ramda';
import React, { PureComponent } from 'react';
import Bluebird               from 'bluebird';
import _                      from 'lodash';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';

import Radium                 from 'radium';
import autobind               from 'autobind-decorator';
import RefreshIndicator       from 'material-ui/RefreshIndicator';

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  loading: {
    display: 'inline-block',
    position: 'relative',
  }
};


@autobind
@Radium
class Loading extends PureComponent {

  constructor(props){
    super(props);
  }

  render(){

    return (
      <div style = {[styles.container,this.props.style]}>

        <RefreshIndicator
          size={50}
          left={70}
          top={0}
          status="loading"
          style={styles.loading}
        />

      </div>
    )
  }

}

export default Loading;
