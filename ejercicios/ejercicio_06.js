const texto = document.getElementById("texto");
const btn = document.getElementById("toggle");

texto.classList.add("rojo");
texto.classList.remove("rojo");

btn.addEventListener("click", () => {
  texto.classList.toggle("azul");
});
