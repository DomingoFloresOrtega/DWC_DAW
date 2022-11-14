'use strict'

// Creo funcion para calculo de potencia
function opcionPotencia(datoCalcular){
    // hago calculo
    var potencia = Math.pow(datoCalcular,3);

    // imprimo resultado
    document.getElementById('mensajePantalla').innerHTML = 'La potencia de ' + datoCalcular + ' elevado a 3 es: ' + potencia;
}

// creo funcion para calculo de raiz cuadrada
function opcionRaiz(datoCalcular){
    // hago calculo
    var raiz = Math.pow(datoCalcular,2);

    // imprimo resultado
    document.getElementById('mensajePantalla').innerHTML = 'La raiz de ' + datoCalcular + ' elevado a 3 es: ' + raiz;
}

// creo funcion para redondeo de numeros
function opcionRedondeo(datoCalcular){
    // hago calculo y agrego a array
    var calculos = [Math.round(datoCalcular),Math.ceil(datoCalcular),Math.floor(datoCalcular)];

    // imprimo resultado
    document.getElementById('mensajePantalla').innerHTML = 'El valor mas proximo, mas alto y mas bajo del numero es: ' + calculos;
}

// creo funcion para calculo trigonometrico
function opcionTrigonometria(datoCalcular){
    // compruebo
    if (datoCalcular >= 0 && datoCalcular <= 360){
        // hago calculo y agrego a array
        var valores = [Math.sin(datoCalcular),Math.cos(datoCalcular),Math.tan(datoCalcular)];
    } else {
        alert('Valores no comprendidos entre 0 y 360');
    }

    // imprimo resultado
    document.getElementById('mensajePantalla').innerHTML = 'Los calculos de los senos, cosenos y tangentes es: ' + valores;
}

// funcion seleccionadora de opcion
function seleccionarOp(){
    // obtengo valores de DOM
    var opcion = document.getElementById('selectedIndex');
    var valor = document.getElementById('numeroUsuario');

    
    switch(opcion.value){
        case '1':
            opcionPotencia(valor.value);
        break;

        case '2':
            opcionRaiz(valor.value);
        break;

        case '3':
            opcionRedondeo(valor.value);
        break;

        case '4':
            opcionTrigonometria(valor.value);
        break;
    }
}

// funcion inicializadora
function init(){
    var btnOperacionMatematica = document.getElementById('btnOperacionMatematica');

    // agrego evento al boton
    btnOperacionMatematica.addEventListener('click',seleccionarOp);
}

// inicializacion
window.onload = init;