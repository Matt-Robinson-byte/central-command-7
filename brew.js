const url_api = 'https://api.openbrewerydb.org/breweries?by_city=Atlanta'

async function getBrew(){
    const response = await fetch(url_api);
    const data = await response.json();
    const {name} = data;

    console.log(name);

}

getBrew();