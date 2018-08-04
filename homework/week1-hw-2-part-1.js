// 1) Search Math.abs.
// 2) Draw a diagram for the following.
// 3) Do you think that this is well structured code? Why or why not?

var num1 = 3;
var num2 = 7;
var num3 = 8;

var num4 = subtractThenMultiply(num1, num2, num3);

console.log(num4);

function addThenMultiply(a, b, c) {
  var sum = a + b;
  var result = sum * c;
  return result;
}

function subtractThenMultiply(a, b, c) {
  var difference = Math.abs(a - b);
  var result = difference * c;
  return result;
}

function multiplyThenMultiply(a, b, c) {
  var product = a * b;
  var result = product * c;
  return result;
}
