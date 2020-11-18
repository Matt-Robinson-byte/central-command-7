import config from "./config.js"

export const getPictureByCity = (city,callback) =>{
    fetch(config.urls.picture + `${city}/images/`)
    .then(res => res.json())
    .then(data => fetch(data._links.self.href))
    // .then(data => {
    //     console.log('Success:', data);
    // })
    .then(res => res.json())
    .then(data => callback(data))
    .catch(error => {
        console.error("Error:", error);
    })
};
