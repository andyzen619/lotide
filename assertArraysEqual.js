const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

/**
 * Returns true if arr1 and arr2 are equal and false otherwise.
 * @param {*} arr1 array to be compared.
 * @param {*} arr2 array to be compared.
 */
let eqArrays = function(arr1, arr2) {
  //Checks for equal length, return false if otherwise.
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    //Loops through items or array and checks if they are equal, return false if otherwise.
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }
  return true;
}

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

assertArraysEqual([], []);
assertArraysEqual([1, 1, 1, 1], [1, 1]);
assertArraysEqual([12344], []);