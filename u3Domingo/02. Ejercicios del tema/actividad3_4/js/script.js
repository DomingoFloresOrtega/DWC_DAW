// Funcion para cambiar color de la pantalla seleccionada
function cambiarColorHandler(e) {
  campoColor = parent.Marco1.document.form1.color;
  if (campoColor.selectedIndex == 0) {
    colorin = "green";
  } else {
    colorin = "blue";
  }
  campoFrame = parent.Marco1.document.form1.marcos;
  if (campoFrame.selectedIndex == 0) {
    window.parent.Marco1.document.bgColor = colorin;
  } else {
    window.parent.Marco2.document.bgColor = colorin;
  }
}

// funcion inicializadora
function init(){
    var boton = document.getElementById('boton');

    boton.addEventListener('click',cambiarColorHandler);
}

window.onload = init;
