var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var media;
var letraMedia;
var dni = prompt('Introduce tu DNI');
var letra = prompt('Introduce la letra');
letra = letra.toUpperCase();

if (dni < 0 || dni > 99999999){
    alert('Numero de DNI NO valido');
} else {
    media = dni % 23;
    letraMedia = letras[media];

    if (letraMedia == letra){
        alert('El DNI es correcto');
    } else {
        alert('La letra indicada no es correcta');
    }
}