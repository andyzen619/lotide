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
      if (Array.isArray(arr1[i])) {
        if (!eqArrays(arr1[i], arr2[i])) {
          return false;
        }
      } else {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
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
    //If object 2 does not contain the key that is in object 1.
    if (!object2[key]) {
      return false;
    }

    //If value at key is an array
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object2[key], object1[key])) {
        return false;
      }
    }

    // value at key is not an object
    else if (isObject(object1[key])) {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    }

    //Compare the value of the key in both object 1 and 2.
    else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

// Returns if a value is an object
function isObject(value) {
  return value && typeof value === 'object' && value.constructor === Object;
}

//Primiteves as values Tests
const ab = { a: "1", b: "2", c: 4 };
const ba = { b: "2", a: "1", c: 3 };
assertEqual(eqObjects(ab, ba), false); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

//Arrays as Values tests

const cd = { c: "5", d: ["2", 3] };
const dc = { d: ["2", 3], c: "5" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

//Objects as arrays test

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false

console.log("Testing eqArray nested");
console.log("_______________________________________________")

assertEqual(eqArrays([
  [2, 3],
  [4]
], [
  [2, 3],
  [4]
]), true); // => true

assertEqual(eqArrays([
  [2, 3],
  [4]
], [
  [2, 3],
  [4, 5]
]), false); // => false
assertEqual(eqArrays([
  [2, 3],
  [4]
], [
  [2, 3], 4
]), false); // => false