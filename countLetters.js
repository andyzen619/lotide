/**
 * Returns and object that contains the number of occurences for each letter of str.
 * @param {Str} str 
 */
const countLetters = function(str) {
  let result = {};
  for (letter of str) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
}

module.exports = countLetters;