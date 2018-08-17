import React, { Component } from 'react';
import PropTypes from 'proptypes';
import { Grid, Row , Col } from 'react-bootstrap';

let friendId;

class MainWindow extends Component {
  /**
   * Start the call with or without video
   * @param {Boolean} video
   */
  callWithVideo(video) {
    const config = {audio: true};
    config.video = video;
    return () => this.props.startCall(true, friendId, config);
  }

  render() {
    const { clientId } = this.props;
    
    return (



        <Col md={ 4 } mdOffset={ 4 }>
            <h2 className="section-heading">
             hi { this.props.profile.firstName } { this.props.profile.lastName }

            </h2>
            <p>You account  ID: <input type="text" className="txt-clientId" value={clientId} /></p>
            <div>
              <input
                type="text"
                className="txt-clientId"
                spellCheck={false}
                placeholder="Your friend ID"
                onChange={event => friendId = event.target.value}
              />
              <div>
                <button
                  className="btn-action fa fa-video-camera"
                  onClick={this.callWithVideo(true)}
                />
                <button
                  className="btn-action fa fa-phone"
                  onClick={this.callWithVideo(false)}
                />
              </div>
            </div>
        </Col>




    );
  }
}

MainWindow.propTypes = {
  clientId: PropTypes.string.isRequired,
  startCall: PropTypes.func.isRequired
};

export default MainWindow;
