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

module.exports = findKey;