function newPlayer(name, team) {
  var player = Object.create(prototypeObject);

  // Do not use object literal. Dot operator only!
  player.name = name;
  player.team = team;
  player.score = 0;

  return player;
}

var prototypeObject = {
  increment: function() {
    this.score += 1;
  }
};

var player1 = newPlayer("Henry", "Blue");
var player2 = newPlayer("Alex", "Red");
console.log(player1);
console.log(player2);
