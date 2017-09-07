const attributionElement = document.getElementById('attribution');

function loadImage(i){
    if (imageModel[i] == null) return;
    document.body.style.backgroundImage = ` linear-gradient(to top, 
        rgba(19, 21, 25, 0.5), 
        rgba(19, 21, 25, 0.5)),
         url("${imageModel[i].url}")`;
    attributionElement.innerText = imageModel[i].attribution;
}

let randomImg = Math.floor(Math.random() * imageModel.length);
loadImage(randomImg);