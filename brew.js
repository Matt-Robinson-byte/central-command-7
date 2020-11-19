import {breweryInfo} from "./breweryInfo.js"
import {breweriesInCity} from "./makeBreweryCard.js"

import config from "./config.js"

// gets resources from brewery api by city
export const getBrew = (city, card) =>{
    fetch(config.urls.brewery + `${city}`+'&per_page=5')
    .then(res => res.json())
    .then(data => brewCallback(data,card))
    .catch(error => {
        console.log("BananaError:", error );
        //return ("Sorry, we have no breweries for that area")
    })
}

let brewCallback = (brewery,card)=>{
    try{
    card.append(breweriesInCity(breweryInfo(brewery)))
    }catch(BananaError){
        let defaultMessage = document.createElement('div')
        defaultMessage.classList.add('defaultMessage')
        defaultMessage.innerHTML = "no brewery suggestions for this area"
        card.append(defaultMessage)
        //card.innnerHTML = ("no brewery suggestions for this area")
    }
}
