// Let's draw a diagram including prototype chain.
// The diagram must includes Object, Object.prototype, Function, Function.prototype and __proto__ relations.

function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
  this.name = "Triangle";
}

Triangle.prototype.perimeter = function() {
  return this.side1 + this.side2 + this.side3;
};

function Equilateral(side) {
  this.side1 = side;
  this.side2 = side;
  this.side3 = side;

  this.name = "Equilateral Triangle";
}

Equilateral.prototype = Object.create(Triangle.prototype);

Equilateral.prototype.callName = function() {
  console.log(this.name);
};

var equilateral1 = new Equilateral(10);

equilateral1.callName();
equilateral1.perimeter();
