function message(text) {
  var message = text;
  function say() {
    console.log(message);
  }
  return say;
}

var sendMessage1 = message("Good morning!");

sendMessage1();
