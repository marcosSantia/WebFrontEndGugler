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

function validarEmail(email){
    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    var esValido = expReg.test(email);

    if(esValido == true){
        alert("El email es valido");
        return true;

    }else{
        alert("El email no es valido");
        return false;
    }
}

const email = document.querySelector('input[name=email]');
console.log(email);

btnSubmit.onclick = (event)=>{
    event.preventDefault();

    const nombre = document.querySelector('input[name=nombre]');
    const apellido = document.querySelector('input[name=apellido]');
    const edad = document.querySelector('input[name=edad]');
    const email = document.querySelector('input[name=email]');

    console.log(email);



    if (nombre.value.lenght > 0) {
        formulario.submit();
        
    }else if( edad.value > 0 ){
        formulario.submit();

    }else if(validarEmail(email) == true){
        formulario.submit();

    }else{
        console.log("Detenemos el envio del formulario por default del boton submit.");
    }

}