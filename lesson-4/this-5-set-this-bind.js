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

var updatePlayer1 = updateDetails.bind(player1);

updatePlayer1("Brian", "White");
console.log(player1);

// Once you bind this, you can not change this.

updatePlayer1.call(player2, "Bruce", "Black");
console.log(player1);
console.log(player2);
