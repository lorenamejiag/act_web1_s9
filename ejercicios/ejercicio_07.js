const btn = document.getElementById("btn");
const lista = document.getElementById("lista");

btn.addEventListener("click", () => {
  for (let i = 1; i <= 3; i++) {
    const li = document.createElement("li");
    li.textContent = `Elemento ${i}`;
    lista.appendChild(li);
  }
});
