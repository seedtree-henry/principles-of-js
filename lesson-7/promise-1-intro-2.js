var promise1 = new Promise(function(resolve, reject) {
  var random = Math.random();
  console.log(random);
  if (random > 0.25) {
    resolve("Done");
  } else {
    reject("Error");
  }
});

promise1
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });

console.log(promise1);
