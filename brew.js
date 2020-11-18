
import config from "./config.js"

// gets resources from brewery api by city
export const getBrew = (city, callback) =>{
    fetch(config.urls.brewery + `${city}`)
    .then(res => res.json())
    .then(data => callback(data))
    .catch(error => {
        console.error("Error:", error);
    })
}


