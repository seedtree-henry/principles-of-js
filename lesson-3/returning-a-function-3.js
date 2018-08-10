function message() {
  function say() {
    console.log("Good morning!");
  }
  return say;
}

var hey = message;

hey()();
