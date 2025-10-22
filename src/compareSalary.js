/**
 * Compares three salaries and find the difference between the max and the min
 * @param {number} firstSalary
 * @param {number} secondSalary
 * @param {number} thirdSalary
 * @returns {number}
 */
module.exports.compareSalary = function compareSalary(firstSalary, secondSalary, thirdSalary) {
  let arrSalary = [firstSalary, secondSalary, thirdSalary];
  arrSalary.sort((a, b) => a - b);

  let difference = arrSalary[2] - arrSalary[0];

  return difference;
};
