const enlace = document.getElementById("enlace");
console.log("Href original:", enlace.getAttribute("href"));

enlace.setAttribute("href", "https://openai.com");

const imagen = document.getElementById("imagen");
imagen.setAttribute("src", "https://via.placeholder.com/150");
