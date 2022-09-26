
// obtengo la referencia al boton por id
var miBtnLoad = document.getElementById('btnLoad');

function funcionManejoClick(e){
    console.log('He hecho click');

    // modifico el texto del parrafo p (elementP del DOM)
    elementoP.innerHTML += "Hola "; // += (concateno texto con Hola)
}

// asocio el manejador de eventos onclick al elemento
miBtnLoad.addEventListener('click', funcionManejoClick);


// referencia al parrafo con id msgUser (declarar preferiblemente arriba)
var elementoP = document.getElementById('msgUser');

