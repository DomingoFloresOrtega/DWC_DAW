/*
    ===== Código de TypeScript =====
*/

console.log('Hola');

let coche:string | number | boolean = 888; // Indicas el tipo de variable :tipo
let n: number = 343;

function suma(a: number,b: number):number {
    return a + b;
}

console.log(suma(coche,n));