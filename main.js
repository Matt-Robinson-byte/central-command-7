import { makeWeatherCard } from "./makeCard.js";
import { getWeatherByCity } from "./getWeather.js";
import { getPictureByCity } from "./getCityPic.js";
import {consolidate} from "./importantDataFunction.js"
import {getBrew} from "./brew.js"
import {breweryInfo} from "./breweryInfo.js"
import {breweriesInCity} from "./makeBreweryCard.js"

// import {makePictureCard} from "./addCityImage.js"
// import {getPic} from "./backgroundPic.js"
// import {makeElement} from "./make-element.js"

let button = document.querySelector("button");

//adds event listener to city input and submit button
button.addEventListener("click", () => {
    let city = document.querySelector("#city").value;
    //adds button and input to body
    let card = document.createElement('div')
    card.classList.add('card')
    
    
    document.body.append(card)

    //ignore for right now --> will add breweries
    // let breweryCard = document.createElement('div')
    // breweryCard.classList.add('breweryCard')
    // document.body.append(breweryCard)

    //takes json into consolidate--> temp, state, and weathr state and creates icon and temperature
    getWeatherByCity(city,(weatherData)=>{
        //console.log (weatherData)
        card.append(makeWeatherCard(consolidate(weatherData)))
        // card.append(makeWeatherCard(consolidate(weatherData)))
        
    })

    //from API for city pic, we add background picture of current city
    getPictureByCity(city, (data)=>{
        card.style.backgroundImage = `url(${data.photos[0].image.web})`
    })

    //card.append(breweriesInCity())
    
    // getBrew(city,(breweries) =>{
    //     breweryCard.innerHTML.append(breweries.name)
    // })
    // getPictureByCity(city, cityData=>{
    //     console.log(cityData)
    // })

    getBrew(city,(brewery)=>{
        card.append(breweriesInCity(breweryInfo(brewery)))
    })
    
    
     
   
});
