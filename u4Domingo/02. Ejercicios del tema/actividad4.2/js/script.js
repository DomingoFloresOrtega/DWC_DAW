function pedirNumero(){
    var numero = window.prompt('Introduzca un numero');
    return numero;
}
function calcularPar(numero){
    if (numero % 2 == 0){
        alert('El número es par');
    } else {
        alert('El número es impar');
    }
}

function init(){
    numero = pedirNumero();
    calcularPar(numero);
}

window.onload = init;