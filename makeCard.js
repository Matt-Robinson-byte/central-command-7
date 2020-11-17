import {makeElement} from "./make-element.js"

// const makeElement = (name, inner,display ) =>{
//     let el = document.createElement('div')
//     el.className = name
//     el.innerHTML = inner
//     el.style.display = display
//     return el
// }


// const doClose = function (btn) {
//     btn.currentTarget.parentNode.remove()
// }


export const makeWeatherCard = (data) =>{
    console.log(data.temp)
    let var2 =makeElement("img",`https://www.metaweather.com/static/img/weather/ico/${data.abbr}.ico`)
    return makeElement("div", null, data.temp), makeElement("span")
    // let var1 = document.querySelector("span")
    
    
    
    
   
}

