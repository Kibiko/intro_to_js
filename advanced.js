/**
 * These tasks are more complicated! Using combinations of arrays and objects is very common, here you will need to combine what you know about both to complete the tasks.
 */

unitedKingdom = [
  {
    name: "Scotland",
    capital: "Edinburgh",
    population: 5454000,
    touristAttractions: ["Stirling Castle", "Loch Ness"],
  },
  {
    name: "England",
    capital: "London",
    population: 55980000,
  },
  {
    name: "Wales",
    capital: "Swansea",
    population: 3163000,
    touristAttractions: ["Snowdonia"],
  },
  {
    name: "Northern Ireland",
    capital: "Belfast",
    population: 1885000,
    touristAttractions: ["Titanic Museum", "Giant's Causeway"],
  },
];

/**
 * Q1. Add some tourist attractions to England
 */

england = ["Millenium Eye", "Tate Modern", "Skygarden", "Spitalfield Market"];

console.log(england);

/**
 * Q2. Change the capital of Wales to "Cardiff"
 */

unitedKingdom[2].capital = "Cardiff";
wales = unitedKingdom[2];

console.log(wales);

/**
 * Q3. Find a method in the documentation which will give you all of the available keys for Northern Ireland
 */

northernIrelandKeys = Object.keys(unitedKingdom[3]);
console.log(northernIrelandKeys);

/**
 * Q4. Use an if statement to compare the population of Scotland to the other countries and print out if it is the biggest, smallest or somewhere in the middle.
 */

populationOrder =[];
scottishPopulation = unitedKingdom[0].population;

// populationOrder.push(scottishPopulation);

for (index = 0; index < unitedKingdom.length; index++) {
  population = unitedKingdom[index].population;
  populationOrder.push(population);
}

populationOrder.sort();
console.log(populationOrder);
indexOfScotPop = populationOrder.indexOf(scottishPopulation);

if(indexOfScotPop === 0){
  console.log("The Scottish Population is the smallest out of the countries in the UK");
} else if (indexOfScotPop === populationOrder.length-1){
  console.log("The Scottish Population is the biggest out of the countries in the UK");
} else{
  console.log("Meh, its in the middle");
}



