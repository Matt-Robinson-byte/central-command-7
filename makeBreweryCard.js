//import {getBrew} from "./brew.js"
export const breweriesInCity = (city) => {
  console.log(city[0].city);
  let breweryList = document.createElement("ul");
  let listItem1 = document.createElement("li");
  let listItem2 = document.createElement("li");
  let listItem3 = document.createElement("li");
  let listItem4 = document.createElement("li");
  let listItem5 = document.createElement("li");

  breweryList.innerHTML = `With the weather today in ${city[0].city} we recommend a pint at one of the following local breweries: `;

  listItem1.append(`${city[0].name} located at ${city[0].addr}`);

  listItem2.append(`${city[1].name} located at ${city[1].addr}`);

  listItem3.append(`${city[2].name} located at ${city[2].addr}`);

  listItem4.append(`${city[3].name} located at ${city[3].addr}`);

  listItem5.append(`${city[4].name} located at ${city[4].addr}`);
  breweryList.append(listItem1, listItem2, listItem3, listItem4, listItem5);
  return breweryList;
};
