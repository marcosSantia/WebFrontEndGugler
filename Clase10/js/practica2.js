//PUNTO 3

const imgLinux = document.querySelector('.linux');

const logoWin = (event)=>{
    event.target.src = '../img/logoWin.png';
}

const logoLinux = (event)=>{
    event.target.src = '../img/logo.png';
}


imgLinux.addEventListener('mouseenter', logoWin);
imgLinux.addEventListener('mouseout', logoLinux);

//PUNTO 4

const formulario = document.querySelector('form');
const btnSubmit = document.querySelector('input[type=submit]');

/* funcion de validar mail */
function validarEmail(email){
    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    let verificar = expReg.test(email);
    if (verificar) {
        return true;
    }else{
        return false;
    }
}
/* cuando se clickee en el boton enviar... */
btnSubmit.addEventListener("click",(event)=>{
    event.preventDefault();/*  */

    const nombre = document.querySelector('input[name=nombre]');
    const apellido = document.querySelector('input[name=apellido]');
    const edad = document.querySelector('input[name=edad]').value;
    const email = document.getElementById("email").value;


    validarEmail(email);

    if ((validarEmail(email) == false)||(nombre.value.lenght <= 0)||(apellido.value.lenght <= 0)||(edad<=0)){
        console.log("formulario no enviado");
    }else{
        formulario.submit();
    }
})