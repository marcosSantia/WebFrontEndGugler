

const contenedor = document.querySelector('.contenedor');

function mostrarInformacionTecla(eventoObj){

    const caracter = String.fromCharCode(eventoObj.which);
    contenedor.innerHTML = caracter;
}


window.onload = function() {
    document.onkeypress = mostrarInformacionTecla;
}