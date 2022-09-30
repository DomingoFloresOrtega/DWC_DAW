var valores = [true, 5, false, "hola", "adios", 2];

var resultadoV = valores[0] || valores[2];
var resultadoF = valores[0] && valores[2];

alert(valores[0] + ' || ' + valores[2] + ' = ' + resultadoV + '\n' +valores[0] + ' && ' + valores[2] + ' = ' + resultadoF);