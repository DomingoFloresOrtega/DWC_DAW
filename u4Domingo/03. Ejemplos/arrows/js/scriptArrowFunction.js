var btnVentanasHandler = document.getElementById('boton');

// manejador de evento con arrow funtion (version 1)
btnVentanasHandler.addEventListener('click',() => {
    // cosas que hacer

    return;
})

// manejador de evento con arrow function (version 2)
btnVentanasHandler.addEventListener('click', () => console.log('hola'));

// manejador de evento con arrow function (version 3)
btnVentanasHandler.addEventListener('click', () => sumarValores(3,4));

// funcion global (puede ser usada antes de declarada)
sumaValores(2,4,5,6,7,5);

function sumaValores(val1, val2){

} // sin punto y coma

// sumaValores asiganda a variable como funcion anonima (puede ser usada antes de declarada)
sumaValores(2,3); // genera error
var sumaValores = function(val1, val2){

};