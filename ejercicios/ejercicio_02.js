// Seleccionar elementos por ID
const titulo = document.getElementById("titulo");
const parrafo = document.getElementById("parrafo");
const caja = document.getElementById("caja");

// Cambiar texto de los elementos
titulo.textContent = "Nuevo título desde JS";
parrafo.textContent = "Este párrafo fue modificado.";

// Cambiar estilo (color de fondo de la caja)
caja.style.backgroundColor = "lightblue";
caja.style.padding = "10px";
caja.style.border = "2px solid navy";
