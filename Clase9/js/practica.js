let existe = 0;

function siExisteAumenta(variable, texto){
    if(variable === null || variable.lenght== 0){
        console.log("No se encontro el valor buscado->" + texto)
    }else{
        existe++;
        console.log("Se encontro el valor buscado->" + texto)
    }
}
/* creo una variable y le asigno la seleccion por ID, y luego paso esa variable como parametro de la funcion */
const miDiv = document.getElementById("div-1");
siExisteAumenta(miDiv, "div-1");

/* creo una variable y le asigno la seleccion por CLASE, y luego paso esa variable como parametro de la funcion */
const misElementos = document.getElementsByClassName("parrafo");
siExisteAumenta(misElementos, "parrafo");

const apellido = document.getElementsByName("apellido");
siExisteAumenta(apellido, "apellido");

const edad = document.getElementsByName("edad");
siExisteAumenta(edad, "edad");

/* creo una variable y le asigno la seleccion por TagName (selecciona segun el tipo de etiqueta), y luego paso esa variable como parametro de la funcion */
const select = document.getElementsByTagName("select");
siExisteAumenta(select, "select");

/* creo una variable y le asigno la seleccion por QuerySelector (selecciona segun el tipo de etiqueta), y luego paso esa variable como parametro de la funcion */
const comentario = document.querySelector("#comentario");
siExisteAumenta(comentario, "comentario");


/* punto 8 */
function siExiste(id) {
    const elemento = document.getElementById(id);
    if (elemento === null || elemento.lenght == 0) {

        elemento = document.createElement("div");
        elemento.id = id;

    } else {
        let nodoTexto= document.createTextNode("Este es un texto");
        elemento.appendChild(nodoTexto);
        let nodoComentario= document.createComment("Este es un comentario");
        elemento.appendChild(nodoComentario);
        elemento.style='font-size:16px';
    }
    return elemento;
}

const div = siExiste("div-1");