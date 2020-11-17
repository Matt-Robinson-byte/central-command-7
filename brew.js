

import config from "./config.js"

export const getBrew = (city) =>{
    fetch(config.urls.brewery + `${city}`)
    .then(res => res.json())
    .then(data => console.log(...data))
    
}
