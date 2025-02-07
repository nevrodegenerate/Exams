// Extract substring between prefix and suffix
'use strict';

const getValueBetween = (fullString, startString, endString) => {
  fullString = fullString.substring(fullString.indexOf(startString) + startString.length);
  fullString = fullString.substring(0, fullString.indexOf(endString));
  return fullString;
};

require('../Tests/between.js')(getValueBetween);
