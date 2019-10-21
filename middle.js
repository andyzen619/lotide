const assertArraysEqual = require("./assertArraysEqual");

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

module.exports = middle;