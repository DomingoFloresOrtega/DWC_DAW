// controladora de evento para cambio de datos
function pasoValorHandler(e){
    var formulario1 = window.opener.document.formulario1;
    var formulario2 = window.document.formulario2;
    formulario1.resultado.value = formulario2.datos.value;
}

// funcion inicializadora
function init(){
    var texto = document.getElementById('texto');

    texto.addEventListener('click',pasoValorHandler);
}

window.onload = init;