
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
  // get people by id
let personID = 2;
let getPeopleByID = fetch(`https://swapi.dev/api/people/${personID}/`)
    .then(function(response) {
        return response.json()
    })
    .then(function(response){
        //console.log(response)
        //console.log(Object.entries(response))
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



//--------------------------------------
let setItemID = function() {
    
}
function displayPeople() {
    let listContainer = document.getElementById('listContainer');
    listContainer.innerHTML = '';
    let header = document.createElement('h2');
    let headerText = document.createTextNode('People');
    header.appendChild(headerText);
    listContainer.appendChild(header);
    let peopleList = document.createElement('ul');
    peopleList.setAttribute('id', 'peopleList')
    listContainer.appendChild(peopleList);
    getAllPeople.then(peopleObject => {
        for(let i = 0; i < peopleObject.results.length; i++) {
            let item = document.createElement('li');
            let itemText = document.createTextNode(peopleObject.results[i].name);
            item.textContent = itemText;
            peopleList.appendChild(item)
        }
        console.log(peopleObject.results[1].name)
    })
}
document.getElementByID('peopleSelector').addEventListener("click", displayPeople)