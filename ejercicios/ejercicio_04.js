const texto = document.getElementById("texto");
const btn = document.getElementById("btn");

texto.textContent = "Texto cambiado con textContent";
texto.innerHTML += " <b>(negrita añadida con innerHTML)</b>";

btn.addEventListener("click", () => {
  texto.innerHTML = "<i>Contenido cambiado al hacer clic</i>";
});
