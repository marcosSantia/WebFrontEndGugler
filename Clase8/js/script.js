/* Arreglos */
let colores = new Array("Rojo", "Verde", "Azul");

let otroColores = new Array();

let nuevoArreglo = new Array('Rojo', 'Verde', 'Azul', 1, 2, 3, true, false, null, undefined);

console.log(nuevoArreglo);

//notacion de []

let animales = []; /* definimos un arreglo vacio */
let otroAnimales = ['Perro', 'Gato', 'Conejo', 'Loro', 'Tortuga'];

console.log(otroAnimales);

/* recorrer arreglos */

otroAnimales.forEach(function(animal, index){
    console.log(animal,index);
});

for(let i = 0; i < otroAnimales.length; i++){
    console.log(otroAnimales[i]);
}

/* de todas formas para este tipo de busqueda es mejor utilizar el forEach */

/* metodos para arreglos */

//length -> devuelve la longitud del arreglo (cadema de texto
let lenguajes = ['PHP', 'JavaScript', 'CSS', 'HTML', 'Python', 'C++', 'C#', 'Java'];
console.log(lenguajes.length);

//toStrinfg() -> permite convertir un arreglo a una cadena de texto
let miCadena = lenguajes.toString();
console.log(miCadena);

/* .indexOf('valor') */
console.log(lenguajes.indexOf('CSS')); //devuelve la posicion del elemento en el arreglo sino existe ese valor devuelve -1

    
