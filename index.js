
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
let pageNumber = 1;
let getAllPeople = fetch(`https://swapi.dev/api/people/?page=${pageNumber}`)
    .then(function(response) {
        return response.json()
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

// Sidebar Functionality
function getURL(event) { 
  url = event.target.getAttribute('url');
  displayItemInfo(url);
}
function listTenPeople() {
    getAllPeople.then(peopleObject => {
        for(let i = 0; i < peopleObject.results.length; i++) {
            let item = document.createElement('li');
            let url = peopleObject.results[i].url
            item.setAttribute('url', url)
            item.setAttribute('onclick', 'getURL(event)')      
            item.textContent = peopleObject.results[i].name;
            peopleList.appendChild(item)
        }
    })
}
function nextPeoplePage() {
    pageNumber += 1;
    if (pageNumber > 9) {
        pageNumber = 1;
    }
    peopleList.innerHTML = '';
    getAllPeople = fetch(`https://swapi.dev/api/people/?page=${pageNumber}`)
        .then(function(response) {
            return response.json()
        })
        .then(listTenPeople())
    
}
function displayItemInfo(url) {
    let infoContainer = document.getElementById('infoContainer');
    infoContainer.innerHTML = '';
    console.log('asdf')
    fetch(url)
    .then((response) => response.json())
    .then(item => {
        let header = document.createElement('h1');
        header.textContent = item.name
        infoContainer.appendChild(header)
        for (const property in item) {
            if(property == 'name' || property == 'url' || property == 'created' || property == 'edited'){
                continue
            }
            let line = document.createElement('p')
            line.textContent = `${property}: ${item[property]}`
            infoContainer.appendChild(line)
        }
    })       
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
    listTenPeople();
    let nextButton = document.createElement('p');
    nextButton.setAttribute('id', 'nextButton');
    nextButton.textContent = 'Next Page'
    nextButton.setAttribute('onclick', 'nextPeoplePage()')
    listContainer.appendChild(nextButton);
}
document.getElementById('peopleSelector').addEventListener("click", displayPeople)
document.getElementById('nextButton').addEventListener('click', nextPeoplePage)
document.querySelector('url').addEventListener('click', displayItemInfo)
