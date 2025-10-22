/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  let startInt = parseInt(start);
  let endInt = parseInt(end);
  let sum = 0;

  const min = Math.min(startInt, endInt);
  const max = Math.max(startInt, endInt);

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
};
