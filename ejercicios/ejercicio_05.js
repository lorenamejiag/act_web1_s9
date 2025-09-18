// Seleccionamos los elementos
const imagen = document.getElementById("miImagen");
const enlace = document.getElementById("miEnlace");
const boton = document.getElementById("btnCambiar");

// Evento para cambiar atributos
boton.addEventListener("click", () => {
  // Leer atributos con getAttribute()
  console.log("SRC inicial de la imagen:", imagen.getAttribute("src"));
  console.log("Href inicial del enlace:", enlace.getAttribute("href"));

  // Cambiar atributos con setAttribute()
  imagen.setAttribute("src", "https://via.placeholder.com/300x200");
  enlace.setAttribute("href", "https://www.openai.com");
  enlace.textContent = "Ir a OpenAI";

  // Verificar cambios en consola
  console.log("SRC modificado de la imagen:", imagen.getAttribute("src"));
  console.log("Href modificado del enlace:", enlace.getAttribute("href"));
});
