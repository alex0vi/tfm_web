'use strict';

import injectTapEventPlugin from 'react-tap-event-plugin';



let isInitalized = false;


const init = () => {

  if( !isInitalized ){
    injectTapEventPlugin();

    isInitalized = true;
  }

}

export default init;
