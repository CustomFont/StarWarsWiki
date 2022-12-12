const rootUrl = 'https://swapi.dev/api/'
let posts = fetch(rootUrl)
  .then(function(response) {
    return response.json()
   })
  .then(function(response){
    console.log(response)
    return Object.entries(response)
  })