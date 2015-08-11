var weekend = require('../weekend');
var moment = require('moment');

describe('diff', function() {

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
});

describe('isWeekend', function() {

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

describe('isWeekday', function() {

  it('should say it is weekday for a monday', function(){
    var date = moment('2015-08-12', 'YYYY-MM-DD')
    var result = weekend.isWeekday(date);
    expect(result).toBe(true);
  });

  it('should say it is weekday for a Tuesday', function(){
    var date = moment('2015-08-13', 'YYYY-MM-DD')
    var result = weekend.isWeekday(date);
    expect(result).toBe(true);
  });  

  it('should say it isnt weekday for a Saturday', function(){
    var date = moment('2015-08-08', 'YYYY-MM-DD')
    var result = weekend.isWeekday(date);
    expect(result).toBe(false);
  });

  it('should say it isnt weekday for a Sunday', function(){
    var date = moment('2015-08-09', 'YYYY-MM-DD')
    var result = weekend.isWeekday(date);
    expect(result).toBe(false);
  });

});
