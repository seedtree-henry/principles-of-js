// two-num-operations.js

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return Math.abs(a - b);
}

function multiply(a, b) {
  return a * b;
}

function quotient(a, b) {
  return Math.floor(a / b);
}

function remainder(a, b) {
  return a % b;
}

module.exports = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  quotient: quotient,
  remainder: remainder
};
