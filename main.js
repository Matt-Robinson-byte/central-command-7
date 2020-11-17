
import {makeWeatherCard} from "./makeCard.js"
import {getWeatherByCity} from "./getWeather.js"
import {makeElement} from "./make-element.js"

let button = document.querySelector("button");

const consolidate = (whatever) =>{
    let output = {

        state : whatever.consolidated_weather[0].weather_state_name,
        abbr : whatever.consolidated_weather[0].weather_state_abbr
        
    }
    return output;
}

button.addEventListener("click", () => {
    let city = document.querySelector("#city").value;
    getWeatherByCity(city,(weatherData)=>{
        
        makeWeatherCard(consolidate(weatherData))
    })
})

document.body.append(makeElement("card", "this is a new card" ))
`https://www.metaweather.com/static/img/weather/ico/${data[0]}.ico`;


// let card = makeCard(
//     r.consolidated_weather[0],
//     r.title[0]
//     //weatherImage
// );
// document.body.append(card);

