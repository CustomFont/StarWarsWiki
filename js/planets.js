import {getURL} from "./utility.js"

let pageNumberPlanets = 1;
let getAllPlanets = fetch(`https://swapi.dev/api/planets/?page=${pageNumberPlanets}`)
    .then(function(response) {
        return response.json()
    })

function listTenPlanets() {
    getAllPlanets.then(planetsObject => {
        for(let i = 0; i < planetsObject.results.length; i++) {
            let item = document.createElement('li');   
            let url = planetsObject.results[i].url
            item.setAttribute('url', url)
            item.addEventListener('click', getURL)
            item.textContent = planetsObject.results[i].name;
            planetsList.appendChild(item)
        }
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
    nextButton.addEventListener('click', nextPlanetsPage())
    listContainer.appendChild(nextButton);
}

export {displayPlanets}