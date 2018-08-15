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
updateScore(player1);
updateScore(player1);

// Issues ? updateScore is a function for players.
// If there are non-player objects, they do not need updateScore function..
// (e.g.) Referee does not have score so referee should not be an argument of updateScore.
// It is an error if referee calls updateScore. UpdateScore(referee) => error!!!
// It is not a good practice that updateScore function is in global scope.
