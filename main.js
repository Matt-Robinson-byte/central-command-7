import { makeWeatherCard } from "./makeCard.js";
import { getWeatherByCity } from "./getWeather.js";
import { getPictureByCity } from "./getCityPic.js";
import {consolidate} from "./importantDataFunction.js"
import {getBrew} from "./brew.js"
import {breweryInfo} from "./breweryInfo.js"
import {breweriesInCity} from "./makeBreweryCard.js"
import {weatherBreweryRelation} from "./make-element.js"
import {doClose} from "./make-element.js"


let button = document.querySelector("button");
let checkCard = false;
//adds event listener to city input and submit button
button.addEventListener("click", () => {
    
    let city = document.querySelector("#city").value;
    //document.write(encodeURIComponent(city.trim()));
    
    //adds button and input to body
    let card = document.createElement('div')
    card.classList.add('card')
    
    
    document.body.append(card)

    
    //takes json into consolidate--> temp, state, and weathr state and creates icon and temperature
    getWeatherByCity(city,(weatherData)=>{
      
        card.append(makeWeatherCard(consolidate(weatherData)))
       
        
    })

    //from API for city pic, we add background picture of current city
    getPictureByCity(city, (data)=>{
        card.style.backgroundImage = `url(${data.photos[0].image.web})`
    })


    getBrew(city,(brewery)=>{
        card.append(breweriesInCity(breweryInfo(brewery)))
        
       
    })
    
   // weatherBreweryRelation(getWeatherByCity(consolidate(weather)))
    getWeatherByCity(city,(weatherData)=>{
        let rec = weatherBreweryRelation((consolidate(weatherData)))
        
        card.append(rec)
        
        
    })

});



