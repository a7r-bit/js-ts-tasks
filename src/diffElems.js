/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {
  /*Fitrs solution
  const set = new Set(arr);
  return set.size
  */

  // Second solution
  let diffNumberCount = 0;
  const sortedArr = arr.sort((a, b) => a - b);

  for (let i = 0; i < sortedArr.length; ++i) {
    if (sortedArr[i] != sortedArr[i - 1]) diffNumberCount++;
  }
  return diffNumberCount;
};
