// 1) draw a diagram for the following.
// 2) compare the result to part-1. Note that this is better written code.

var num1 = 3;
var num2 = 7;
var num3 = 8;

var num4 = subtractThenMultiply(num1, num2, num3);

console.log(num4);

function addThenMultiply(a, b, c) {
  var sum = a + b;
  return multiply(sum, c);
}

function subtractThenMultiply(a, b, c) {
  var difference = Math.abs(a - b);
  var result = multiply(difference, c);
  return result;
}

function multiplyThenMultiply(a, b, c) {
  var product = a * b;
  var result = multiply(product, c);
  return result;
}

function multiply(a, multiplier) {
  return a * multiplier;
}
