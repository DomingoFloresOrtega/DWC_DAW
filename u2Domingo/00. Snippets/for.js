for (var index = 0; index < 5; index++) {
    console.log('Indice: ', index);
}

var arrDatos = [ 23, 12, 27, 34, 38 ];

var variable1;
var variable2, 
    variable3, 
    variable4;

var edadMedia = 0;

for (var i = 0, numDatos = arrDatos.length; i < numDatos; i++) {
    edadMedia += arrDatos[i];
}

var tmpMedia = Math.round( edadMedia / arrDatos.length );

console.log('Edad Media: ', tmpMedia);