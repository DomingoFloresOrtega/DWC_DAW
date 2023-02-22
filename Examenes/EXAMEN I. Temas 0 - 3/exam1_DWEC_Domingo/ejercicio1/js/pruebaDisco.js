'use strict'

// funcion inicializadora
function init(){
    var misDiscos = [new Disco('Disco 1','Artista 1','2020','Hip-Hop',2), new Disco('Disco 2','Artista 3','2021','Hip-Hop',2), new Disco('Disco 3','Artista 3','2022','Pop',1)];

    // muestro info del disco 1
    console.log(misDiscos[0].muestraInfoDisco());

    // cambio de estanteria disco 1
    misDiscos[0].cambiarDeEstanteria(1);

    // cambio estado prestado a disco 2
    misDiscos[1].cambiarEstadoPrestado(true);

    // muestro info de discos
    console.log(misDiscos);
}

// inicializacion
window.onload = init;