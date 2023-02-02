import { Component } from '@angular/core';
import { Monte } from '../interfaces/montes.interface.ts';

@Component({
  selector: 'app-lista-montes',
  templateUrl: './lista-montes.component.html',
  styles: [
  ]
})
export class ListaMontesComponent {

  get montes() {
    return this.montesService.montes;
    
  }
}
