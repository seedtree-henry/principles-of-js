function greeting(name) {
  this.greeting = `Hello, ${name}`;
}

greeting("Henry");

console.log(window.greeting);
console.log(window);
