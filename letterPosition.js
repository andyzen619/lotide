/**
 * Returns true if actual is equal to expected, false if otherwise.
 * @param {*} actual 
 * @param {*} expected 
 */
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`Assertion Failed: "${actual}" !== "${expected}"`);
  };
}

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

/**
 * Returns a new array that contains items in arr1 that are not in arr2.
 * @param {*} arr1 
 * @param {*} arr2 
 */
const without = function(arr1, arr2) {
  let result = [];

  //Loop through items in arr1 
  for (i in arr1) {
    if (!arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return result;
}

/**
 * Returns an object that contains the index information for letter of str
 * @param {string} str 
 */
const letterPosition = function(str) {
  let result = {};

  //Loop through indices of str.
  for (index in str) {
    let letter = str[index];

    //If result contains letter prop, append index to array value of that letter. If if doesn't, intialize property with value as an array with the index.
    if (result[letter]) {
      //Convert index to number before appending to array.
      result[letter].push(Number(index));
    } else {
      result[letter] = [Number(index)];
    }
  }
  return result;
};
result1 = letterPosition("Hello");

assertArraysEqual(result1.H, [0]);
assertArraysEqual(result1.e, [1]);
assertArraysEqual(result1.l, [2, 3]);
assertArraysEqual(result1.o, [4]);