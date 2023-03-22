import { Injectable } from '@angular/core';
import { Cliente } from './cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private _clientes: Cliente[] = [
    {
      nombre: 'Maroma',
      cif: 'A3333',
      direccion: 'C/ San San',
      grupo: {
        id: 1,
        nombre: ''
      }
    }
  ];

  get clientes(): Cliente[] {
    return [...this._clientes]
  }

  constructor() {}

  agregarCliente( cliente: Cliente ) {
    this._clientes.push(cliente);
  }
}
