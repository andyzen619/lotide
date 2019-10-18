const assertLibrary = require("/vagrant/w1/lotide/assertObjectsEqual.js");

let findKey = function(object, callback) {
  let keys = Object.keys(object);
  for (key of keys) {
    let starsObject = object[key];
    if (callback(starsObject)) {
      return key;

    }
  }
};

let result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2);

console.log(Math.pow(3, 2));
console.log(result1);

assertLibrary.assertEqual(result1, "noma");