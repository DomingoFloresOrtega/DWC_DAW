// abrir ventana nueva
function abrirVentana(e){
    window.open('Actividad-3.5b-ComunicacionVentanas.html');
}

// funcion inicializadora
function init(){
    var btnVentana = document.getElementById('newwin');

    btnVentana.addEventListener('click',abrirVentana);
}

window.onload = init;