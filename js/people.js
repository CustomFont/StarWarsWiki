import {getURL} from "./utility.js"
let peoplePageNumber = 1;

let getAllPeople = fetch(`https://swapi.dev/api/people/?page=${peoplePageNumber}`)
    .then(function(response) {
        return response.json()
    })

let listTenPeople = () => {
    getAllPeople.then(peopleObject => {
        for(let i = 0; i < peopleObject.results.length; i++) {
            let item = document.createElement('li');
            let url = peopleObject.results[i].url
            item.setAttribute('url', url)
            item.addEventListener('click', getURL)      
            item.textContent = peopleObject.results[i].name;
            peopleList.appendChild(item)
        }
    })
}

let nextPeoplePage = () => {
    peoplePageNumber += 1;
    if (peoplePageNumber > 9) {
        peoplePageNumber = 1;
    }
    peopleList.innerHTML = '';
    getAllPeople = fetch(`https://swapi.dev/api/people/?page=${peoplePageNumber}`)
        .then(function(response) {
            return response.json()
        })
        .then(listTenPeople())
}

let displayPeople = () => {
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
    nextButton.textContent = 'Next Page';
    nextButton.addEventListener('click', nextPeoplePage)
    listContainer.appendChild(nextButton);
}

export {displayPeople, nextPeoplePage, listTenPeople, getAllPeople}
