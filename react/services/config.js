'use strict';


const NODE_ENV_PROD_STRING = 'production';
const NODE_ENV_DEV_STRING = 'development';



const devConfig = {
  api: {
    url: 'http://localhost:4000/api/v2',
  },
};


const prodConfig = {
  api: {
    url: 'https://latest.addaps.com/api/v2',
  },
};


const nodeEnv = 'production';

const CONFIG = nodeEnv === NODE_ENV_PROD_STRING ? prodConfig : devConfig;


export default CONFIG;
