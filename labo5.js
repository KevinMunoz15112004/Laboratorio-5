// LABORATORIO 5
// Integrantes: Joshua Morocho, Dany Mejia, Kevin Muñoz

// Se usa la API publica de un centro de datos de la pandemia COVID19, los datos registrados solo van hasta el 7 de marzo del 2021

const urlApi = 'https://api.covidtracking.com/v1/us/daily.json';

(async function conectarCovidAPI() {
  try {
    const respuesta = await(await fetch(urlApi)).json();
    console.log('Respuesta exitosa de la API de COVID Tracking', respuesta);
    //Modificamos la respuesta de la API
    console.log(respuesta[0]) // mostrar los datos del primer día: ;
    // Podemos tambien iterar sobre los datos 
    respuesta.forEach(dia => console.log(dia.date, dia.positive)); //Muestra la fecha (yy-mm-dd) y los casos positivos covid en esa fecha por cada valor

} catch (error) {
    console.error('Error al conectar con la API', error);
  }
})();

// ---------------------------------------------

const urlApiDOM = 'https://api.covidtracking.com/v1/us/daily.json';

(async function conectarCovidAPIDOM() {
  try {
    const respuesta = await (await fetch(urlApiDOM)).json();
    console.log('Respuesta exitosa de la API de COVID Tracking', respuesta);

    const cuerpoTabla = document.getElementById('cuerpo-tabla');

    // Mostrar solo los primeros 10 días
    const primerosDiezDias = respuesta.slice(0, 10);

    primerosDiezDias.forEach(dia => {
      const fila = document.createElement('tr');
      const fecha = document.createElement('td');
      const positivos = document.createElement('td');

      // Convertimos la fecha a formato legible: yyyy-mm-dd
      const fechaFormateada = `${String(dia.date).substring(0, 4)}-${String(dia.date).substring(4, 6)}-${String(dia.date).substring(6)}`;
      fecha.textContent = fechaFormateada;
      positivos.textContent = dia.positive;

      fila.appendChild(fecha);
      fila.appendChild(positivos);
      cuerpoTabla.appendChild(fila);
    });

  } catch (error) {
    console.error('Error al conectar con la API', error);
  }
})();

