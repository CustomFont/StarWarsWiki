let 
const rootUrl = 'https://swapi.dev/api/'
// get all root catagories
let root = fetch(rootUrl)
  .then(function(response) {
    return response.json()
   })
  .then(function(response){
    //console.log(response)
    return Object.entries(response)
    })
  
  // get all people
let getAllPeople = fetch('https://swapi.dev/api/people/')
    .then(function(response) {
        return response.json()
    })
    .then(function(response){
        //console.log(response)
        return Object.entries(response)
    })

  // get all planets
let getAllPlanets = fetch('https://swapi.dev/api/planets/')
    .then(function(response) {
        return response.json()
    })
    .then(function(response){
        //console.log(response)
        return Object.entries(response)
    })

  // get all films
let getAllFilms = fetch('https://swapi.dev/api/films/')
    .then(function(response) {
        return response.json()
    })
    .then(function(response){
        //console.log(response)
        return Object.entries(response)
    })

  // get all species
let getAllSpecies = fetch('https://swapi.dev/api/species/')
    .then(function(response) {
        return response.json()
    })
    .then(function(response){
        //console.log(response)
        return Object.entries(response)
    })

  // get all spaceships
let getAllStarships = fetch('https://swapi.dev/api/starships/')
    .then(function(response) {
        return response.json()
    })
    .then(function(response){
        //console.log(response)
        return Object.entries(response)
    })

  // get all vehicles
let getAllVehicles = fetch('https://swapi.dev/api/vehicles/')
    .then(function(response) {
        return response.json()
    })
    .then(function(response){
        //console.log(response)
        return Object.entries(response)
    })

// let getVehicleByID = fetch()




//--------------------------------------
let setItemID = function() {
    
}
let renderInfo = function(itemID) {


}