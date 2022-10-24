
var myWindow = [];

// funcion manejadora del evento click
function btnVentanasHandler(evt){
    console.log('Click en boton');

    for(i=0;i<5;i++){

        var htmlCode = `
        <html>
            <head>
                <title>Ventana ${i} </title>
            </head>

            <body>
                <p>Ventana ${i} </p>
                <input type=button value=Cerrar id="btn_${i}" />
            </body>
        </html>
        `;

        // la ventana
        myWindow[i] = window.open('','',`width=200,height=200,top=${i*150},left=${i*90}`);
        myWindow[i].document.write(htmlCode);
        
        // manejador de evento del boton de la ventana llamado btn_X
        var btn = myWindow[i].document.getElementById(`btn_${i}`);
        btn.addEventListener('click',function(evt, i){
            myWindow[i].close();
        })
	}
}

function init(){
    // console.log('Inicializando script');

    // referencia al elemento del DOM (btnVentanas)
    var btnVentanas = document.getElementById('btnVentanas');

    // asociar el manejador onclick sobre btnVentanas
    btnVentanas.addEventListener('click',btnVentanasHandler);
}

window.onload = init;

/**
 * for(i=0;i<5;i++){
		myWindow=window.open('','','width=200,height=200');
		myWindow.document.write('<html>');
		myWindow.document.write('<head>');
		myWindow.document.write('<title>Ventana '+i+'</title>');
		myWindow.document.write('</head>');
		myWindow.document.write('<body>');
		myWindow.document.write('Ventana ' + i);
		myWindow.document.write('<input type=button value=Cerrar onClick=window.close()>');
		myWindow.document.write('</body>');
		myWindow.document.write('</html>');
	}
 */