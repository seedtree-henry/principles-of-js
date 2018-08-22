var API_KEY = "ad79d8ee2949ec15d357357dcbbd891c";
var place = "Sydney";

fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=${API_KEY}`
).then(function(response) {
  console.log(response);
});
