var fecha_actual = new Date();
var fecha_maya = new Date(2012, 11, 21); 
alert("La fecha actual es: " + fecha_actual);
alert("El calendario Maya termina el: " + fecha_maya);
var tiempo_restante = fecha_maya-fecha_actual;
alert("Quedan " + tiempo_restante + " milisegundos para que termine el calendario Maya");