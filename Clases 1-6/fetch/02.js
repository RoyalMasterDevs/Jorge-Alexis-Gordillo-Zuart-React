// Fetch API desde JSON

const cargarJSONBtn = document.querySelector("#cargarJSON");

cargarJSONBtn.addEventListener('click', obtenerDatos2);

function obtenerDatos2(){

    fetch("data/empleado.json")
        .then(respuesta => {
            return respuesta.json()
        })
        .then( resultado => {
            mostrarHTML(resultado);
            console.log(resultado);
        }
        )

}

function mostrarHTML({id, nombre, empresa, trabajo}){
    const contenido = document.querySelector('#contenido')
     contenido.innerHTML =`
     <p>ID: ${id}</p>
     <p>Empleado: ${nombre}</p>
     <p>Empresa: ${empresa}</p>
     <p>Puesto: ${trabajo}</p>
     `
}







/*function obtenerDatos2(){

    fetch('data/empleados.json')
        .then(response =>{

            console.log(response);

            console.log(response.headers.get("Content-Type"));//header
            console.log(response.status);//estatus de la info
            console.log(response.statusText);//estado en ingles
            console.log(response.url);//URL a la que consultamos
            console.log(response.type);//tipo de consulta

            return response.text();

        })

        .then(datos => {
                console.log(datos);
            }
        )
        .catch(error => {
            console.log(error);
        })

}*/
