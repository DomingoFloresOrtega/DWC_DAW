/*
DECLARACIÓN DE VARIABLES
*/
var errorGlobal = "Sin errores"; // error global
var opToUse;

// crear las diferentes operaciones
function crearOperacion(valor1, valor2, opToUse){
    var resultadoCalculos; // resultado operaciones

    switch(opToUse){
        case "suma":
            resultadoCalculos = valor1 + valor2; // suma de valores
            break;

        case "resta":
            resultadoCalculos = valor1 - valor2; // resta de valores
            break;
        
        case "multiplicacion":
            resultadoCalculos = valor1 * valor2; // multiplicacion de valores
            break;
        
        case "division":
            resultadoCalculos = valor1 / valor2; // division de valores
            break;
        
        case "potencia":
            resultadoCalculos = valor1 ^ valor2; // potencia de valores
            break;
    }

    return resultadoCalculos;
}

// calcular datos usando una funcion simple
function manejadorBtnCalcula(e){
    var oper1 = 0; // variable 1
    var oper2 = 0; // variable 2

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
    opToUse = document.formulario.selectOperacion.value;

    try {
       // si son valores numericos
        if (!isNaN(valorOperando1) && !isNaN(valorOperando2)) {
            tmpResult = crearOperacion(valorOperando1, valorOperando2, opToUse);
        } else {
            throw "Operador no valido";
        }
 
    } catch (error) {
        errorGlobal = error; // registro de error global
    }
    
    // resultado
    resultadoCalculos = tmpResult;

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