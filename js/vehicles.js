import {getURL} from "./utility.js"
let pageNumber = 1;

let listTenVehicles = () => {
    fetch(`https://swapi.dev/api/vehicles/?page=${pageNumber}`)
        .then(function(response) {
            return response.json()
        })
        .then(vehiclesObject => {
            for(let i = 0; i < vehiclesObject.results.length; i++) {
                let item = document.createElement('li');   
                let url = vehiclesObject.results[i].url
                item.setAttribute('url', url)
                item.addEventListener('click', getURL)
                item.textContent = vehiclesObject.results[i].name;
                vehiclesList.appendChild(item)
            }
        })
}

let nextVehiclesPage = () => {
    pageNumber += 1;
    if (pageNumber > 4) {
        pageNumber = 1;
    }
    vehiclesList.innerHTML = '';
    listTenVehicles()
}

let displayVehicles = () => {
    pageNumber = 1;
    let listContainer = document.getElementById('listContainer');
    listContainer.innerHTML = '';
    let header = document.createElement('h2');
    let headerText = document.createTextNode('Vehicles');
    header.appendChild(headerText);
    listContainer.appendChild(header);
    let vehiclesList = document.createElement('ul');
    vehiclesList.setAttribute('id', 'vehiclesList')
    listContainer.appendChild(vehiclesList);
    listTenVehicles();
    let nextButton = document.createElement('p');
    nextButton.setAttribute('id', 'nextButton');
    nextButton.textContent = 'Next Page'
    nextButton.addEventListener('click', nextVehiclesPage)
    listContainer.appendChild(nextButton);
}

export {displayVehicles}
