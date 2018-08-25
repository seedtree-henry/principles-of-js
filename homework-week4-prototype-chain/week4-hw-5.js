// Let's draw a diagram including prototype chain.
// The diagram must includes Object, Object.prototype, Function, Function.prototype and __proto__ relations.

class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.name = "Triangle";
  }

  perimeter() {
    return this.side1 + this.side2 + this.side3;
  }
}

var generalTriangle = new Triangle(7, 8, 9);
console.log(generalTriangle.perimeter());

// (Research) extends, super keywords

class Equilateral extends Triangle {
  constructor(side) {
    super(side, side, side);
    this.name = "Equilateral Triangle";
  }

  callName() {
    console.log(this.name);
  }
}

var equilateral1 = new Equilateral(10);

equilateral1.perimeter();
equilateral1.callName();
