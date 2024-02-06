let aVector = [1, 0, 0];
let bVector = [1, 0, 0];
let resultado = 0;

function calcuarProductoPunto() {
    aVector[0] = parseInt(document.getElementById('valora0').value);
    aVector[1] = parseInt(document.getElementById('valora1').value);
    aVector[2] = parseInt(document.getElementById('valora2').value);

    bVector[0] = parseInt(document.getElementById('valorb0').value);
    bVector[1] = parseInt(document.getElementById('valorb1').value);
    bVector[2] = parseInt(document.getElementById('valorb2').value);
    for (let i = 0; i < 3; i++) {
        resultado = resultado + (aVector[i]*bVector[i]);
    }
    console.log(resultado);
    asignaTextoElemento('h2',`a * b = ${resultado}`);
    resultado = 0;
}

function asignaTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
