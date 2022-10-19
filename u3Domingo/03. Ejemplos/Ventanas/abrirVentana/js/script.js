boton1 = document.getElementById('boton1');
boton2 = document.getElementById('boton2');

function funcionAbrirVentana(e){
    console.log('Click');

    abrirVentana();
}

function funcionBiVentana(e){
    console.log('Click');

    abrirCerrarVentana();
}

boton1.addEventListener('click',funcionAbrirVentana);
boton2.addEventListener('click',funcionAbrirVentana);