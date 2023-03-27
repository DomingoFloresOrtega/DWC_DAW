import { Injectable } from '@angular/core';
import { Cliente, Empresa } from './cliente.interface';

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

  private _empresas: Empresa[] = [

  ];

  get clientes(): Cliente[] {
    return [...this._clientes]
  }

  get empresasonline(): Empresa[] {
    return [...this._empresas]
  }

  constructor() {this._clientes = JSON.parse(localStorage.getItem('clientes')!) || this._clientes} // get siempre en constructor

  agregarCliente( cliente: Cliente ) {
    this._clientes.push(cliente);
    localStorage.setItem('clientes', JSON.stringify(this.clientes)) // set en punto especifico | al agregar cliente
  }
}
