import {makeElement} from "./make-element.js"

export const makeWeatherCard = (data) =>{
    console.log(data)
    console.log(data.temp)
    let f = (Math.floor(data.temp * 9/5) + 32)
    let var1 = document.createElement('span')
    var1.innerHTML = f
    let var2 = document.createElement("img")
    var2.src = `https://www.metaweather.com/static/img/weather/ico/${data.abbr}.ico`
    var1.append(var2)
    return(var1)
    //
    
    
}