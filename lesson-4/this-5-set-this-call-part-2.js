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

function updateDetails(name, team) {
  this.name = name;
  this.team = team;
}

updateDetails.call(player1, "Brian", "White");
console.log(player1);
