let linkCss = document.querySelector('head > link')
function createElement(typeElement, elementID, elementIDLocation, elementClass, elementSrc, elementTextContent){
    let createElement = document.createElement(typeElement);
    createElement.id = elementID;
    createElement.classList = elementClass;
    createElement.src = elementSrc;
    createElement.textContent = elementTextContent;
    document.getElementById(elementIDLocation).append(createElement);
}
// add css bootstrap
linkCss.insertAdjacentHTML('beforebegin', '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">')
// add js bootstrap
document.querySelector('body >script').insertAdjacentHTML('beforebegin', '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>')
fetch('public/php/data.php').then(
    response => response.text().then(
        data =>{
            data.replaceAll('\\', '')
            test = JSON.parse(data);

        }
    ))