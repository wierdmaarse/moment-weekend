var moment = require('moment');

var diff = function(startDate, endDate) {
    if(!moment.isMoment(startDate))
      throw new Error('start date is not a moment');

    if(!moment.isMoment(endDate))
      throw new Error('end date is not a moment');

    if(startDate > endDate)
      throw new Error('start date cannot be greater than end date');

    var pattern = 'DD-MM-YYYY';
    var dateIterator = moment(startDate);
    var index = 0;
    while(dateIterator.format(pattern) != endDate.format(pattern)){

      if(!isWeekend(dateIterator)){
        index++;
      }

      dateIterator.add(1, 'days');
    }
    return index;
  };

var isWeekend = function (date){
  return date.isoWeekday() >= 6;
}

module.exports = {
  diff: diff,
  isWeekend: isWeekend
};
