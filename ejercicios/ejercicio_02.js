// 🔹 Selectores del DOM
const titulo = document.getElementById("titulo");
const parrafo = document.querySelector("#parrafo");
const caja = document.getElementById("caja");
const boton = document.getElementById("btnCambiar");

// 🔹 Navegación por nodos
console.log("Padre del título:", titulo.parentElement);
console.log("Hermano siguiente del título:", titulo.nextElementSibling);
console.log("Hijos del body:", document.body.children);

// 🔹 Evento para manipular elementos
boton.addEventListener("click", () => {
  // Cambiar texto
  titulo.textContent = "✅ Título cambiado desde JavaScript";
  parrafo.textContent = "El párrafo fue actualizado con JS.";

  // Cambiar estilo de caja
  caja.style.backgroundColor = "lightgreen";
  caja.style.padding = "15px";
  caja.style.border = "2px solid darkgreen";

  // Manipular atributos (ejemplo: convertir en enlace)
  caja.setAttribute("title", "Este es un tooltip agregado con JS");
});
