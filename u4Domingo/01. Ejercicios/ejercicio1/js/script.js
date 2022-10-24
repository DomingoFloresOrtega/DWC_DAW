function calcularResultado(e){
    var valor = document.form1.seleccion.value;
    var v1 = document.form1.val1;
    var v2 = document.form1.val2;
    var resultado = 0;
    
    if (valor = 2){
        resultado = (v1 + v2)*2;
    } else if (valor = 3){
        resultado = (v1 + v2)*3;
    }

    document.getElementById('texto').innerHTML(resultado);
}

function init(){
    var btn = document.getElementById('btn');

    btn.addEventListener('click',calcularResultado);
}

window.onload = init;