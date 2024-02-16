document.addEventListener('DOMContentLoaded', function() {
  iniciarApp();
});

function iniciarApp() {
  crearGaleria();

  let yearSpan = document.getElementById("year");

    let currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
}

function crearGaleria() {
  
}

function mostrarImagen() {
  
}