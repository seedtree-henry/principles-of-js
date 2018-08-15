function newPlayer(name, team) {
  var player = {};

  player.name = name;
  player.team = team;
  player.score = 0;
  player.increment = function() {
    player.score += 1;
  };

  return player;
}

var player1 = newPlayer("Henry", "Blue");
var player2 = newPlayer("Alex", "Red");

console.log(player1);
