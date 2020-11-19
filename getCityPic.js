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
    
    card.style.backgroundImage = `url(${data.photos[0].image.web})`
        // let cityPic = document.createElement('div')
        
        // cityPic.style.background = `url(${data.photos[0].image.web})`
        // cityPic.classList.add("background")
        
      //  card.append(cityPic)
}
let picError = (card)=>{
    let noBrewPic = document.createElement('div')
    noBrewPic.style.background = 'url(https://spaceselectors.com/wp-content/uploads/2019/07/breweries-colorado-lease.jpg)'
   card.append(noBrewPic)
}

