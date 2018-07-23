'use strict';

const RESET_COMMUNICATION = 'RESET_COMMUNICATION';

const resetCommunication = () => {

  return {
    type: RESET_COMMUNICATION,
    payload: {},
  }
};


export {RESET_COMMUNICATION , resetCommunication};
