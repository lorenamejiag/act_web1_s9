// Seleccionamos los elementos con la clase "resaltado"
const elementos = document.getElementsByClassName("resaltado");

// Convertimos la colección (HTMLCollection) a un array para usar métodos modernos
const elementosArray = Array.from(elementos);

// 🔹 Manipulación de elementos: cambiar estilo
elementosArray.forEach((el, index) => {
  el.style.backgroundColor = "lightblue";
  el.textContent += ` (Elemento #${index + 1})`; // agregamos texto extra
});

// 🔹 Mostrar cuántos elementos tienen esa clase
document.getElementById("contador").textContent = elementos.length;

// 🔹 Navegación por nodos
console.log("=== NAVEGACIÓN POR NODOS ===");
elementosArray.forEach((el) => {
  console.log("Elemento:", el.tagName);
  console.log("Padre:", el.parentElement.tagName);
  console.log("Siguiente hermano:", el.nextElementSibling?.tagName || "No hay");
});
