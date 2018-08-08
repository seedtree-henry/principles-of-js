var greeting = "Hello!";
var menu = "Angry Wopper!";
var goodbye = "See you tomorrow!";

console.log(greeting);

setTimeout(haveLunch, 3000);

// setTimeout(haveLunch(), 3000); => error

function haveLunch() {
  console.log(`Please order ${menu}.`);
}

console.log(goodbye);
