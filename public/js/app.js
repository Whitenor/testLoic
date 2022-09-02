let linkCss = document.querySelector('head > link')
let app = document.querySelector('#app');
// function for creating an element with many possibilities
function createElement(typeElement, elementID, elementIDLocation, elementClass, elementSrc, elementTextContent, elementAlt){
    let createElement = document.createElement(typeElement);
    createElement.id = elementID;
    createElement.classList = elementClass;
    createElement.src = elementSrc;
    createElement.alt = elementAlt;
    createElement.textContent = elementTextContent;
    document.getElementById(elementIDLocation).append(createElement);
}
// add css bootstrap
linkCss.insertAdjacentHTML('beforebegin', '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">')
// add js bootstrap
document.querySelector('body >script').insertAdjacentHTML('beforebegin', '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>')
// retrieving data from data.php
fetch('public/php/data.php').then(
    response => response.text().then(
        data =>{
            // deleting useless \
            data.replaceAll('\\', '')
            // parsing to a json format
            dataParse = JSON.parse(data);
            // loop for creation Of all Card with the previously retrieved data 
            for (let i = 0; i < dataParse.length; i++) {
                createElement("div", dataParse[i].ID, "app", "card", "","","");
                createElement("img", "", dataParse[i].ID , "card-img-top", "public/images/cardImage.svg", "", "image produit");
                createElement("div", "descProduct"+i, dataParse[i].ID, "card-body d-flex flex-column justify-content-around", "","","");
                createElement("h5", "", "descProduct"+i,"card-title", "",dataParse[i].title,"")
                createElement("p", "", "descProduct"+i,"", "",dataParse[i].desc,"");
                createElement("p", "", "descProduct"+i,"", "","Prix:","");
                createElement("p", "", "descProduct"+i,"", "",dataParse[i].pricing+" €" ,"");
                createElement("p", "", "descProduct"+i,"", "","ID:","");
                createElement("p", "", "descProduct"+i,"", "",dataParse[i].ID,"");
                createElement("button", "", "descProduct"+i,"btn btn-primary", "","En Savoir Plus","")
            }
}))