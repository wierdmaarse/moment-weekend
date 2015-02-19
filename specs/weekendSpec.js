var weekend = require('../weekend');
var moment = require('moment');

describe("weekend", function(){

  it("start date is not a moment should return error", function(){
    var start = "2015-02-12";
    expect(function() { weekend.diff(start, null)})
      .toThrow(new Error("start date is not a moment"));
  }); 

  it("end date is not a moment should return error", function(){
    var start = moment("2015-02-12");
    expect(function() { weekend.diff(start, null)})
      .toThrow(new Error("end date is not a moment"));
  });

  it("test", function(){
    var start = moment("2015-02-12");
    var end = moment("2015-02-17");
    var result = weekend.diff(start, end);

    expect(result).toBe(3);
  });

});