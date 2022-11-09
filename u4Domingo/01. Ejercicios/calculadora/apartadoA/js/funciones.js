function crearOperacion(valor1, valor2, operacionMatematica){
    resultado = operacionMatematica(valor1, valor2, operacionMatematica);

    return resultado;
}

function operacionMatematica(valor1, valor2, operacion){
    return operacion(valor1,valor2);
}

function suma(valor1, valor2){
    return valor1 + valor2;
}

function resta(valor1, valor2){
    return valor1 - valor2;
}

function producto(valor1, valor2){
    return valor1 * valor2;
}

function multiplicacion(valor1, valor2){
    return valor1 * valor2;
}

function division(valor1, valor2){
    return valor1 / valor2;
}

function potencia(valor1, valor2){
    return valor1 + valor2;
}