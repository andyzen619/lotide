const eqArrays = require("./eqArrays");

/**
 * Returns assertion statment for comparing arrays arr1 and arr2.
 * @param {*} arr1 
 * @param {*} arr2 
 */
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`Assertion PASSED: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`Assertion FAILED: [${arr1}] !== [${arr2}]`);
  }
};

module.exports = assertArraysEqual;