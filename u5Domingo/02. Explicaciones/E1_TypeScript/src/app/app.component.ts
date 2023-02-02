import { Component } from '@angular/core';
import { UnViaje, IntObj, ElViaje, TipoRuta, Localizacion, Libro } from 'src/app/interfaces'; // usar archivos externos

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'P1_ANGULAR';
}

// CLASE MIERCOLES 11 DE ENERO

console.log('============ MIERCOLES 11 DE ENERO ============')

// Constantes
const unViaje = {
  origen: 'Malaga',
  destino: 'Córdoba',
  numDias: 3,
  mostrarInfo() {
    console.log(`Información del viaje:
                  Origen: ${this.origen}
                  Destino: ${this.destino}
                  Numero de días: ${this.numDias}`)
  }
}

console.log('Viaje', unViaje);


// Funciones operaciones
function suma(
    a: number,
    b?: number, // ? - opcional
    c: number = 3) {
        return (a + c);
}

let res = suma(3);
console.log(res);

// Ejemplo 1

const nombreObj: IntObj = {
  a: 'primer valor',
  b: 'segundo valor',
  c: 45
};

function mostrarObjeto (o: IntObj) {
  console.log(o);
  o.b
};

mostrarObjeto(nombreObj);

// Ejercicio 1

const elviaje = {
  nombre: 'Viaje fin de curso',
  origen: 'Malaga',
  destino: 'Marrakesh',
  ruta: {
      transporte: 'Coche',
      paradas: ['Algeciras', 'Tánger', 'Casablanca']
  },
  mostrarDestino() {
    return this.destino;
  },
  mostrarTransporte() {
    return this.ruta.transporte;
  }
};

const dest = elviaje.mostrarDestino();
const trans = elviaje.mostrarTransporte();
console.log(dest,trans);

// Clase viernes 13 de enero

console.log('========== VIERNES 13 DE ENERO ============')

const libro: Libro = {
  titulo: '1984',
  autor: 'George Orwell',
  anioPublicacion: 1950,
  localizacion: {
    estanteria: 5,
    habitacion: 'biblioteca01',
  }
}

// Desestructurar valores
const { titulo:mititulo, autor:miautor, localizacion } = libro;
const { estanteria } = localizacion;

console.log('El titulo es: ', mititulo);
console.log('El autor es: ', miautor);
console.log('Está en la estanteria: ', estanteria);


const array: string[] = ['enero','febrero','marzo'];

const [ m1, m2, m3 ] = array;

console.log('Valor 1: ', m1);
console.log('Valor 2: ', m2);
console.log('Valor 3: ', m3);

// ====================== CLASE LUNES 16 DE ENERO ====================

function tipoGenerico( arg ):string {
  return arg;
}

let tipoNumero = tipoGenerico(123);
let tipoString = tipoGenerico('Hola');
