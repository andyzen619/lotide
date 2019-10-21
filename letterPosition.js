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

module.exports = letterPosition;