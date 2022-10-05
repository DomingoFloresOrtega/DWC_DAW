
function letraCapiFraseSimple(cadenaConvertir){

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

function letraCapiFraseCompleja(cadenaConvertir){

    var primeraLetra;
    var frase = "";
    var mayus;
    var resultado;

    // Dividir la frase en palabras
    var palabras = cadenaConvertir.split(" ");

    // Recorremos el array de palabras
    for (var i in palabras){
        primeraLetra = palabras[i].charAt(0);

        // Convierto a mayusculas
        mayus = primeraLetra.toUpperCase();

        // Palabra ya capitalizada
        resultado = mayus.concat(palabras[i].substring(1));

        frase += resultado + " ";
    }

    return frase;
}

function letraCapiFraseComplejaSinSplit(cadenaConvertir){

    var primeraLetra;
    var frase = "";
    var mayus;
    var resultado;

    for (var i = 0, long = cadenaConvertir.length; i < long; i++){
        
    }

    return frase;
}

console.log(letraCapiFraseCompleja("hola mundo mundial"));