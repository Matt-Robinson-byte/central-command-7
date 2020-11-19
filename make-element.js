


//close function for the (x) close button
export const doClose = function (btn) {
    btn.currentTarget.parentNode.remove()
}
//function for displaying specific brew suggestion depending on weather of city
export const weatherBreweryRelation = (input) =>{
        var beerType;
        console.log(input)
        
        switch(input.abbr) {
        case "sn":
            beerType = "Anything will do! Just get out of the cold";
            break;
        case "sl":
            beerType = "Anything will do! Just get out of the cold";
            break;
        case "h":
            beerType = "Grab yourself a porter and stay safe during this hailstorm";
            break;
        case "t":
            beerType = "We suggest a stout on this stormy day";
            break;
        case "hr":
            beerType = "Grab a brown ale and wait out this rain";
            break;
        case "lr":
            beerType = "We suggest a Hefeweizen during this light rain";
            break;
        case "s":
            beerType = "We suggest a stout on this stormy day";
            break;
        case "hc":
            beerType = "We suggest a hazy IPA on this cloudy day";
            
            break;
        case "lc":
            beerType = "We suggest a pale ale on this partly cloudy day";
            break;
        case "c":
            beerType = "We suggest a light lager on this clear day";
            break;
        }
        let message = document.createElement("div")
        message.classList.add("beerMessage")

        message.append(`${beerType}! Try this recommendation at one of these local breweries`)
        return message
      
}
    