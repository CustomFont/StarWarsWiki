let pageNumber = 1;
let sectionName = '';

// Display information of clicked item from the navbar
//  url comes from getURL() event listener attatched to each <li> in navbar <ul>
function displayItemInfo(url) {
  let infoContainer = document.getElementById('infoContainer');
  infoContainer.innerHTML = '';
  fetch(url)
    .then((response) => response.json())
    .then(item => {
      let header = document.createElement('h1');
      header.setAttribute('id', 'infoHeader');
      if (item.title) { header.textContent = item.title; }
      if (item.name) { header.textContent = item.name; }
      infoContainer.appendChild(header);
      let img = document.createElement('img');
      img.setAttribute('alt', 'Image Here');
      // images.js ---> key = url of selected item/ value = image src
      fetch('/images/images.json')
        .then(data => data.json())
        .then(imageData => {
          for (const image in imageData) {
            console.log();
            if (image == item.url) {
              img.setAttribute('src', `${imageData[image]}`);
            }
          }
        });
      infoContainer.appendChild(img);
      // properties to ignore when displaying item properties in the infoContainer
      for (const property in item) {
        if (property == 'name' || property == 'url' || property == 'created' || property == 'edited' || property == 'title') {
          continue;
        }
        let line = document.createElement('div');
        line.textContent = `${property}: ${item[property]}`;
        infoContainer.appendChild(line);
      }
    });
}

function nextPage() {
  pageNumber += 1;
  // accounts for different amounts of pages in database for each section
  if (sectionName == 'people') {
    if (pageNumber > 9) {
      pageNumber = 1;
    }
  } else if (sectionName == 'planets') {
    if (pageNumber > 6) {
      pageNumber = 1;
    }
  } else if (sectionName == 'species' || sectionName == 'starships' || sectionName == 'vehicles') {
    if (pageNumber > 4) {
      pageNumber = 1;
    }
  }
  itemList.innerHTML = '';
  listItems();
}

// lists the results from fetch in the sidebar for user selection
// attatches event listener with getURL function to each item
function listItems() {
  fetch(`https://swapi.dev/api/${sectionName}/?page=${pageNumber}`)
    .then(function (response) {
      return response.json();
    })
    .then(responseJSON => {
      for (let i = 0; i < responseJSON.results.length; i++) {
        let item = document.createElement('li');
        let url = responseJSON.results[i].url;
        item.setAttribute('url', url);
        item.addEventListener('click', getURL);
        if (sectionName == 'films') {
          item.textContent = responseJSON.results[i].title;
        } else {
          item.textContent = responseJSON.results[i].name;
        }
        itemList.appendChild(item);
      }
    });
}

//utilized to caplitalize the section header in the sidebar
// may be able to replace this in css
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function displaySection(sectionName) {
  pageNumber = 1;
  let listContainer = document.getElementById('listContainer');
  listContainer.innerHTML = '';
  let header = document.createElement('h2');
  let headerText = document.createTextNode(capitalizeFirstLetter(sectionName));
  header.appendChild(headerText);
  listContainer.appendChild(header);
  let itemList = document.createElement('ul');
  itemList.setAttribute('id', 'itemList');
  listContainer.appendChild(itemList);
  listItems();
  if (sectionName !== 'films') {
    let nextButton = document.createElement('p');
    nextButton.setAttribute('id', 'nextButton');
    nextButton.textContent = 'Next Page';
    nextButton.addEventListener('click', nextPage);
    listContainer.appendChild(nextButton);
  }
}

// retrieves which section is active when attatched as event listener to header navbar items
function getSectionName(event) {
  sectionName = event.target.getAttribute('id');
  console.log();
  displaySection(sectionName);
}

// retrieves url associated with the li name listed in the sidebar
function getURL(event) {
  let url = event.target.getAttribute('url');
  displayItemInfo(url);
}

//---------------- Header Navbar Event Listeners --------------------------------//
document.getElementById('people').addEventListener("click", getSectionName)
document.getElementById('planets').addEventListener("click", getSectionName)
document.getElementById('species').addEventListener("click", getSectionName)
document.getElementById('films').addEventListener("click", getSectionName)
document.getElementById('starships').addEventListener("click", getSectionName)
document.getElementById('vehicles').addEventListener("click", getSectionName)

