/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  let maxSeq = [];
  let currentSeq = [];

  for (let i = 0; i < arr.length; i++) {
    if (i == 0 || arr[i] == arr[i - 1]) {
      currentSeq.push(arr[i]);
    } else {
      if (currentSeq.length > maxSeq.length) {
        maxSeq = currentSeq;
      }

      currentSeq = [arr[i]];
    }
  }

  return currentSeq.length > maxSeq.length ? currentSeq : maxSeq;
};
