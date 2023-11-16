function toggleActivacion(elemento) {
    // Toggle de una clase llamada "activo"
    elemento.classList.toggle("activo");
}

function activarDetalle(elemento){
    let fotoPadre = elemento.parentNode;
    fotoPadre.classList.toggle("activo");
    elemento.classList.toggle("activo");
}

// let inputDetalle; // Variable para guardar el input

// // Función para activar el detalle
// function activarDetalle(elemento) {
//   elemento.classList.toggle('activo');
//   inputDetalle = document.getElementById('inputDetalle');
  
//   // Verificar si la clase activo está presente
//   if (elemento.classList.contains('activo')) {
//     inputDetalle.focus(); // Mantener el foco en el input
//   } else {
//     inputDetalle.blur(); // Quitar el foco del input al desactivar
//   }
// }
