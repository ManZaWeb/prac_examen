document.addEventListener('DOMContentLoaded', function () {
    iniciarApp();
});

function iniciarApp() {
    crearGaleria();

    let yearSpan = document.getElementById("year");

    let currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
}

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
<source srcset="build/img/thumb/${i}.jpeg" type="image/jpeg">
<source srcset="build/img/thumb/${i}.webp" type="image/webp">
<img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="imagen galeria">
    `;

        imagen.onclick = function(){
            mostrarImagen(i)
        };

        galeria.appendChild(imagen);

    }
}

function mostrarImagen(id) {

    const imagen = document.createElement('picture');

    imagen.innerHTML = `
    <source srcset="build/img/grande/${i}.jpeg" type="image/jpeg">
    <source srcset="build/img/grande/${i}.webp" type="image/webp">
    <img loading="lazy" width="200" height="300" src="build/img/grande/${i}.jpg" alt="imagen galeria">
        `;

    const overlay = document.createElement('div');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    overlay.onclick = function(){
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
        overlay.remove();
    }

    const cerrarModal = document.createElement('p');
    cerrarModal.textContent = 'X';
    cerrarModal.classList.add('btn-cerrar');
    cerrarModal.onclick = function(){
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
        overlay.remove();
    }

    overlay.appendChild(cerrarModal);

    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
     
}