// Draw the diagram for the following code.

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

var referee = {
  name: "Elizabeth",
  experience: 7.4
};

updateScore(player1);
updateScore(player2);
updateScore(referee);
