function calcularLetra(){
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    var dni = prompt('Introduce tu DNI');
    var media;

    if (dni < 0 || dni > 99999999){
        alert('Numero de DNI NO valido');
    } else {
        media = dni % 23;
        alert('Tu DNI completo es ' + dni + letras[media]);
    }
}

function arrayDni(){
    var array = [];

    var dni = prompt('Introduce tu DNI');
    var media;
}