
const boton = document.querySelector('input[type=submit]');
const formulario = document.querySelector('form');

console.log(formulario);


function validarEmail(email){
    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    let verificar = expReg.test(email);
    if (verificar) {
        return true;
    }else{
        return false;
    }
}



boton.addEventListener("click", (event)=>{
    event.preventDefault();

    const email = document.getElementById("email").value;
    const edad = document.getElementById("edad").value;

    console.log(email);
    console.log(edad);

    validarEmail(email);

    console.log(validarEmail(email));


    if ((validarEmail(email) == false)||(edad <= 0)) {
        console.log("formulario no enviado");
    } else {
        formulario.submit();
        console.log("formulario enviado");
    }
});



