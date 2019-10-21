const assertLibrary = require("/vagrant/w1/lotide/assertObjectsEqual.js");

const takeUntil = function(array, callback) {
  // ...
  let result = [];
  let i = 0;
  while (i < array.length) {
    console.log(array[i] + ": " + callback(array[i]));
    if (callback(array[i])) {
      break;
    }
    result.push(array[i]);
    i++;
  }
  return result;
}

module.exports = takeUntil;