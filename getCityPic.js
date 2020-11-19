import config from "./config.js"

//gets background picture from city pictures api
export const getPictureByCity = (city,card) =>{
    
    fetch(config.urls.picture + `${city}/images/`)
    .then(res => res.json())
    .then(data => fetch(data._links.self.href))
    
    .then(res => res.json())
    .then(data => picCallback(data,card))
    .catch(error => {
        
        console.log("KidneyError:", error);
        picError(card)
    })
};

let picCallback =  (data,card)=>{
        
        let cityPic = document.createElement('div')
        
        cityPic.style.background = `url(${data.photos[0].image.web})`
        cityPic.classList.add("background")
        
        card.append(cityPic)
}
let picError = (card)=>{
    card.style.backgroundImage = 'url(https://image.shutterstock.com/image-photo/equipment-preparation-beer-260nw-1008782098.jpg)'
}