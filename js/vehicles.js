import {getURL} from "./utility.js"
let vehiclesPage = 1;

let getAllVehicles = fetch(`https://swapi.dev/api/vehicles/?page${vehiclesPage}`)
    .then(function(response) {
        return response.json()
    })



function listTenVehicles() {
    getAllVehicles.then(vehiclesObject => {
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

function nextVehiclesPage() {
    vehiclesPage += 1;
    if (vehiclesPage > 6) {
        vehiclesPage = 1;
    }
    vehiclesList.innerHTML = '';
    getAllVehicles = fetch(`https://swapi.dev/api/vehicles/?page=${vehiclesPage}`)
        .then(function(response) {
            return response.json()
        })
        .then(listTenVehicles())
}

function displayVehiclesInfo(url) {
    let infoContainer = document.getElementById('infoContainer');
    infoContainer.innerHTML = '';
    fetch(url)
    .then((response) => response.json())
    .then(item => {
        let header = document.createElement('h1');
        header.textContent = item.name
        infoContainer.appendChild(header)
        for (const property in item) {
            if(property == 'name' || property == 'url' || property == 'created' || property == 'edited'){
                continue
            }
            let line = document.createElement('p')
            line.textContent = `${property}: ${item[property]}`
            infoContainer.appendChild(line)
        }
    })       
}

function displayVehicles() {
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
    nextButton.addEventListener('click', nextVehiclesPage())
    listContainer.appendChild(nextButton);
}

export {displayVehicles}
