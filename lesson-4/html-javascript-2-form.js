var lastName = document.getElementById("lastname");
var paragraphLastname = document.getElementById("p-lastname");
var nameForm = document.forms["name-form"];

lastName.addEventListener("keyup", function(event) {
  var newTextValue = event.target.value;
  paragraphLastname.innerHTML = newTextValue;
});

function submitForm(event) {
  event.preventDefault();
  alert(`${firstName.value} ${lastName.value}`);
}
