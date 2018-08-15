var player1 = {
  name: "Henry",
  team: "Red",
  score: 0,
  updateScore: function() {
    this.score += 1;
    console.log(`${this.name} (${this.team}) has ${this.score} sets.`);
  }
};

var player2 = {
  name: "Alex",
  team: "Blue",
  score: 0,
  updateScore: function() {
    this.score += 1;
    console.log(`${this.name} (${this.team}) has ${this.score} sets.`);
  }
};

var referee = {
  name: "Elizabeth",
  experience: 7.4
};

player1.updateScore();
player2.updateScore();
player1.updateScore();
player1.updateScore();

// Issues ? DRY Principle
