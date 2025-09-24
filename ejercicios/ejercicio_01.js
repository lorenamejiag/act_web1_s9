// Seleccionamos el div donde mostraremos la información
const infoDiv = document.getElementById("info");

// Obtenemos título y URL con propiedades del documento
const titulo = document.title;
const url = document.URL;

// Insertamos en el div con innerHTML
infoDiv.innerHTML = `
  <p><strong>Título del documento:</strong> ${titulo}</p>
  <p><strong>URL actual:</strong> ${url}</p>
`;
