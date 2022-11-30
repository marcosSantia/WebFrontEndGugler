/* creo la constante y le asigno la seleccion del formulario */
const form = document.querySelector('form');

/* creo la constante y le asigno la seleccion del boton enviar del formulario */
const btnSubmit = document.querySelector('input[type=submit]');

btnSubmit.onclick = (event)=>{
    event.preventDefault();
    /* selecciono el elemento input del nombre para validarlo */
    const input = document.querySelector('input[name=nombre]');

    if (input.value.length > 0) {
        /* aca utilizo la constante form antes declarada para enviarla al script php de proceso */
        form.submit();
    }else{
        console.log("detenemos el envio por default del boton submit");
    }
}


/* esto nos sirve para validar datos dentro de js antes de enviar un formulario */
