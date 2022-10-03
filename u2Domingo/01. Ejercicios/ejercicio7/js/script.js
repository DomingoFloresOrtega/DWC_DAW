
// hago uso de la función calculaFactorial

// uso del bucle for

// apartado b
// calcular los factoriales y mostrarlos del 1 al 7

function realizaCalculosFactorial() {
    var msgUser = '';
    for (var index = 1 ; index <= 7; index++) {
    
        // calculo el factorial
        var tmpFactorialCalculado = calculaFactorial(index);
    
        msgUser += 'El factorial de ' + index + ' es ' + tmpFactorialCalculado + '</br>';
    }

    // Recopilo p de documento
    var msg = document.getElementById('msg');
    // Agrego nuevo texto
    msg.innerHTML += msgUser;
}

function realizaCalculosFactorialRango(numRango) {
    var msgUser = '';
    for (var index = 1 ; index <= numRango; index++) {
    
        // calculo el factorial
        var tmpFactorialCalculado = calculaRangoFactorial(index);
    
        msgUser += 'El factorial de ' + index + ' es ' + tmpFactorialCalculado + '</br>';
    }

    // Recopilo p de documento
    var msg2 = document.getElementById('msg2');
    // Agrego nuevo texto
    msg2.innerHTML += msgUser;
}

// funcion de inicialización
function init() {

    // Voy a asociar el manejador de eventos del boton btnCalcula

    // 1 - Obtener la referencia del DOM del boton btnCalcula
    var btnCalcula = document.getElementById('btnCalcula');
    var btnCalcula2 = document.getElementById('btnCalcula2');
        // Obtengo el valor de numRango
        var numRango = document.getElementById('numRango');

    // 2 - Asociar el evento onclick
    btnCalcula.addEventListener('click', realizaCalculosFactorial);
    btnCalcula2.addEventListener('click', realizaCalculosFactorialRango(numRango));
        // Si no coge parametros no ponemos parentesis
    
}
// cuando se haya cargado el DOM (arbol de nodos del documento)
window.onload = init;