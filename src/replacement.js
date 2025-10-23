/**
 * Write a function which for every numbers (negative/positive numbers, zeros) in given array replaces:
 *  one digit numbers with number 1
 *  two digits numbers with number 2
 *  three digits numbers with number 3
 *  the rest numbers with number 4
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */
module.exports.replacement = function replacement(arr) {
  let returnArray = [];

  for (const element of arr) {
    returnArray.push(replaceDigits(element));
  }
  return returnArray;
};

function replaceDigits(number) {
  let stringNumber = number > 0 ? number.toString() : Math.abs(number).toString();

  switch (stringNumber.length) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 3:
      return 3;
    default:
      return 4;
  }
}
