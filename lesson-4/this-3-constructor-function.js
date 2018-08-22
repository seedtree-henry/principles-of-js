function Player(name, team) {
  this.name = name;
  this.team = team;
  this.score = 0;
}

Player.prototype.increment = function() {
  this.score += 1;
};

// new : create an object, link to Player.prototype and return the object.
var player1 = new Player("Henry", "Blue");
var player2 = new Player("Alex", "Red");
