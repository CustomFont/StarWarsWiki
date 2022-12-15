import {getURL} from "./utility.js"
let pageNumber = 1;

let listFilms = () => {
    fetch(`https://swapi.dev/api/films/?page=${pageNumber}`)
        .then(function(response) {
            return response.json()
        })
        .then(filmsObject => {
            for(let i = 0; i < filmsObject.results.length; i++) {
                let item = document.createElement('li');
                let url = filmsObject.results[i].url
                item.setAttribute('url', url)
                item.addEventListener('click', getURL)
                item.textContent = filmsObject.results[i].title;
                filmsList.appendChild(item)
            }
        })
}

let displayFilms = () => {
    pageNumber = 1;
    let listContainer = document.getElementById('listContainer');
    listContainer.innerHTML = '';
    let header = document.createElement('h2');
    let headerText = document.createTextNode('Films');
    header.appendChild(headerText);
    listContainer.appendChild(header);
    let filmsList = document.createElement('ul');
    filmsList.setAttribute('id', 'filmsList')
    listContainer.appendChild(filmsList);
    listFilms();
}

export {displayFilms}