var boton = document.getElementById(boton);

function funcionManejoClick(e){
    var numero = document.getElementById(num);
    var letra = document.getElementById(letra);

    if (numero < 0 || numero > 99999999){
        alert('Numero de DNI NO valido');
    } else {
        media = numero % 23;
        letraMedia = letras[media];
    
        if (letraMedia == letra){
            alert('El DNI es correcto');
        } else {
            alert('La letra indicada no es correcta');
        }
    }
}