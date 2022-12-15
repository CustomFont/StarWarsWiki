const displayItemInfo = (url) => {
    let infoContainer = document.getElementById('infoContainer');
    infoContainer.innerHTML = '';
    fetch(url)
    .then((response) => response.json())
        .then(item => {
            let header = document.createElement('h1');
            header.textContent = item.name
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
                if(property == 'name' || property == 'url' || property == 'created' || property == 'edited'){
                    continue
                }
                let line = document.createElement('p')
                line.textContent = `${property}: ${item[property]}`
                infoContainer.appendChild(line)
            }
        })       
}
const getURL = (event) => { 
  let url = event.target.getAttribute('url');
  displayItemInfo(url);
}

export {getURL, displayItemInfo}
