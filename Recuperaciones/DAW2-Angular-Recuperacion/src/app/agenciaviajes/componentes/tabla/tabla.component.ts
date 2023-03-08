import { Component, Input } from '@angular/core';
import { Viaje, Viajero } from '../../interfaces/agenciaviajes.interfaces';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styles: [
  ]
})
export class TablaComponent {
  constructor(private datos: DatosService) {}

  viaje: Viaje[] = this.datos.viajes;
  viajeros: Viajero[] = this.datos.viajeros;

  //localStorage.setItem('historial', JSON.stringify(this.historial)); NO FUNCIONA

}
