/*
    funcion que calcula el factorial de un numero dado
*/

function calculaFactorial(numCalcular) {
    
    var tmpCalculo = 1;

    for (var index = 1; index <= numCalcular; index++) {
        tmpCalculo = tmpCalculo * index;
    }

    return tmpCalculo;
}

function calculaRangoFactorial(numCalcular) {
    
    var tmpCalculo = 1;

    for (var index = 1; index <= numCalcular; index++) {
        tmpCalculo = tmpCalculo * index;
    }

    return tmpCalculo;
}