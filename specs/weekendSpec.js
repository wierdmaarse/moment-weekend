var weekend = require('../weekend');
var moment = require('moment');

describe('weekend', function(){

  it('start date is not a moment should return error', function(){
    var start = '2015-02-12';
    expect(function() { weekend.diff(start, null)})
      .toThrow(new Error('start date is not a moment'));
  });

  it('end date is not a moment should return error', function(){
    var start = moment('2015-02-12', 'YYYY-MM-DD')
    expect(function() { weekend.diff(start, null)})
      .toThrow(new Error('end date is not a moment'));
  });

  it('test', function(){
    var start = moment('2015-02-12', 'YYYY-MM-DD')
    var end = moment('2015-02-17', 'YYYY-MM-DD')
    var result = weekend.diff(start, end);

    expect(result).toBe(3);
  });

  it('should say its weekend for a saturday', function(){
    var date = moment('2015-07-04', 'YYYY-MM-DD')
    var result = weekend.isWeekend(date);
    expect(result).toBe(true);
  });

  it('should say its weekend for a sunday', function(){
    var date = moment('2015-07-05', 'YYYY-MM-DD')
    var result = weekend.isWeekend(date);
    expect(result).toBe(true);
  });

  it('should say it isnt weekend for a monday', function(){
    var date = moment('2015-07-06', 'YYYY-MM-DD')
    var result = weekend.isWeekend(date);
    expect(result).toBe(false);
  });
});
