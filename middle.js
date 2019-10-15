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
 * Return a new array containing the middle item or array if size of array is odd and return the middle two items in an array if the size of array is even.
 * @param {} array 
 */
const middle = function(array) {
  let result = [];

  //Outter if statement checks for odd or even sized array
  if ((array.length % 2 == 0)) {
    //Checks for case of size greater than 2.
    if (array.length > 2) {
      let firstMiddleIndex = (array.length / 2);
      let secondMiddleIndex = ((array.length / 2) - 1);

      //Append to result array two middle indices to result array.
      result.push(array[secondMiddleIndex]);
      result.push(array[firstMiddleIndex]);
    }
  } else {
    let middleIndex = Math.floor((array.length / 2));

    result.push(array[middleIndex]);
  }
  return result;
}

console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1, 2]), []);