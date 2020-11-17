import config from "./config.js"

export const getPictureByCity = (city,callback) =>{
    fetch(config.urls.picture + `${city}/images/`)
    .then(res => res.json())
    .then(data => fetch(data._links.self.href))
    .then(res => res.json())
    .then(data => callback(data))
}
