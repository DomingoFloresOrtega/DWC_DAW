import { Component } from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-buscar-viaje',
  templateUrl: './buscar-viaje.component.html',
  styles: [
  ]
})
export class BuscarViajeComponent {

  dias:number = 1;

  constructor(private service: DatosService) {}

  viajesBusqueda(dias: number) {
    return this.service.getViajebyDias(dias);
  }
}
