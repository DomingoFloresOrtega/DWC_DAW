var miBoton = document.getElementById('boton');

function funcionManejoClick(e){
    console.log('He hecho click');

    window.resizeTo(500,500);
}

// asocio el manejador de eventos onclick al elemento
miBoton.addEventListener('click', funcionManejoClick);