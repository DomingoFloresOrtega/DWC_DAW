'use strict'

// funcion de manipulacion de palabras
function manipularPalabras(){
    var texto = document.getElementById('texto').value;
    // separo con split
    var textoConSplit = texto.split(' ');
    // asigno cada valor
    var primeraPalabra = textoConSplit[0];
    var ultimaPalabra = textoConSplit[textoConSplit.length-1];

    // abrimos nueva ventana
    var ventana2 = window.open("index2.html", "VENTANA 2", "height=600, width=800");

    // pintamos en la nueva ventana
    ventana2.document.write('<b>Primera palabra:</b> ' + primeraPalabra + '</br>' +
                            '<b>Ultima palabra:</b> ' + ultimaPalabra + '</br>' +
                            '<b>Número de palabras:</b> ' + (textoConSplit.length) + '</br>' +
                            '<b>Orden de palabras:</b> ' + textoConSplit.sort());
}

// funcion manejadora del boton
function init(){
    var boton = document.getElementById('boton');

    boton.addEventListener('click', manipularPalabras);
}

window.onload = init;