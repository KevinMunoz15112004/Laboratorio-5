// LABORATORIO 5
// Integrantes: Joshua Morocho, Dany Mejia, Kevin Muñoz

// Se usa la API publica de un centro de datos de la pandemia COVID19, los datos registrados solo van hasta el 7 de marzo del 2021

const urlApi = 'https://api.covidtracking.com/v1/us/daily.json';

(async function conectarCovidAPI() {
  try {
    const respuesta = await(await fetch(urlApi)).json();
    console.log('Respuesta exitosa de la API de COVID Tracking', respuesta);
   
    console.log(respuesta[0]) 
    respuesta.forEach(dia => console.log(dia.date, dia.positive)); 

} catch (error) {
    console.error('Error al conectar con la API', error);
  }
})();



// MNIPULACIÓN DEL DOM EN LA PÁGINA DE LA API

const titulo = document.querySelector("h1.page-title._741b7")

const boton = document.createElement("button")

boton.textContent = "Click aqui"

boton.addEventListener("click", () => {
  alert("Esta página es de una API sobre el COVID");
})

titulo.appendChild(boton)

