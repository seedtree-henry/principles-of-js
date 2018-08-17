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
var player3 = Player("Haha", "White");

console.log(player1);
console.log(player2);
console.log(player3);

console.log(player1.prototype);
console.log(player1.__proto__);
console.log(Player.prototype.__proto__);
console.log(player1.constructor);
console.log(player1.constructor.constructor);
console.log(player1.__proto__ === Player.prototype);
console.dir(Player.constructor);
