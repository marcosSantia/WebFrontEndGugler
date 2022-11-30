/* eventos con addEventListener() la forma correcta de usar eventos */
//seleccionar el elemento
let boton = document.querySelector('#boton');

/* addEventListener(evento, function) */
/* entonces creo la funcion y se la asigno a una constante para pasarla como parametro */

let saludo = () => {
    alert('Hola desde event listener');
}

boton.addEventListener('click', saludo);

console.log(boton);


/* creo un input de text en el html y le asigno un ID selecciono ese elemento con querySelector y le aplico un eventListener con focus (cuando le doy click) */
let input = document.querySelector('#nombre');
let componente = function focus() {
    console.log("se ha seleccionado el componente")
}
input.addEventListener('focus', componente);
/* aca es casi lo mismo pero definido como atributo  */
input.onblur = () => {
    console.log("se ha deseleccionado el componente");
}

/* si quiero remover el listener tiene que estar previamente añadido  input.removeEventListener('focus', componente); */


