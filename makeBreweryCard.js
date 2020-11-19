
//creates an HTML list and populates them with the breweries
export const breweriesInCity = (brewery)=>{
    
    let breweryList = document.createElement("ul")
    let listItem1 = document.createElement('li')
    let listItem2 = document.createElement('li')
    let listItem3 = document.createElement('li')
    let listItem4 = document.createElement('li')
    let listItem5 = document.createElement('li')

    listItem1.append(`${brewery[0].name}   ${brewery[0].addr}`)
    
    listItem2.append(`${brewery[1].name}   ${brewery[1].addr}`)
    
    listItem3.append(`${brewery[2].name}   ${brewery[2].addr}`)

    listItem4.append(`${brewery[3].name}   ${brewery[3].addr}`)
    
    listItem5.append(`${brewery[4].name}   ${brewery[4].addr}`)
    breweryList.append(listItem1,listItem2, listItem3,listItem4,listItem5)
    return breweryList
}
    
