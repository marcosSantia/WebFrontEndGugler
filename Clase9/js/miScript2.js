const div = document.createElement('div');
div.textContent = 'Texto del elemento div';

const app = document.createElement('div');

app.id = 'app';
app.textContent = 'texto del elemento app';

app.insertAdjacentElement('beforebegin', div); /* el elemento se inserta dentro de la etiqueta html, antes del primer hijo */

document.body.appendChild(app);


/* isConnect */

/* nth-child */


const div = document.querySelector(".item:tht-child(2)"); /* si quiero seleccionar uno en particular pero no quiero modificar el html para clavarle un ID entonces uso ese metodo */

document.body.removeChild(div); /* elimina el elemento seleccionado */