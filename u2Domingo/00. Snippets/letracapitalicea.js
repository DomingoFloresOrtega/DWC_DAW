
/*
    1. Letra capital
*/

function letraCapital(){
    var texto = "extraordinario";
    var mensaje;

    mensaje = texto.concat(" - " + texto.charAt(0).toUpperCase() + texto.substring(1));

    return mensaje;
}

//console.log(letraCapital());

/*
    2. Letra capital en frase
*/

function letraCapitalFraseSimple(){
    var palabra1;
    var palabra2;
    var mensaje;

    texto = "hola mundo";

    for (var i = 0; i < texto.length; i++){
        if (texto.charAt(i) == " "){
            palabra1 = texto.substr(0,i);
            palabra2 = texto.substr(i+1);
        }
    }

    mensaje = (palabra1.charAt(0).toUpperCase() + palabra1.substr(1))
                .concat(" " + palabra2.charAt(0).toUpperCase() + palabra2.substr(1));

    return mensaje;
}

//console.log(letraCapitalFraseSimple());

/*
    3. Letra capital en frase compleja
*/

function letraCapitalFraseCompleja(){
    var textoCom = "hola mundo mundial";
    var palabrasCom = textoCom.split(" ");
    var mensajeCom = "";

    for (i in palabrasCom){
         mensajeCom += palabrasCom[i].charAt(0).toUpperCase() + palabrasCom[i].substr(1) + " ";
    }

    return mensajeCom;
}

console.log(letraCapitalFraseCompleja());