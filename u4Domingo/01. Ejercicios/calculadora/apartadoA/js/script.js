/*
DECLARACIÓN DE VARIABLES
*/
var errorGlobal = ""; // error global

// calcular datos usando una funcion simple
function manejadorBtnCalcula(e){
    var oper1 = 0; // variable 1
    var oper2 = 0; // variable 2
    var opToUse; // variable para guardar operacion a usar

    // capturo operando 1
    oper1 = document.getElementById('primOperando');
    var valorOperando1 = oper1.value;
    valorOperando1 = valorOperando1.trim(); // quito espacios
    valorOperando1 = parseInt(valorOperando1); // convertido a numero entero

    // capturo operando 2
    oper2 = document.getElementById('segOperando');
    var valorOperando2 = oper2.value;
    valorOperando2 = valorOperando2.trim(); // quito espacios
    valorOperando2 = parseInt(valorOperando2); // convertido a numero entero

    // realizar la operacion
    var tmpResult = 0;
    var opToUse = document.formulario.selectOperacion.value;
    var tmpOpToUse;

    switch(opToUse){
        case "suma":
            tmpOpToUse = suma; // suma de valores
            break;

        case "resta":
            tmpOpToUse = resta; // resta de valores
            break;

        case "producto":
            tmpOpToUse = producto; // producto de valores
            break;
        
        case "multiplicacion":
            tmpOpToUse = multiplicacion; // multiplicacion de valores
            break;
        
        case "division":
            tmpOpToUse = division; // division de valores
            break;
        
        case "potencia":
            tmpOpToUse = potencia; // potencia de valores
            break;
    }

    try {
       // si son valores numericos
        if (!isNaN(valorOperando1) && !isNaN(valorOperando2)) {
            tmpResult = crearOperacion(valorOperando1, valorOperando2, tmpOpToUse);
        } else {
            // si no son valores numericos
            throw "Operador no valido";
        }
 
    } catch (error) {
        errorGlobal = error; // registro de error global
    }
    
    // resultado
    resultadoCalculos = tmpResult;

    // pinto resultado en documento
    document.getElementById('resultadoOp').innerHTML = resultadoCalculos;
    document.getElementById('error').innerHTML = "ERROR registrado: " + errorGlobal;

    return false;
}

// function inicializadora
function init(){
    // referencia a boton
    var btn = document.getElementById('btnCalcula');

    // manejador de evento
    btn.addEventListener('click', manejadorBtnCalcula);
}

window.onload = init;