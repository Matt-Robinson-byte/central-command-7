
import {makeWeatherCard} from "./makeCard.js"
import {getWeatherByCity} from "./getWeather.js"
import { getPictureByCity } from "./getCityPic.js";
import {consolidate} from "./importantDataFunction.js"
// import {makePictureCard} from "./addCityImage.js"
// import {getPic} from "./backgroundPic.js"
// import {makeElement} from "./make-element.js"

let button = document.querySelector("button");


button.addEventListener("click", () => {
    let city = document.querySelector("#city").value;
    //this could be a function
    let card = document.createElement('div')
    card.classList.add('card')
    document.body.append(card)
    
    getWeatherByCity(city,(weatherData)=>{
        //console.log (weatherData)
        card.append(makeWeatherCard(consolidate(weatherData)))
        
    })
    getPictureByCity(city, (data)=>{
        card.style.backgroundImage = `url(${data.photos[0].image.web})`
    })
    // getPictureByCity(city, cityData=>{
    //     console.log(cityData)
    // })
    
     
   
});

