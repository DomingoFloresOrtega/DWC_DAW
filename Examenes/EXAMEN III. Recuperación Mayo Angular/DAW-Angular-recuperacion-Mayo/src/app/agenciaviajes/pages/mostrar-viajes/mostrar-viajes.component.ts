import { Component } from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-mostrar-viajes',
  templateUrl: './mostrar-viajes.component.html',
  styles: [
  ]
})
export class MostrarViajesComponent {

  constructor(private service: DatosService){}

  get viajes() {
    return this.service.viajes;
  }

}
