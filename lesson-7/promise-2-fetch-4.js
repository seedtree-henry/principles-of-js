var API_KEY = "1427e1f8d3a6fbab95e85fb817aa1230";

navigator.geolocation.getCurrentPosition(positionSuccess, positionError);

function positionSuccess(position) {
  console.log();
  getWeather(position.coords.latitude, position.coords.longitude);
}

function positionError(error) {
  console.log(error);
}

function getWeather(latitude, longitude) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json);
    });
}
