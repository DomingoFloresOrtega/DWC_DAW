import { Injectable } from '@angular/core';
import { Viaje, Viajero } from '../interfaces/agenciaviajes.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor() {}

  // Datos de Viajes
  private _viajes: Viaje[] = [
    {id: 1, destino: 'marrakesh', numDias: 5, plazas: 10, viajeros: [1,2,3,6]},
    {id: 2, destino: 'paris', numDias: 3, plazas: 8, viajeros: [1,6]},
    {id: 3, destino: 'roma', numDias: 5, plazas: 6, viajeros: [4,5]},
    {id: 4, destino: 'nueva zelanda', numDias: 21, plazas: 6, viajeros: [2]},
    {id: 5, destino: 'vietnam', numDias: 16, plazas: 8, viajeros: []},
    {id: 6, destino: 'cuenca', numDias: 4, plazas: 15, viajeros: [3,5]},
    {id: 7, destino: 'soria', numDias: 3, plazas: 6, viajeros: [4]},
    {id: 8, destino: 'islandia', numDias: 10, plazas: 4, viajeros: [4,5,6]},
    {id: 9, destino: 'egipto', numDias: 8, plazas: 7, viajeros: [1,2,3]},
    {id: 10, destino: 'nueva york', numDias: 12, plazas: 6, viajeros: []},
  ];

  // Datos de Viajeros
  private _viajeros: Viajero[] = [
    {id: 1, nombre: 'juan', edad: 23},
    {id: 2, nombre: 'maria', edad: 26},
    {id: 3, nombre: 'lucrecia', edad: 59},
    {id: 4, nombre: 'fatima', edad: 44},
    {id: 5, nombre: 'jose', edad: 50},
    {id: 6, nombre: 'aitor', edad: 18},
  ];

  // Propiedades booleanas para hacer las validaciones en la Reserva del viaje
  viajeroExiste: boolean = false;
  viajeroNoExisteBD: boolean = false;
  noPlazas: boolean = false;
  reservado: boolean = false;

  // Getters que llaman los componentes para acceder a los datos
  get viajes() {
    return [...this._viajes];
  };

  get viajeros() {
    return [...this._viajeros];
  }

  // Agregar viajeros
  agregarViajero(viajero: Viajero) {
    this._viajeros.push(viajero);
  }

  // Método para obtener un viaje a partir del ID
  getViajebyId(id: number): Viaje {
    let viajeid!: Viaje;
    for (let viaje of this._viajes) {
      if (viaje.id == id) {
        viajeid = viaje;
      };
    };
    return viajeid;
  };

  // Metodo para obtener viajes a partir del numero de dias minimo
  getViajebyDias(dias: number) {
    let viajesDias: Viaje[] = [];

    for (let i = 0; i < this.viajes.length; i++) {
      const element = this.viajes[i].numDias;

      if (element >= dias) {
        viajesDias.push(this.viajes[i]);
      }
    }

    return viajesDias;
  }

  getViajerobyId(id: number): Viajero {
    let viajeroid!: Viajero;
    for (let viajero of this._viajeros) {
      if (viajero.id == id) {
        viajeroid = viajero;
      }
    }

    return viajeroid;
  }

  getViajerosViaje(idviaje: number) {
    let tmpViajeros: Viajero[] = [];
    let viaje = this.getViajebyId(idviaje);

    for (let i = 0; i < viaje.viajeros.length; i++) {
      const idviajero = viaje.viajeros[i];
      for (let j = 0; j < this.viajeros.length; j++) {
        const element = this.viajeros[j].id;

        if (element == idviajero) {
          console.log(this.viajeros[j]);
          tmpViajeros.push(this.viajeros[j]);
        }
      }
    }

    return tmpViajeros;
  }

  // Método que recibe el ID del viaje y el ID del viajero y reserva el
  // viaje si hay plazas libres, si el viajero no tiene ese viaje ya reservado...
  reservarViaje(viajeid:number, viajeroid:number) {
    let viaje = this.getViajebyId(viajeid);
    let viajeroComprobar = this.getViajerobyId(viajeroid);

      if ((viaje.plazas - viaje.viajeros.length)>0) {

        if (this._viajeros.includes(viajeroComprobar)) {
          if (viaje.viajeros.includes(viajeroid)) {
            this.viajeroExiste = true;
          } else {
            viaje.viajeros.push(viajeroid);
            this.reservado = true;
            }
        } else {
          this.viajeroNoExisteBD = true;
        }

      } else {
          this.noPlazas = true;
      }

  }
}
