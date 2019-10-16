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

const compareObjectSizes = function(obj1, obj2) {
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    return true;
  }
  return false;
}

/**
Returns true if both objects have identical keys with identical values.
Otherwise you get back a big fat false!
*/
const eqObjects = function(object1, object2) {
  if (!compareObjectSizes(object1, object2)) {
    return false;
  }
  for (key of Object.keys(object1)) {
    if (!object2[key]) {
      return false;
    } else {
      if (!eqArrays(object2[key], object1[key])) {
        return false;
      }
    }
  }
  return true;
};

//Primiteves as values Tests
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

//Arrays as Values tests

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false