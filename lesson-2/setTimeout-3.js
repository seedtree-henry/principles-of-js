var greeting = "Hello!";
var menu = "Angry whopper!";
var goodbye = "See you tomorrow!";

console.log(greeting);

setTimeout(haveLunch, 3000);

setTimeout(sayGoodbye, 2000);

function haveLunch() {
  console.log(`Please order ${menu}.`);
}

function sayGoodbye() {
  console.log(goodbye);
}
