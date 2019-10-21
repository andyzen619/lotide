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

module.exports = countOnly;