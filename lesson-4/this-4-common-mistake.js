// a function in a method

function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.age = 0;
  this.totalDistance = 0;

  this.updateTotalDistance = function(distance) {
    function add(a) {
      this.totalDistance += a;
    }

    add(distance);
    console.log(`Total distance: ${this.totalDistance}`);
  };
}

var myFirstCar = new Car("Toyota", "Avalon", 2018);

myFirstCar.updateTotalDistance(80);

// setInterval(function() {
//   console.log(this.age);
//   this.age += 0.1;
// }, 2000);
