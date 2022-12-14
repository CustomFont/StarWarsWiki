import { pageNumber, getURL} from "./utility.js"

const getAllPeople = fetch(`https://swapi.dev/api/people/?page=${pageNumber}`)
    .then(function(response) {
        return response.json()
    })

const listTenPeople = () => {
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

const nextPeoplePage = () => {
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

const displayPeople = () => {
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

export {displayPeople, nextPeoplePage, listTenPeople, getAllPeople}