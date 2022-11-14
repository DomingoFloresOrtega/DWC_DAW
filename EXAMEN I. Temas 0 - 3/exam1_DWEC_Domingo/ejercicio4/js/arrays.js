'use strict'

var arrDatos;

// muestro numero de paises
function numeroPaises(arrDatos){
    console.log('Numero de paises');
    console.log(arrDatos.length);
}

// muestro elementos
function mostrarPaises(arrDatos){
    console.log('Elementos de array');
    console.log(arrDatos);
}

// muestro elementos en sentido inverso
function paisesInvertidos(arrDatos){
    console.log('Elementos en orden inverso');
    console.log(arrDatos.reverse());
}

// muestro elementos ordenados alfabeticamente
function paisesOrdenados(arrDatos){
    console.log('Elementos ordenados');
    console.log(arrDatos.sort());
}

// añado elemento al principio
function anadeInicio(arrDatos){
    console.log('Inserto al principio');
    arrDatos.unshift('Grecia');
    console.log(arrDatos);
}

// añado elemento al final
function anadeFinal(arrDatos){
    console.log('Inserto al final');
    arrDatos.push('Estados Unidos');
    console.log(arrDatos);
}

// borro elemento al principio y devuelvo
function borrarPrincipio(arrDatos){
    arrDatos.shift();
}

// borro elemento al final y devuelvo
function borrarFinal(arrDatos){
    arrDatos.pop();
}

// funcion inicializadora
function init(){
    numeroPaises(paises);
    mostrarPaises(paises);
    paisesInvertidos(paises);
    paisesOrdenados(paises);
    anadeInicio(paises);
    anadeFinal(paises);
    borrarPrincipio(paises);
    borrarFinal(paises);
}

// inicializacion
window.onload = init;