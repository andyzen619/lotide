/**
 * Return the key in which the first occurence of val appears in obj.
 * @param {Object} obj 
 * @param {Object} val 
 */
const findKeyByValue = function(obj, val) {
  for (key in obj) {
    //Don't forget triple equals 
    if (obj[key] === val) {
      return key;
    }
  }
}
module.exports = findKeyByValue;