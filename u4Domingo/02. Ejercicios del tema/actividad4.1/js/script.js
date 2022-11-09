function mostrarCodificacion(){
    var elemento = document.getElementById('texto');

    var texto = "<h1>Vocal con tilde - Codificación en Unicode</h1>" +
                "á - " + escape('á') +
                "<br>é - " + escape('é') +
                "<br>í - " + escape('í') +
                "<br>ó - " + escape('ó') +
                "<br>ú - " + escape('ú')
    elemento.innerHTML += document.write(texto);
}

function init(){
    mostrarCodificacion();
}

window.onload = init;