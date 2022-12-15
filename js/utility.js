const displayItemInfo = (url) => {
    let infoContainer = document.getElementById('infoContainer');
    infoContainer.innerHTML = '';
    fetch(url)
    .then((response) => response.json())
        .then(item => {
            let header = document.createElement('h1');
            header.setAttribute('id', 'infoHeader')
            if (item.title) {header.textContent = item.title}
            if (item.name) {header.textContent = item.name}
            infoContainer.appendChild(header)
            let img = document.createElement('img');
            img.setAttribute('alt', 'Image Here')
            fetch('../images/images.json')
                .then(data => data.json())
                .then(imageData => {
                    for (const image in imageData){
                        console.log()
                        if (image == item.url) {
                            img.setAttribute('src', `${imageData[image]}`)
                        }
                    }
                })
            infoContainer.appendChild(img)
            for (const property in item) {
                if(property == 'name' || property == 'url' || property == 'created' || property == 'edited' || property == 'title'){
                    continue
                }
                let line = document.createElement('p')
                line.textContent = `${property}: ${item[property]}`
                infoContainer.appendChild(line)
            }
        })       
}

//---------------------testing---------------------------
// let pageNumber = 1;
// let nextPage = () => {
//     pageNumber += 1;
//     if (pageNumber > 9) {
//         pageNumber = 1;
//     }
//     itemList.innerHTML = '';
//     listItems()
// }

// let listItems = () => {
//     fetch(`https://swapi.dev/api/people/?page=${pageNumber}`)
//         .then(function(response) {
//             return response.json()
//         })
//         .then(peopleObject => {
//             for(let i = 0; i < peopleObject.results.length; i++) {
//                 let item = document.createElement('li');
//                 let url = peopleObject.results[i].url
//                 item.setAttribute('url', url)
//                 item.addEventListener('click', getURL)      
//                 item.textContent = peopleObject.results[i].name;
//                 itemList.appendChild(item)
//             }
//         })
// }
// let displaySection = (sectionName) => {
//     pageNumber = 1;
//     let listContainer = document.getElementById('listContainer');
//     listContainer.innerHTML = '';
//     let header = document.createElement('h2');
//     let headerText = document.createTextNode(sectionName);
//     header.appendChild(headerText);
//     listContainer.appendChild(header);
//     let itemList = document.createElement('ul');
//     itemList.setAttribute('id', 'itemList')
//     listContainer.appendChild(itemList);
//     listItems();
//     if (sectionName !== 'Films') {
//         let nextButton = document.createElement('p');
//         nextButton.setAttribute('id', 'nextButton');
//         nextButton.textContent = 'Next Page';
//         nextButton.addEventListener('click', nextPage)
//         listContainer.appendChild(nextButton);
//     }
// }

// const getSectionName = (event) => {
//     let sectionName = event.target.getAttribute('id')
//     display
// }

//---------------------testing---------------------------
const getURL = (event) => { 
  let url = event.target.getAttribute('url');
  displayItemInfo(url);
}

export {getURL, displayItemInfo}
