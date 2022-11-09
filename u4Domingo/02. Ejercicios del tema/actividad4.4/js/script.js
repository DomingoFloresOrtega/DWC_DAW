'use strict'

function Coche(marca,modelo,anyo){
    this.marca = marca;
    this.modelo = modelo;
    this.anyo = anyo;
}

function imprimeCoche(){
    var coches = new Array(4);
    var boton = document.getElementById('boton');
    coches[0] = new Coche("Ferrari","Scaglietti","2010");
    coches[1] = new Coche("BMW","Z4","2010");
    coches[2] = new Coche("Seat","Toledo","1999");
    coches[3] = new Coche("Fiat","500","1995");

    document.write('<table>');
    document.write('<tr>' +
                        '<th>Marca</th>' +
                        '<th>Modelo</th>' +
                        '<th>Año</th>' +
                        '<th></th>' + 
                    '</tr>');

    for (var i = 0; i < coches.length; i++){
        document.write('<tr>' +
                            '<td>' + coches[i].marca + '</td>' +
                            '<td>' + coches[i].modelo + '</td>' +
                            '<td>' + coches[i].anyo + '</td>' +
                            '<td><button id="boton">Eliminar</button></td>' +
                        '</tr>');
    }

    document.write('</table>');

    // eliminar coche
    borrarCoche
    
}

function borrarCoche(coche){
    
}

function init(){
    imprimeCoche();
}

window.onload = init;