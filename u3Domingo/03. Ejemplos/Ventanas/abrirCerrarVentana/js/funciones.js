function abrirCerrarVentana(){
    myWindow2=window.open('','Ventana','width=300,height=200')
	myWindow2.document.write('<html>')
	myWindow2.document.write('<head>')
	myWindow2.document.write('<title>Ventana de Prueba</title>')
	myWindow2.document.write('</head>')
	myWindow2.document.write('<body>')
	myWindow2.document.writeln('Se han utilizado las propiedades: ')
	myWindow2.document.write('<li>height=200</li><li>width=300</li>')
	myWindow2.document.write('<input type=button value=Cerrar onClick=window.close()>');
	myWindow2.document.write('</body>')
	myWindow2.document.write('</html>')
}