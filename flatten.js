/**
 * Returns an array that contains all the items without the nested array.
 * @param {*} array 
 */
const flatten = function(array) {
  let result = [];

  //Iterate through array items push if not array
  for (i in array) {
    if (!Array.isArray(array[i])) {
      result.push(array[i]);
    } else {
      //If is an array, iterate through nested array and push to result.
      for (j in array[i]) {
        result.push(array[i][j]);
      }
    }
  }
  return result;
};

module.exports = flatten;