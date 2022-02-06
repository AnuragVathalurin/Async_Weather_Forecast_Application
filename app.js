const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=a2099e4f81d632d6b8349662fa2d38c5&query=37.8267,-122.4233&units=f";

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("Cannot connect to Weather Service!");
  } else if (response.body.error) {
    console.log(
      "Unable to find your Weather Forecast. Please try another search."
    );
  } else {
    const temperature = response.body.current.temperature;
    const feelLikeTemp = response.body.current.feelslike;
    console.log(
      response.body.current.weather_descriptions[0] +
        ". It is currently " +
        temperature +
        ". It feels like " +
        feelLikeTemp +
        "."
    );
  }
});

const geocodingURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYXZhdGhhbHVyaW4iLCJhIjoiY2t6YWVzc2UzMjNpODJwbzI3bG40NXd0YSJ9.K571qqHRj-zle_0V1uusQQ&limit=1";

request({ url: geocodingURL, json: true }, (error, response) => {
  if (error) {
    console.log("Cannot connect to Geocoding Service!");
  } else if (response.features.length === 0) {
    console.log("Unable to find your location. Please try another search.");
  } else {
    const data = response.body.features[0].center;
    console.log("Latitude: " + data[1]);
    console.log("Longitude: " + data[0]);
  }
});
