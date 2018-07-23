'use strict';

import R from 'ramda';

let dataFromRestOfAddaps = { };


const setDataFromRestOfAddaps = data => {
  dataFromRestOfAddaps = R.merge(dataFromRestOfAddaps, data);
}


const getDataFromRestOfAddaps = () => dataFromRestOfAddaps;


export {setDataFromRestOfAddaps, getDataFromRestOfAddaps};
