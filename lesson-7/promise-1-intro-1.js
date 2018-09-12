// var promise1 = new Promise(function(resolve, reject) {
//   if (Math.random() > 0.25) {
//     resolve("Done");
//   } else {
//     reject("Error");
//   }
// });

var promise1 = new Promise(function(resolve, reject) {
  if (Math.random() > 0.25) {
    resolve("Done");
  } else {
    reject("Error");
  }
});

// setTimeout(function() {
//   console.log("Hey");
// }, 0);

promise1
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });

console.log(promise1);
