import { Component, Output, EventEmitter } from '@angular/core';
import { Monte } from '../interfaces/montes.interface';
import { MontesService } from '../servicios/montes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  nuevo: Monte = {
    nombre: '',
    altura: 0
  };

  constructor( private montesService: MontesService ){};

  agregar() {
    if ( !this.nuevo.nombre.trim() || this.nuevo.altura === 0 ) {
      return;
    }

    this.montesService.agregarMonte( this.nuevo );

    this.nuevo = {
      nombre: '',
      altura: 0
    };
  }

}
