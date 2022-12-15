import {getURL} from '../js/utility.js'
let pageNumber = 1;

let listTenSpecies = () => {
    fetch(`https://swapi.dev/api/species/?page=${pageNumber}`)
        .then(function(response) {
            return response.json()
        })
        .then(speciesObject => {
            for(let i = 0; i < speciesObject.results.length; i++) {
                let item = document.createElement('li');
                let url = speciesObject.results[i].url.toString()
                item.setAttribute('url', url)
                item.addEventListener('click', getURL) 
                item.textContent = speciesObject.results[i].name;
                speciesList.appendChild(item)
            }
    })
}

let nextSpeciesPage = () => {
    pageNumber += 1;
    if (pageNumber > 4) {
        pageNumber = 1;
    }
    speciesList.innerHTML = '';
    listTenSpecies()
}

let displaySpecies = () => {
    pageNumber = 1;
    let listContainer = document.getElementById('listContainer');
    listContainer.innerHTML = '';
    let header = document.createElement('h2');
    let headerText = document.createTextNode('Species');
    header.appendChild(headerText);
    listContainer.appendChild(header);
    let speciesList = document.createElement('ul');
    speciesList.setAttribute('id', 'speciesList')
    listContainer.appendChild(speciesList);
    listTenSpecies();
    let nextButton = document.createElement('p');
    nextButton.setAttribute('id', 'nextButton');
    nextButton.textContent = 'Next Page';
    nextButton.addEventListener('click', nextSpeciesPage);
    listContainer.appendChild(nextButton);
}

export {displaySpecies}