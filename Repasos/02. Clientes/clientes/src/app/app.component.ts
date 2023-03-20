import { Component } from '@angular/core';
import { Cliente } from './cliente.interface';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientes';

  get clientes() {
    return this.clientesService.clientes;
  };

  nuevo: Cliente = {
    nombre: '',
    cif: '',
    direccion: '',
    grupo: 0
  }

  constructor( private clientesService: ServiceService){}

  agregar() {

    this.clientesService.agregarCliente( this.nuevo );

    this.nuevo = {
      nombre: '',
      cif: '',
      direccion: '',
      grupo: 0
    };
  }

}
