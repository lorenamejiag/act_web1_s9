const items = document.getElementsByClassName("item");

for (let el of items) {
  el.style.color = "blue";
}

document.getElementById("resultado").textContent =
  `Hay ${items.length} elementos con la clase "item"`;
