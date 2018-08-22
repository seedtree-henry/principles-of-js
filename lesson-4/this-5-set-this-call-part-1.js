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

function introduce() {
  return `Hello, I'm ${this.name}`;
}

introduce();
console.log(introduce.call(player1));
