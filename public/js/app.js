let linkCss = document.querySelector('head > link')
let app = document.querySelector('#app');
function createElement(typeElement, elementID, elementIDLocation, elementClass, elementSrc, elementTextContent, elementAlt){
    let createElement = document.createElement(typeElement);
    createElement.id = elementID;
    createElement.classList = elementClass;
    createElement.src = elementSrc;
    createElement.alt = elementAlt;
    createElement.textContent = elementTextContent;
    document.getElementById(elementIDLocation).append(createElement);
}
function randomPricing(){
    randomPrice = (Math.random()*100)+1;
    return randomPrice.toFixed(2);
}
// add css bootstrap
linkCss.insertAdjacentHTML('beforebegin', '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">')
// add js bootstrap
document.querySelector('body >script').insertAdjacentHTML('beforebegin', '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>')
fetch('public/php/data.php').then(
    response => response.text().then(
        data =>{
            data.replaceAll('\\', '')
            dataParse = JSON.parse(data);
            for (let i = 0; i < 20; i++) {
                let random = randomPricing();
                createElement("div", "product"+i, "app", "card", "","","");
                createElement("img", "", "product"+i , "card-img-top", "public/images/cardImage.svg", "", "image produit");
                createElement("div", "descProduct"+i, "product"+i, "card-body d-flex flex-column justify-content-around", "","","");
                createElement("h5", "", "descProduct"+i,"card-title", "","Product "+i,"")
                createElement("p", "", "descProduct"+i,"", "",dataParse.desc,"");
                createElement("p", "", "descProduct"+i,"", "","Prix:","");
                createElement("p", "", "descProduct"+i,"", "",random+" €" ,"");
                createElement("button", "", "descProduct"+i,"btn btn-primary", "","En Savoir Plus","")
            }
        }))