

// export const makeElement = (name, source, inner,display ) =>{
//     let el = document.createElement(name)
//     el.src = source
//     el.className = name
//     el.innerHTML = inner
//     el.style.display = display
//     return el
    

// }


export const doClose = function (btn) {
    btn.card.remove()
}

export const weatherBreweryRelation = (input) =>{
        var beerType;
        console.log(input)
        // var abbr;
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
            //console.log(beerType)
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
        // Snow  sn
        // Sleet sl
        // Hail h
        // Thunderstorm t
        // Heavy Rain hr
        // Light Rain lr
        // Showers s
        // Heavy Cloud hc
        // Light Cloud lc
        // Clear c

}
    