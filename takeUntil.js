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

//-----------------------Test----------------------
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertLibrary.assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertLibrary.assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);