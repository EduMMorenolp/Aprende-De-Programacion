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
 // Obtener referencia al formulario de registro
 var registroForm = document.querySelector('#registroModal form');
 let clientes = [];
 registroForm.addEventListener('submit', function(event) {
   event.preventDefault(); // Evitar que el formulario se envíe

   // Obtener valores de los campos del formulario
   var nombre = document.querySelector('#nombre').value;
   var email = document.querySelector('#email').value;
   var contrasena = document.querySelector('#contrasena').value;

   var cliente = {
     nombre: nombre,
     email: email,
     contrasena: contrasena
   };
   clientes.push(cliente);
   
   // Mostrar el cliente en la consola
   console.log('Nuevo cliente registrado:', cliente);
   console.log(clientes)
 });
