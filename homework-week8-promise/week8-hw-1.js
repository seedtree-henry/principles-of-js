var promise1 = new Promise(function(resolve, reject) {
  var random = Math.random();
  console.log(random);
  if (random > 0.25) {
    resolve("Done");
  } else {
    reject("Error");
  }
});

setTimeout(function() {
  console.log("Hey");
}, 0);

promise1
  .then(function(data) {
    console.log(data);
    console.log(promise1);
  })
  .catch(function(error) {
    console.log(error);
    console.log(promise1);
  });

console.log(promise1);
