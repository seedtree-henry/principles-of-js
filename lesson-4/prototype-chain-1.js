// Let's draw Object, Object.prototype diagram.

var player1 = {
  name: "Henry",
  team: "Red",
  score: 0
};

var player2 = Object.create(null);
player2.name = "Alex";
player2.team = "Blue";
player2.score = 0;

console.log(player1);
console.log(player2);

console.log(player1.__proto__);
console.log(player2.__proto__);
