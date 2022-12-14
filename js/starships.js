import {getURL} from "./utility.js"
let pageNumberStarships = 1;  

let getAllStarships = fetch(`https://swapi.dev/api/starships/?page=${pageNumberStarships}`)
    .then(function(response) {
        return response.json()
    })

let listTenStarships = () => {
    getAllStarships.then(starshipsObject => {
        for(let i = 0; i < starshipsObject.results.length; i++) {
            let item = document.createElement('li');
            let url = starshipsObject.results[i].url
            item.setAttribute('url', url)
            item.addEventListener('click', getURL)   
            item.textContent = starshipsObject.results[i].name;
            starshipsList.appendChild(item)
        }
    })
}

let nextStarshipsPage = () => {
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

let displayStarships = () => {
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
    nextButton.addEventListener('click', nextStarshipsPage())
    listContainer.appendChild(nextButton);
}

export {displayStarships}