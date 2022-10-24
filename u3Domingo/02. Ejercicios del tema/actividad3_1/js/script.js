// calcular base
function calculoBase(){
    var base = prompt('Introduzca la base del triangulo');
    var altura = prompt('Introducza la altura del triangulo');
    
    var resultado = (base*altura) / 2;
    
    alert('El area del triangulo es ' + resultado);
}

window.onload = calculoBase;
