// Let's draw a diagram including Object, Object.prototype, Function and Function.prototype.

var player1 = {
  name: "Henry",
  team: "Red",
  score: 0
};

var player2 = {
  name: "Alex",
  team: "Blue",
  score: 0
};

function updateScore(player) {
  player.score += 1;
  console.log(`${player.name} (${player.team}) has ${player.score} sets.`);
}
console.dir(Object);
console.dir(Object.__proto__.__proto__ === Object.prototype);
console.dir(Function.__proto__.__proto__);
console.log(typeof Object.prototype);
console.log(typeof Function.prototype);
