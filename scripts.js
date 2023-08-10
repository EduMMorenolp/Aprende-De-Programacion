function cargarLeccion(event) {
  event.preventDefault(); // Evita el comportamiento predeterminado del enlace (no abrirá en una nueva pestaña)

  const enlace = event.target.getAttribute("href"); // Obtiene la ruta del enlace
  const contenidoLeccion = document.getElementById("contenido-leccion"); // Obtén el div donde se cargará el contenido

  fetch(enlace) // Obtiene el contenido de "Leccion1.html"
    .then((response) => response.text())
    .then((html) => {
      contenidoLeccion.in;
      nerHTML = html; // Coloca el contenido en el div
    })
    .catch((error) => {
      console.error("Error al cargar la lección:", error);
    });
}