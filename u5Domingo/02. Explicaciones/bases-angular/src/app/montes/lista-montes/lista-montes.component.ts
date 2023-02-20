import { Component, Input } from '@angular/core';
import { Monte } from '../interfaces/montes.interface';
import { MontesService } from '../servicios/montes.service';

@Component({
  selector: 'app-lista-montes',
  templateUrl: './lista-montes.component.html',
  styles: [
  ]
})
export class ListaMontesComponent {

    get montes() {
      return this.montesService.montes;
    };

    constructor( private montesService: MontesService ){}
}
