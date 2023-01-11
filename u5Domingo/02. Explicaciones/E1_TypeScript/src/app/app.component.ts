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
function suma(a: number, b: number):number {
  return (a + b);
}

let res = suma(3, 45);
console.log(res);
