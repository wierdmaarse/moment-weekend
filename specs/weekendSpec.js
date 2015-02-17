var weekend = require('../weekend');
var moment = require('moment');

describe("weekend", function(){

  it("test", function(){
    var start = moment("2015-02-12");
    var end = moment("2015-02-17");
    var result = weekend.diff(start, end);

    expect(result).toBe(3);
  });

});