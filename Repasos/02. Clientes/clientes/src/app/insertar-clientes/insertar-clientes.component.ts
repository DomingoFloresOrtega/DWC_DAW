import { Component } from '@angular/core';
import { Cliente } from '../cliente.interface';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-insertar-clientes',
  templateUrl: './insertar-clientes.component.html',
  styleUrls: ['./insertar-clientes.component.css']
})
export class InsertarClientesComponent {

  constructor( private clientesService: ServiceService){}

  nuevo: Cliente = {
    nombre: '',
    cif: '',
    direccion: '',
    grupo: {
      id: 1,
      nombre: ''
    }
  }

  agregar() {

    this.clientesService.agregarCliente( this.nuevo );

    this.nuevo = {
      nombre: '',
      cif: '',
      direccion: '',
      grupo: {
        id: 1,
        nombre: ''
      }
    };
  }
}
