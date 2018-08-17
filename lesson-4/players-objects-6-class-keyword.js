// var player2 = new Player("Alex", "Red"); => error
class Player {
  constructor(name, team) {
    this.name = name;
    this.team = team;
    this.scroe = 0;
  }

  increment() {
    this.score += 1;
  }
}

var player1 = new Player("Henry", "Blue");
// var player3 = Player("Haha", "White"); => error

console.log(player1);
console.dir(Player);
