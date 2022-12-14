import { getURL, pageNumber} from '../js/utility.js'

const getAllSpecies = () => {  
    return fetch('https://swapi.dev/api/species/')
        .then(function(response) {
            return response.json()
        })
    }
    
const listTenSpecies = () => {
    let speciesPromise = getAllSpecies() 
    speciesPromise.then(speciesObject => {
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

const nextSpeciesPage = () => {
    pageNumber += 1;
    if (pageNumber > 4) {
        pageNumber = 1;
    }
    speciesList.innerHTML = '';
    getAllSpecies = fetch(`https://swapi.dev/api/species/?page=${pageNumber}`)
        .then(function(response) {
            return response.json()
        })
        .then(listTenSpecies())
}

var displaySpecies = () => {
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
    nextButton.setAttribute('onclick', 'nextSpeciesPage()');
    listContainer.appendChild(nextButton);
}
//module.exports = SpeciesMethods
export { displaySpecies, getAllSpecies, listTenSpecies, nextSpeciesPage}