// Test the following codes a couple of times. (open console and refresh chrome.)
// We should display today's data first.
// 1) However, does the today's weather data come first all the time?
// 2) Draw the diagram of the following code.
// 3) Rewrite the code so that we get the data in the following order.
//    weatherToday, weatherTomorrow, weatherTwoDaysLater
//    Change line 32 - 42 only.
//    Do not remove setTimeout and timeToFetchData
//    as this exercise assumes that we get weather data from a server.

function Weather(maxTemp, minTemp, description) {
  var forecast = {
    maxTemp: maxTemp,
    minTemp: minTemp,
    description: description,
    notify: function() {
      return `temp - Max: ${maxTemp}, Min: ${minTemp}, ${description}`;
    }
  };

  return forecast;
}

// Assume that you get this data from the backend server.
// The data will arrive in different time.
// For example, weatherTwoDays data may come first.

var weatherToday = Weather(13, 21, "Cloudy, possible showers");
var weatherTomorrow = Weather(16, 31, "Sunny, clear sky");
var weatherTwoDaysLater = Weather(28, 48, "You can cook outside on your car!");

setTimeout(function() {
  displayWeather(weatherToday);
}, timeToFetchData());

setTimeout(function() {
  displayWeather(weatherTomorrow);
}, timeToFetchData());

setTimeout(function() {
  displayWeather(weatherTwoDaysLater);
}, timeToFetchData());

// Used Math.random() so we do not know which data comes first.
function timeToFetchData() {
  return Math.random() * 4000 + 1000;
}

function displayWeather(weather) {
  console.log(weather.notify());
}
