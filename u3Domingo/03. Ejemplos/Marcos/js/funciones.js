function cambioColor() {
  campoColor = parent.marco1.document.form1.color;
  if (campoColor.selectedIndex == 0) {
    colorin = "green";
  } else {
    colorin = "blue";
  }
  campoFrame = parent.marco1.document.form1.marcos;
  if (campoFrame.selectedIndex == 0) {
    window.parent.marco1.document.bgColor = colorin;
  } else {
    window.parent.marco2.document.bgColor = colorin;
  }
}
