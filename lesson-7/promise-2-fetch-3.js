var API_KEY = "1427e1f8d3a6fbab95e85fb817aa1230";
var place = "Sydney";

fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=${API_KEY}`
)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
  });

console.log("hi");
