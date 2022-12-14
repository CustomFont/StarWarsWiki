import {getURL} from "./utility.js"


let getAllFilms = fetch('https://swapi.dev/api/films/')
    .then(function(response) {
        return response.json()
    })
const listFilms = () => {
    getAllFilms.then(filmsObject => {
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
const displayFilms = () => {
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

export {displayFilms, listFilms}