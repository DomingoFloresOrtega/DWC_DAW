
function letraCapiFraseComple(cadenaConvertir){

    var resultado = "";

    if (!cadenaConvertir.length){
        return resultado;
    }

    // Obtener primera letra
    var primeraLetra = cadenaConvertir.charAt(0);

    // Convertir letra extraida en mayuscula
    var mayus = primeraLetra.toUpperCase();

    // Obtener el resto de la cadena
    var resultado = mayus.concat(cadenaConvertir.substring[1]);

    return resultado;
}

console.log(letraCapiFraseComple(""));