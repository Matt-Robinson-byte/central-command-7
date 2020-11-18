import config from "./config.js"

//gets background picture from city pictures api
export const getPictureByCity = (city,callback) =>{
    fetch(config.urls.picture + `${city}/images/`)
    .then(res => res.json())
    .then(data => fetch(data._links.self.href))
    
    .then(res => res.json())
    .then(data => callback(data))
    .catch(error => {
        console.error("Error:", error);
    })
};
