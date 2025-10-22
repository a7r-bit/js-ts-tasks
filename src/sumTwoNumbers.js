/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  const first = variableToString(firstNumber);
  const second = variableToString(secondNumber);

  return first + second;
};

function variableToString(variable) {
  switch (typeof variable) {
    case 'number':
      return Number(variable);

    case 'string': {
      let currentVariable = variable.trim();
      currentVariable = currentVariable.replace(/\s/g, '');
      return Number(currentVariable);
    }

    default:
      return variable;
  }
}
