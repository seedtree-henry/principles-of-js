// Javascript has Math library so we can use functions of Math library.
// Search Math.random() function and understand how it works.
// Search Math.ceil() and Math.floor() functions.

// Draw js execution diagram for the following.
// Clearly show all the steps line-by-line in the diagram.
// Due date : 03/08/2018 Friday

var num1 = randomIntegerFrom1to100();
var num2 = randomIntegerFrom1to100();

var num3 = addTwo(num1, num2);

console.log(num3);

function randomIntegerFrom1to100() {
  var randomNum = Math.ceil(Math.random() * 100);
  return randomNum;
}

function addTwo(a, b) {
  var sum = a + b;
  return sum;
}
