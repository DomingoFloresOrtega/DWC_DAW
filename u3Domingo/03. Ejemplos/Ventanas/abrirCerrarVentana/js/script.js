boton = document.getElementById('boton');

function funcionBiVentana(e){
    console.log('Click');

    abrirCerrarVentana();
}

boton.addEventListener('click',funcionBiVentana);