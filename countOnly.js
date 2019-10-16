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
 * Returns an object that contains the count of itemsToCount in allItems. 
 * @param {Array} allItems an array of strings that we need to look through
 * @param {Object} itemsToCount an object specifying what to count
 */
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    //If property exists in objects add 1, if not then create and assign 1.
    if (results[item]) {
      results[item] += 1;
    } else {
      results[item] = 1;
    }
  }
  console.log(results);
  return results;
}

//--------------Tests-----------------

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);