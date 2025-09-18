const form = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", e => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!nombre || !email) {
    mensaje.textContent = "Todos los campos son obligatorios.";
    mensaje.style.color = "red";
  } else {
    mensaje.textContent = "Formulario enviado correctamente.";
    mensaje.style.color = "green";
  }
});
