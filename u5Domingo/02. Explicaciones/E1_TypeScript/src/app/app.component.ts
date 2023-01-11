import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'P1_ANGULAR';
}

interface UnViaje {
  origen: string;
  destino: string;
  numDias: number;
  paradas?: string[],
  mostrarInfo: () => void;
}

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

interface IntObj {
  a: string,
  b: string,
  c: number;
}

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

interface ElViaje {
  nombre: string,
  origen: string,
  destino: string,
  ruta: TipoRuta,
  mostrarDestino: () => string,
  mostrarTransporte: () => string
}

interface TipoRuta {
  transporte: string,
  paradas: string[];
}

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
