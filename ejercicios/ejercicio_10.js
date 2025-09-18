const hijo2 = document.getElementById("hijo2");
const padre = hijo2.parentElement;
const hijos = padre.children;
const siguiente = hijo2.nextElementSibling;

const info = document.getElementById("info");
info.innerHTML = `
  <p>Padre: ${padre.id}</p>
  <p>Hijos: ${hijos.length}</p>
  <p>Siguiente hermano: ${siguiente.textContent}</p>
`;
