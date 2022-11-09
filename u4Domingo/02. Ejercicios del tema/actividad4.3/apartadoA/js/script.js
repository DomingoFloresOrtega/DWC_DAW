function ordenarArray(){
    var elemento = document.getElementById('ordenPala');
    var palabras = new Array('botella','zeta','androide','minuto');

    palabras.sort();

    for (var i = 0; i < palabras.length; i++){
        elemento.innerHTML += palabras[i] + "<br>";
    }
}

function init(){
    ordenarArray();
}

window.onload = init;