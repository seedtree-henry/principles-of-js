function newPlayer(name, team) {
  // Object Literal
  var player = {
    name: name,
    team: team,
    score: 0,
    increment: function() {
      this.score += 1;
    }
  };

  return player;
}

var player1 = newPlayer("Henry", "Blue");
var player2 = newPlayer("Alex", "Red");

console.log(player1);

// Issue?
