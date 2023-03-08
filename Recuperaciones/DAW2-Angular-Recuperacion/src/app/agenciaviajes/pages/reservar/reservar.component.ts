import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Viaje } from '../../interfaces/agenciaviajes.interfaces';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styles: [
  ]
})
export class ReservarComponent implements OnInit {

  // Propiedades
  viaje!: Viaje;
  viajeroID!: number;
  viajeid!: number;

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe({
        next: ( params ) => {
        this.viajeid=params['id'];
        }
      })
  }

  // Getters para obtener datos y propiedades booleanas del servicio
  get viajesID(){
    return this.datos.getViajebyId(this.viajeid);
  }

  get viajeros() {
    return this.datos.viajeros;
  };

  get viajeroExiste() {
    return this.datos.viajeroExiste;
  };

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

    // Llamada al método del servicio para reservar el viaje.
    this.datos.reservarViaje(this.viaje.id,this.viajeroID);
  }
}
