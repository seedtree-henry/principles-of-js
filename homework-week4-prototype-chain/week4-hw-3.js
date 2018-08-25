// Draw a prototype chain diagram (do not need to draw complete execution diagram).
// The diagram must includes Object, Object.prototype, Function, Function.prototype and __proto__ relations.

function newPlayer(name, team) {
  var player = Object.create(null);

  player.name = name;
  player.team = team;
  player.score = 0;

  return player;
}

var player1 = newPlayer("Henry", "Blue");

console.log(player1.__proto__);
