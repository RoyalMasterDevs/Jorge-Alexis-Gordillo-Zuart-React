// Fetch API consumir datos desde un TXT.

const obtenerDatos = () => {
    fetch('data/datos.txt').then( respuesta => {
        console.log(respuesta);

        console.log(respuesta.headers.get("Content-Type"));// Header
        console.log(respuesta.status);//estatus de la info
        console.log(respuesta.statusText);//estado en ingles
        console.log(respuesta.url);// URL a la que consultamos
        console.log(respuesta.type);//tipo de consulta

        return respuesta.text();
    })

    .then (datos => {
        console.log(datos);
    })

    .catch(error => {
        console.log(error);
    })
}



const cargarTxtBtn = document.getElementById('cargarTxt')

cargarTxtBtn.addEventListener('click', obtenerDatos);





//Tomar los elementos con el getElementByID

//const cargarTxtBtn = document.querySelector('#cargarTxt');


// Convertir estas funciones a arrow functions

/*function obtenerDatos(){
    fetch('data/datos.txt').then( respuesta => {
        console.log(respuesta);

        console.log(respuesta.headers.get("Content-Type"));// Header
        console.log(respuesta.status);//estatus de la info
        console.log(respuesta.statusText);//estado en ingles
        console.log(respuesta.url);// URL a la que consultamos
        console.log(respuesta.type);//tipo de consulta

        return respuesta.text();
    })

    .then (datos => {
        console.log(datos);
    })

    .catch(error => {
        console.log(error);
    })
}*/

