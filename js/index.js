import {displayFilms} from './films.js'
import {displayPeople} from './people.js'
import {displaySpecies} from "./species.js"
import {displayPlanets} from './planets.js'
import {displayStarships} from './starships.js'
import {displayVehicles} from './vehicles.js'


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
document.getElementById('starshipsSelector').addEventListener("click", displayStarships)
document.getElementById('planetsSelector').addEventListener("click", displayPlanets)
document.getElementById('vehiclesSelector').addEventListener("click", displayVehicles)
