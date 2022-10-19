var boton = document.getElementById('boton');

function funcionManejoClick(e){
    console.log('He hecho click');

    cambioColor();
}

// asocio el manejador de eventos onclick al elemento
boton.addEventListener('click', funcionManejoClick);