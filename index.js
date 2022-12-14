
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
let pageNumberPlanets = 1;
let getAllPlanets = fetch(`https://swapi.dev/api/planets/?page=${pageNumber}`)
    .then(function(response) {
        return response.json()
    })
    // .then(function(response){
    //     //console.log(response)
    //     return Object.entries(response)
    // })

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
  let pageNumberStarships = 1;  
let getAllStarships = fetch(`https://swapi.dev/api/starships/?page=${pageNumberStarships}`)
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
            item.setAttribute('click', getURL)      
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
// document.getElementById('nextButton').addEventListener('click', nextPeoplePage)
// document.querySelector('url').addEventListener('click', displayItemInfo)

//Planets----------------------------
// function getURL(event) { 
//     url = event.target.getAttribute('url');
//     displayPlanetsInfo(url);
// }   

function listTenPlanets() {
    getAllPlanets.then(planetsObject => {
        for(let i = 0; i < planetsObject.results.length; i++) {
            let item = document.createElement('li');   
            let url = planetsObject.results[i].url
            item.setAttribute('url', url)
            item.setAttribute('click', getURL)
            item.textContent = planetsObject.results[i].name;
            planetsList.appendChild(item)
        }
        console.log('asdf')
    })
}
function nextPlanetsPage() {
    pageNumberPlanets += 1;
    if (pageNumberPlanets > 6) {
        pageNumberPlanets = 1;
    }
    planetsList.innerHTML = '';
    getAllPlanets = fetch(`https://swapi.dev/api/planets/?page=${pageNumberPlanets}`)
        .then(function(response) {
            return response.json()
        })
        .then(listTenPlanets())
    
}
function displayPlanetsInfo(url) {
    let infoContainer = document.getElementById('infoContainer');
    infoContainer.innerHTML = '';
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

function displayPlanets() {
    let listContainer = document.getElementById('listContainer');
    listContainer.innerHTML = '';
    let header = document.createElement('h2');
    let headerText = document.createTextNode('Planets');
    header.appendChild(headerText);
    listContainer.appendChild(header);
    let planetsList = document.createElement('ul');
    planetsList.setAttribute('id', 'planetsList')
    listContainer.appendChild(planetsList);
    listTenPlanets();
    let nextButton = document.createElement('p');
    nextButton.setAttribute('id', 'nextButton');
    nextButton.textContent = 'Next Page'
    nextButton.setAttribute('onclick', 'nextPlanetsPage()')
    listContainer.appendChild(nextButton);
}
document.getElementById('planetsSelector').addEventListener("click", displayPlanets)
// document.getElementById('nextButton').addEventListener('click', nextPlanetsPage)
// document.querySelector('url').addEventListener('click', displayPlanetsInfo)

//Starships-----------------------------
// function getURL(event) { 
//     url = event.target.getAttribute('url');
//     displayStarshipsInfo(url);
//   }
  function listTenStarships() {
      getAllStarships.then(starshipsObject => {
          for(let i = 0; i < starshipsObject.results.length; i++) {
              let item = document.createElement('li');
              let url = starshipsObject.results[i].url
              item.setAttribute('url', url)
              item.setAttribute('click', getURL)   
              item.textContent = starshipsObject.results[i].name;
              starshipsList.appendChild(item)
          }
      })
  }
  function nextStarshipsPage() {
      pageNumberStarships += 1;
      if (pageNumberStarships > 4) {
        pageNumberStarships = 1;
      }
      starshipsList.innerHTML = '';
      getAllStarships = fetch(`https://swapi.dev/api/starships/?page=${pageNumberStarships}`)
          .then(function(response) {
              return response.json()
          })
          .then(listTenStarships())
      
  }
  function displayStarshipsInfo(url) {
      let infoContainer = document.getElementById('infoContainer');
      infoContainer.innerHTML = '';
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
  
  function displayStarships() {
      let listContainer = document.getElementById('listContainer');
      listContainer.innerHTML = '';
      let header = document.createElement('h2');
      let headerText = document.createTextNode('Starships');
      header.appendChild(headerText);
      listContainer.appendChild(header);
      let starshipsList = document.createElement('ul');
      starshipsList.setAttribute('id', 'starshipsList')
      listContainer.appendChild(starshipsList);
      listTenStarships();
      let nextButton = document.createElement('p');
      nextButton.setAttribute('id', 'nextButton');
      nextButton.textContent = 'Next Page'
      nextButton.setAttribute('onclick', 'nextStarshipsPage()')
      listContainer.appendChild(nextButton);
  }
  document.getElementById('starshipsSelector').addEventListener("click", displayStarships)
//   document.getElementById('nextButton').addEventListener('click', nextStarshipsPage)
//   document.querySelector('url').addEventListener('click', displayStarshipsInfo)
  