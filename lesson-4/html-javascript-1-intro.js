// https://developer.mozilla.org/en-US/docs/Web/API/Document (document object: properties and methods)
// https://developer.mozilla.org/en-US/docs/Web/API/Document/body (document.body object: properties and methods)
var heading = document.createElement("h2");
heading.innerHTML = "Tags using JS";
document.body.appendChild(heading);
heading.style.color = "red";
// https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick
// element.onclick = functionRef;
heading.onclick = function() {
  alert("Do not click me!!!");
};
var p1 = document.createElement("p");
p1.innerHTML = "Now we can control html tags using javascript!!!";
document.body.appendChild(p1);

var a1 = document.createElement("a");
a1.innerHTML = "Link to Apple Home Page";
a1.href = "https://www.apple.com/au/";
document.body.appendChild(a1);

console.dir(heading.__proto__);
console.dir(p1.__proto__);
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement
console.dir(a1.__proto__);

console.dir(p1.__proto__.__proto__);
console.dir(p1.__proto__.__proto__.__proto__);
console.dir(p1.__proto__.__proto__.__proto__.__proto__);
console.dir(p1.__proto__.__proto__.__proto__.__proto__.__proto__);
console.dir(p1.__proto__.__proto__.__proto__.__proto__.__proto__.constructor);
console.dir(p1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__);
console.dir(
  p1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.constructor
);
// console.dir(p1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__ === Object.prototype);
