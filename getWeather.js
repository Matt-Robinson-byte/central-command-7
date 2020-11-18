import config from "./config.js";
export const getWeatherByCity = (city, callback) => {
  fetch(config.urls.citySearch + `?query=${city}`)
    .then((res) => res.json())
    .then((data) => fetch(config.urls.weather + data[0].woeid))
    .then((res) => res.json())
    .then((data) => callback(data))
    .catch(error => {
      console.error("Error:", error);
  });
    

};
