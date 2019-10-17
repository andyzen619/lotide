const assertLibrary = require("/vagrant/w1/lotide/assertObjectsEqual.js");


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const words = ["ground", "control", "to", "major", "tom"];

result1 = map(words, word => word[0]);
assertLibrary.assertArraysEqual(result1, ['g', 'c', 't', 'm', 't']);