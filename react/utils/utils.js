'use strict';


import R from 'ramda';

const randomID = () => {


  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c =>  {
    let r = Math.random()*16|0;
    let v = c === 'x' ? r : (r&0x3|0x8);

    return v.toString(16);
  });
}


const decorate = (...rest) => R.compose( ...R.init(rest) )( R.last(rest) );

const isFunction = el => typeof el === 'function';

const getAllFuncs = (obj) => {
    let props = [];

    do {
        props = props.concat(Object.getOwnPropertyNames(obj));
    } while (obj = Object.getPrototypeOf(obj));
    console.log("getAllFunct", props, obj);

    return R.filter(el => isFunction(obj[el]) , props)
};

const autobindFunctions = (self) => {
    let functionList = getAllFuncs(self);
    R.map(el => self[el].bind(self), functionList)
};


export {randomID, decorate, autobindFunctions};
