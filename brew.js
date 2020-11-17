
import config from "./config.js"

export const getBrew = (city) =>{
    fetch(config.urls.brewery + `${city}`)
    .then(res => res.json())
    .then(data => console.log(data))
    // .then(res => res.json())
    // .then(data => console.log(data))
}


// getBrew();

// import config from "./config.js"
// export const getWeatherByCity = (city,callback) =>{
//     fetch (config.urls.citySearch + `?query=${city}`)
//     .then(res => res.json())
//     .then(data => fetch(config.urls.weather + data[0].woeid))
//     .then(res => res.json())
//     .then(data => callback(data))
// }
