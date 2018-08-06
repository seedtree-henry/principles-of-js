// (Challenging) Draw a diagram.

var num1 = 10;
var num2 = 8;

var result1 = mixedOperation(15, multiply, subtract);

var result2 = mixedOperation(42, remainder, add);

console.log(result1);

console.log(result2);

function mixedOperation(number, cb1, cb2) {
  var result = cb2(num2, cb1(number, num1));
  return result;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a + b;
}

function quotient(a, b) {
  return Math.floor(a / b);
}

function remainder(a, b) {
  return a % b;
}
