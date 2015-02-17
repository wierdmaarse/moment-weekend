var moment = require('moment');

exports.diff = function(startDate, endDate) { 

  if(startDate > endDate)
    throw new Error('start date cannot be greater than end date');

  var format = 'DD-MM-YYYY';
  var dateIterator = moment(startDate);
  var index = 0;
  while(dateIterator.format(format) != endDate.format(format)){
    var dayOfWeek = dateIterator.format('ddd'); 
    if(dayOfWeek != "Sun" && dayOfWeek != "Sat"){
      index++;
    }
    dateIterator.add('days', 1);
  }

  return index;
};