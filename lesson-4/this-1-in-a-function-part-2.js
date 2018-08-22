"use strict";

function greeting(name) {
  console.log(this);
  this.greeting = `Hello, ${name}`;
}

greeting("Henry");

console.log(window.greeting);
console.log(window);
