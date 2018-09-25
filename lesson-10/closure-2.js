// one of advantages of closure : ________

function message(text) {
  var message = text;
  function say() {
    console.log(message);
  }
  return say;
}

var sendMessage1 = message("Good morning!");
var sendMessage2 = message("Good night!");

sendMessage1();
sendMessage2();
sendMessage1();
sendMessage2();

// Compare the following code to the previous one.

function sendMessage(message) {
  console.log(message);
}

sendMessage("Good morning!");
sendMessage("Good night!");
sendMessage("Good morning!");
sendMessage("Good night!");
