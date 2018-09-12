var promise1 = new Promise(function(resolve, reject) {
  if (Math.random() > 0.5) {
    setTimeout(function() {
      resolve("Done");
    }, 3000);
  } else {
    setTimeout(function() {
      reject("Error");
    }, 3000);
  }
});

setTimeout(function() {
  console.log("Hey");
}, 3000);

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
