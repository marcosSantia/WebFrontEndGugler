let existe = 0;

function siExisteAumenta(variable, texto){
    if(variable === null || variable.lenght== 0){
        console.log("No se encontro el valor buscado->" + texto)
    }else{
        existe++;
        console.log("Se encontro el valor buscado->" + texto)
    }
}

const miDiv = document.getElementById("div-1");
siExisteAumenta(miDiv, "div-1");