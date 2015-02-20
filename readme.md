moment-weekend
==============

Using the moment.js to work out the number of days passed NOT including the weekend.

```
var weekend = require('moment-weekend');

var start = moment("2015-02-12");
var end = moment("2015-02-17");
var result = weekend.diff(start, end); // result = 3
```