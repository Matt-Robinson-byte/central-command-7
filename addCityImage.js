
//creates HTML element and adds background city
export const makePictureCard = (data) =>{
    let newDiv = document.createElement('div')
    newDiv.style.backgroundImage = `url(${data.photos[0].image.web})`
    console.log(data)
    return newDiv
    
}