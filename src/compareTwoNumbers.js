/**
 * Compares two numbers
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @returns {string}
 */
module.exports.compareTwoNumbers = function compareTwoNumbers(firstNumber, secondNumber) {
  let res = Math.sign(firstNumber - secondNumber);
  switch (res) {
    case 1:
      return '>';
    case -1:
      return '<';
    case 0:
      return '=';
  }
};
