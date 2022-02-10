const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=a2099e4f81d632d6b8349662fa2d38c5&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url: url, json: true }, (error, { body }) => {
    if (error) {
      callback("Cannot connect to Weather Service!");
    } else if (body.error) {
      callback(
        "Unable to find your Weather Forecast. Please try another search."
      );
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          ". It feels like " +
          body.current.feelslike +
          "."
      );
    }
  });
};

module.exports = forecast;
