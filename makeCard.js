//import {getBrew} from "./brew.js"

export const makeWeatherCard = (data) =>{

    //conversion from c to f
    let f = (Math.floor(data.temp * 9/5) + 32)

    //creates div for icon and temperature
    let var1 = document.createElement('div')
    var1.classList = "temperature"
    var1.innerHTML = `${f}°`
    let var2 = document.createElement('div')
    var2.classList.add('iconHolder')
    let icon = document.createElement("img")
    var2.append(icon)
    
    //creates div for icon div and temperature div
    let var3 = document.createElement('div')
    icon.src = `https://www.metaweather.com/static/img/weather/ico/${data.abbr}.ico`
    var3.append(var2,var1)
    return(var3)
   
    //
}

//close function for 'close' button --> closes city card
export const doClose = function (btn) {
    btn.currentTarget.parentNode.parentNode.remove()
}