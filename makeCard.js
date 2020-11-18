//import {getBrew} from "./brew.js"

export const makeWeatherCard = (data) =>{
    // console.log(data)
    // console.log(data.temp)
    //conversion from c to f
    let f = (Math.floor(data.temp * 9/5) + 32)
    //creates span for icon and temperature
    let var1 = document.createElement('div')
    var1.classList = "temperature"
    var1.innerHTML = f
    let var2 = document.createElement("img")

    //creates 'close' button for city card
    let closeButton = document.createElement('button')
    closeButton.innerHTML = "X"
    closeButton.className = 'closebutton'
    closeButton.addEventListener('click', doClose)
    

    // let breweryList = document.createElement("ul")
    // getBrew(city,(breweries) =>{
    //     breweryList.innerHTML.append(breweries[0].name)
    // })
    
    
    //creates icon and appends to city card
    var2.src = `https://www.metaweather.com/static/img/weather/ico/${data.abbr}.ico`
    var1.append(var2,closeButton)
    return(var1)
    //
}

//close function for 'close' button --> closes city card
export const doClose = function (btn) {
    btn.currentTarget.parentNode.parentNode.remove()
}