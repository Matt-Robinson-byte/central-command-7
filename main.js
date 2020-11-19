
import { getWeatherByCity } from "./getWeather.js";
import { getPictureByCity } from "./getCityPic.js";

import {getBrew} from "./brew.js"

import {doClose} from "./make-element.js"


let button = document.querySelector("button");
let checkCard = false;
//adds event listener to city input and submit button
button.addEventListener("click", () => {
    //adds button and input to body
    let card = document.createElement('div')
    card.classList.add('card')
    let rec = document.createElement('div')
    rec.classList.add('rec')
    let list = document.createElement('div')
    list.classList.add('list')
    let weather = document.createElement('div')
    weather.classList.add('weather')

    
    
    document.body.append(card)


    //creates and adds close button (x) and adds it to new card
    let closeButton = document.createElement('button')
    closeButton.innerHTML = "X"
    closeButton.className = 'closebutton'
    closeButton.addEventListener('click', doClose)
    card.append(weather,closeButton,rec,list)
    let city = document.querySelector("#city").value;
    
    
    
    //takes json into consolidate--> temp, state, and weathr state and creates icon and temperature
    getWeatherByCity(city,card)
        
 

    //from API for city pic, we add background picture of current city
    
    getPictureByCity(city,card)
    //creates and adds the list of breweries to the card
    
    getBrew(city,card)

   // weatherBreweryRelation(getWeatherByCity(consolidate(weather)))

 

})
