function newPlayer(name, team) {
  var name = name;
  var team = team;
  var score = 0;

  console.log(`${name} (${team}) is playing.`);

  function increment() {
    score += 1;
    console.log(`${name} (${team}) has ${score} set(s) now.`);
  }
  return increment;
}

var player1 = newPlayer("Henry", "red");
var player2 = newPlayer("Alex", "blue");

player1();
player2();
player2();
