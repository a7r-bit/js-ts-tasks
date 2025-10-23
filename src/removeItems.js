/**
 * Write a function which removes from given array items are equal a given value
 * @param {Object} arr
 * @param {Object | number | string | boolean} value
 * @returns {Object}
 */
module.exports.removeItems = function removeItems(arr, value) {
  let returnArray = [];

  for (const element of arr) {
    const isEqual =
      typeof element == 'object'
        ? // Parse Obj to JSON line
          JSON.stringify(element) == JSON.stringify(value)
        : element == value;

    if (!isEqual) {
      returnArray.push(element);
    }
  }

  return returnArray;
};
