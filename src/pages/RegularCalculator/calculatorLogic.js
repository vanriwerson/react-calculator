/* eslint-disable no-eval */
const basicOperations = () => ({
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
  sum: (a, b) => a + b,
  subtract: (a, b) => a - b,
});

const simplifyExpression = (expression) => {
  const acceptedInputs = /([0-9])|\(|\)|\*|\/|\+|-|\.| /g;
  const isValidExpression = expression.match(acceptedInputs);

  if (isValidExpression) {
    try {
      return eval(expression)
    } catch(error) {
      return 'ERROR';
    }
  }
}

export {
  basicOperations,
  simplifyExpression,
}