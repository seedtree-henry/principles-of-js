var greeting = "Hello!";
var menu = "Angry Wopper!";
var goodbye = "See you tomorrow!";

console.log(greeting);

setTimeout(haveLunch, 3000);

function haveLunch() {
  console.log(`Please order ${menu}.`);
  setTimeout(sayGoodbye, 2000);
}

function sayGoodbye() {
  console.log(goodbye);
}
