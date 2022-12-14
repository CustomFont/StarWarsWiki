import {displayItemInfo} from './js/utility.js'
import {displayFilms} from './js/films.js'
import {displayPeople, nextPeoplePage} from './js/people.js'
import {displaySpecies, nextSpeciesPage} from "./js/species.js"


  // get all planets
let getAllPlanets = fetch('https://swapi.dev/api/planets/')
    .then(function(response) {
        return response.json()
    })

  // get all spaceships
let getAllStarships = fetch('https://swapi.dev/api/starships/')
    .then(function(response) {
        return response.json()
    })

  // get all vehicles
let getAllVehicles = fetch('https://swapi.dev/api/vehicles/')
    .then(function(response) {
        return response.json()
    })

//----------------Event Listeners------------------------
document.getElementById('peopleSelector').addEventListener("click", displayPeople)
document.getElementById('filmsSelector').addEventListener("click", displayFilms)
document.getElementById('speciesSelector').addEventListener("click", displaySpecies)
document.getElementById('nextButton').addEventListener('click', nextSpeciesPage)
document.getElementById('nextButton').addEventListener('click', nextPeoplePage)
document.querySelector('url').addEventListener('click', displayItemInfo)
