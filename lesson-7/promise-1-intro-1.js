var promise1 = new Promise(function(resolve, reject) {
  var random = Math.random();
  console.log(random);
  if (random > 0.25) {
    resolve("Done");
  } else {
    reject("Error");
  }
});

console.log(promise1);
