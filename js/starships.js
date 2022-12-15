import {getURL} from "./utility.js"
let pageNumber= 1;  

let listTenStarships = () => {
    fetch(`https://swapi.dev/api/starships/?page=${pageNumber}`)
        .then(function(response) {
            return response.json()
        })
        .then(starshipsObject => {
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
    pageNumber += 1;
    if (pageNumber > 4) {
        pageNumber = 1;
    }
    starshipsList.innerHTML = '';
    listTenStarships()
}

let displayStarships = () => {
    pageNumber = 1;
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
    nextButton.addEventListener('click', nextStarshipsPage)
    listContainer.appendChild(nextButton);
}

export {displayStarships}