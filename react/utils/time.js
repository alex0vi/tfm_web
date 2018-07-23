'use strict'

const R = require('ramda')
import moment from 'moment'


const mkFormatDate = R.curry( (format, dateStr) => {
  return moment.utc(dateStr).local().format(format);
});


const formatDate = mkFormatDate('D-MMM-Y_HH-MM-SS')
// const formatDate2 = mkFormatDate('SS-MM-HH')



const getDifferenceBetweenNowAndDate = (date) => {

  let newDate = formatDate(date);
  let duration = moment(date).fromNow();
  return duration;
}



export {
  getDifferenceBetweenNowAndDate
}
