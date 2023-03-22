import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent {

  // obtengo clientes
  get clientes() {
    return this.clientesService.clientes;
  };

  constructor( private clientesService: ServiceService){}
}
