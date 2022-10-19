/**********************
 * BOTON 1
 **********************/
// obtengo la referencia al boton por id
var boton = document.getElementById('boton');
// referencia al parrafo con id zonaCambio
var zonaCambio = document.getElementById('zonaCambio');

function funcionManejoClick(e){
    // modifico el texto del parrafo p (mensaje del DOM)
    var texto = prompt("Ingresa un título para la nueva ventana: ");
    zonaCambio.innerHTML += "<h1>" + texto + "</h1>"; // += (concateno texto con Hola)
}

// asocio el manejador de eventos onclick al elemento
boton.addEventListener('click', funcionManejoClick);

/**********************
 * BOTON 2
 **********************/

// obtengo la referencia al boton por id
var boton2 = document.getElementById('boton2');
// referencia al parrafo con id zonaCambio2
var zonaCambio2 = document.getElementById('zonaCambio2');

function funcionManejoClick2(e){
    console.log('Hola2');

    // modifico el texto del parrafo p (formulario del DOM)
    var formulario = "<form name=\"cambiacolor\">" +
    "<b>Selecciona un color para el fondo de página:</b><br>" +
    "<select name=\"color\">" +
    "<option value=\"red\">Rojo</option>" +
    "<option value=\"blue\">Azul</option>" +
    "<option value=\"yellow\">Amarillo</option>" +
    "<option value=\"green\">Verde</option>" +
    "</select>" +
    "<input type=\"button\" value=\"Modifica el color\" onclick=\"document.bgColor = document.cambiacolor.color.value\">" +
    "</form>";

    zonaCambio2.innerHTML += formulario;
}

// asocio el manejador de eventos onclick al elemento
boton2.addEventListener('click', funcionManejoClick2);