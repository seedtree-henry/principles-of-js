// object method
// methodName: function

var person1 = {
  firstName: "Henry",
  lastName: "Kim",
  age: 28,
  job: "Programmer",
  hobby: [],
  addHobby: function(hobby) {
    this.hobby.push(hobby);
  }
};

person1.addHobby("tennis");

console.log(person1.hobby);
