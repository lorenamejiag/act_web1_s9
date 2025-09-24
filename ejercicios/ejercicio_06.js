const texto = document.getElementById("texto");

document.getElementById("btnAgregar").addEventListener("click", () => {
  texto.classList.add("resaltado");
});

document.getElementById("btnQuitar").addEventListener("click", () => {
  texto.classList.remove("resaltado");
});

document.getElementById("btnToggle").addEventListener("click", () => {
  texto.classList.toggle("rojo");
});