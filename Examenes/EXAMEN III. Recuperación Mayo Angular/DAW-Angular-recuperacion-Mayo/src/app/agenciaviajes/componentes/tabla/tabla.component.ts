import { Component, Input } from '@angular/core';
import { Viaje } from '../../interfaces/agenciaviajes.interfaces';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styles: [
  ]
})
export class TablaComponent {

  @Input() viajes: Viaje[] = [];

}
