import { Component } from '@angular/core';

import { Viaje } from '../../interfaces/agenciaviajes.interfaces';
import { DatosService } from '../../services/datos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styles: [
  ]
})
export class ReservarComponent {

  // Propiedades
  viaje!: Viaje;
  viajeroID!: number;

  // Getters para obtener datos y propiedades booleanas del servicio
  get viajeros() {
    return this.datos.viajeros;
  };

  viajerosViaje(idviaje: number) {
    return this.datos.getViajerosViaje(idviaje)
  }

  get viajeroExiste() {
    return this.datos.viajeroExiste;
  };

  get viajeroNoExisteBD() {
    return this.datos.viajeroNoExisteBD;
  }

  get noPlazas() {
    return this.datos.noPlazas;
  };

  get reservado() {
    return this.datos.reservado;
  };


  constructor( private datos: DatosService, private activatedRoute: ActivatedRoute ) {
    // Se reinicializan a false los flags de las validadiones para Reservar viaje.
    this.datos.noPlazas = false;
    this.datos.reservado = false;
    this.datos.viajeroNoExisteBD = false;
    this.datos.viajeroExiste = false;
  }

  // Método que se llama al hacer click en el botón Reservar
  reservar() {
    if (!this.viajeroID) {
      return;
    };
    // Se reinicializan a false los flags de las validadiones para Reservar viaje.
    this.datos.noPlazas = false;
    this.datos.reservado = false;
    this.datos.viajeroExiste = false;
    this.datos.viajeroNoExisteBD = false;

    // Llamada al método del servicio para reservar el viaje.
    this.datos.reservarViaje(this.viaje.id,this.viajeroID);
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe({
        next: ( params ) => {
          this.viaje = this.datos.getViajebyId(params['id']);
        }
      })
    }
}
