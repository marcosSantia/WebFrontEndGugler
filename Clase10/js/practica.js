//PUNTO 1

const h1 = document.querySelector('h1');
const h3 = document.querySelector('h3');

/* le paso como parametro el objeto event para poder acceder a sus atributos */
const cambiarRojo = (event) => {
    //capturamos el componente asociado al evento
    event.target.style = 'color:red';
}

const cambiarNegro = (event)=>{
    //capturamos el componente asociado al evento
    event.target.style = 'color:black';
}

h1.addEventListener('mouseenter',cambiarRojo);
h3.addEventListener('mouseenter',cambiarRojo);
h1.addEventListener('mouseout', cambiarNegro);
h3.addEventListener('mouseout', cambiarNegro);

// PUNTO 2

const p = document.querySelectorAll('p'); 

/* esto devuelve un nodelist y esto se puede iterar con un foreach */

p.forEach( (valor, indice)=>{
    valor.addEventListener('mouseenter', ()=>{
        valor.className = 'fondoAmarillo';
    });
    
    valor.addEventListener('mouseout', ()=>{
        valor.className = '';
    })
} )





