import { makeWeatherCard } from "./makeCard.js";
import {weatherBreweryRelation} from "./make-element.js"
import {consolidate} from "./consolidatesWeather.js"
import config from "./config.js";

//gets weather api resources
//this function take city and card and appends to card weather info about city
export const getWeatherByCity = (city, card) => {
  fetch(config.urls.citySearch + `?query=${city}`)
    .then((res) => res.json())
    .then((data) => {
      try{
        fetch(config.urls.weather + data[0].woeid)
          .then((res) => res.json())
          .then((data) => tryBlock(data,card))
          .then((data) => appendBeerSuggestion(data,card))
          .catch(error => {
               console.error("MonkeyError:", error);
          });
      }catch(error){
        console.log('citysearchfailed', error)
        noWeather(card)
      }
    })
  }



let tryBlock = (weatherData,card)=>{
  try{
    card.append(makeWeatherCard(consolidate(weatherData)))
    return weatherData
  }
  catch(error){
    console.log('tryblockfailed', error)
    noWeather(card)
  }
}
let noWeather = (card)=>{
  let defaultWeather = document.createElement('div')
    defaultWeather.classList.add('defaultWeather')
    defaultWeather.innerHTML = "no weather suggestions for this area"
    card.append(defaultWeather)
}
let appendBeerSuggestion = (weatherData,card)=>{
  let rec = weatherBreweryRelation((consolidate(weatherData)))
  
  card.append(rec)
  
  
}
