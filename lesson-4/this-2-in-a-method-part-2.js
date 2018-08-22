function newPlayer(name, team) {
  var player = Object.create(prototypeObject);

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

player1.increment();

console.log(player1.__proto__);
console.log(prototypeObject.__proto__);
