import {displayItemInfo} from './utility.js'
import {displayFilms} from './films.js'
import {displayPeople} from './people.js'
import {displaySpecies} from "./species.js"


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

//----------------Navbar Event Listeners------------------------
document.getElementById('peopleSelector').addEventListener("click", displayPeople)
document.getElementById('filmsSelector').addEventListener("click", displayFilms)
document.getElementById('speciesSelector').addEventListener("click", displaySpecies)