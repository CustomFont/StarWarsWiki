import {getURL} from "./utility.js"
let pageNumberPlanets = 1;

let getAllPlanets = fetch(`https://swapi.dev/api/planets/?page=${pageNumberPlanets}`)
    .then(function(response) {
        return response.json()
    })

let listTenPlanets = () => {
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

let nextPlanetsPage = () => {
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

let displayPlanets = () => {
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
    nextButton.addEventListener('click', nextPlanetsPage)
    listContainer.appendChild(nextButton);
}

export {displayPlanets}