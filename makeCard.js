import {makeElement} from "./make-element.js"

export const makeWeatherCard = (data) =>{
    console.log(data)
    console.log(data.temp)
    let var2 =makeElement("img",`https://www.metaweather.com/static/img/weather/ico/${data.abbr}.ico`)
    return makeElement("div", null, data.temp), makeElement("span")
    // let var1 = document.querySelector("span")
    
    
    
    
   
}

