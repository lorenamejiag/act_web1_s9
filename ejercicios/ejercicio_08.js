const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  btn.textContent = "¡Clic hecho!";
});

const parrafo = document.getElementById("parrafo");
parrafo.addEventListener("mouseover", () => {
  parrafo.style.color = "red";
});
parrafo.addEventListener("mouseout", () => {
  parrafo.style.color = "black";
});
