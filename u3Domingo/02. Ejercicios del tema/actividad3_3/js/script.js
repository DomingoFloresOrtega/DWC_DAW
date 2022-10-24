var formulario =
  '<form name="cambiacolor">' +
  "<b>Selecciona un color para el fondo de página:</b><br>" +
  '<select name="color">' +
  '<option value="red">Rojo</option>' +
  '<option value="blue">Azul</option>' +
  '<option value="yellow">Amarillo</option>' +
  '<option value="green">Verde</option>' +
  '<option value="orange">Naranja</option>' +
  '<option value="purple">Purpura</option>' +
  "</select>" +
  '<input type="button" value="Modifica el color" onclick="document.bgColor = document.cambiacolor.color.value"' +
  "</form>";

document.write(formulario);
