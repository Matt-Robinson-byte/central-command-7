// import {config} from "./config.js"
//import { makeElement } from "./make-element.js"

export const makePictureCard = (data) =>{
    let newDiv = document.createElement('div')
    newDiv.style.backgroundImage = `url(${data.photos[0].image.web})`
    console.log(data)
    return newDiv
    
}