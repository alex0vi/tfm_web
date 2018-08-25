'use-strict';
import _ from 'lodash';

let initStream;

  const start = () => {
    const constraints = {
      video: {
        facingMode: 'user',
        height: { min: 360, ideal: 720, max: 1080 }
      },
      audio: true
    };

    return navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        initStream = stream;
        //this.emit('stream', stream);
      })
      .catch(err => console.log(err));

  }
  /**
   * Turn on/off a device
   * @param {String} type - Type of the device
   * @param {Boolean} [on] - State of the device
   */
  const toggle = (type, on) => {
    const len = arguments.length;
    if (initStream) {
      return initStream[`get${type}Tracks`]().forEach((track) => {
        const state = len === 2 ? on : !track.enabled;
        _.set(track, 'enabled', state);
      });
    }

  }

  /**
   * Stop all media track of devices
   */
  const stop = () => {
    if (initStream) {
     return initStream.getTracks().forEach(track => track.stop());
    }

  }


export default {
    start,
    stop,
    toggle

};
