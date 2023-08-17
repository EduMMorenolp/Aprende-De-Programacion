document.addEventListener("DOMContentLoaded", function () {
    const styleSelector = document.getElementById("styleSelector");
  
    styleSelector.addEventListener("change", function () {
      const selectedStyle = styleSelector.value;
      changeStyle(selectedStyle);
    });
  
    function changeStyle(styleName) {
      const link = document.getElementById("stylesheet");
      link.href = styleName + "/estilos.css"; // Cambia "default.css" al nombre de tu hoja de estilo predeterminada
    }
  });

  /*// Obtener referencia al formulario de registro
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
 });*/