console.log("wake up");

setTimeout(function() {
  console.log("brakfast - bacon and egg");
  setTimeout(function() {
    console.log("Take a shower!");
    setTimeout(function() {
      console.log("Go to work.");
      setTimeout(function() {
        console.log("Have lunch.");
        setTimeout(function() {
          console.log("Come back home.");
        }, 5000);
      }, 4000);
    }, 500);
  }, 2000);
}, 3000);

console.log("Morning tennis");
