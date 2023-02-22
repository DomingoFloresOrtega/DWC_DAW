import { Injectable } from '@angular/core';
import { Cliente, Producto } from '../interfaces/tienda.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _clientes: Cliente[] = [
    {
      nombre: 'Rodrigo',
      edad: 29,
      genero: 'H',
      carrito: [
        {producto: 'martillo', cantidad: 1},
        {producto: 'monitor', cantidad: 1}
      ]
    },
    {
      nombre: 'Maria',
      edad: 33,
      genero: 'M',
      carrito: [
        {producto: 'taladro', cantidad: 1},
        {producto: 'monitor', cantidad: 1}
      ]
    },
    {
      nombre: 'Juan',
      edad: 56,
      genero: 'H',
      carrito: [
        {producto: 'cama elastica', cantidad: 1},
        {producto: 'regadera', cantidad: 2}
      ]
    },
    {
      nombre: 'Sara',
      edad: 22,
      genero: 'H',
      carrito: [
        {producto: 'gafas de bucear', cantidad: 1},
        {producto: 'llavero', cantidad: 3}
      ]
    },
    {
      nombre: 'Azuzena',
      edad: 45,
      genero: 'H',
      carrito: [
        {producto: 'florero', cantidad: 2},
        {producto: 'auriculares', cantidad: 1}
      ]
    },
  ];


  private _productos: Producto[] = [
    {
      nombre: 'taladro',
      precio: 57,
      cantidad: 3
    },
    {
      nombre: 'monitor',
      precio: 135,
      cantidad: 2
    },
    {
      nombre: 'auriculares',
      precio: 15,
      cantidad: 12
    },
    {
      nombre: 'cama elastica',
      precio: 275,
      cantidad: 2
    },
    {
      nombre: 'llavero',
      precio: 2,
      cantidad: 34
    },
  ]

  constructor() {}

  obtenerClientes() {
    return this._clientes;
  }

  obtenerProductos() {
    return this._productos;
  }

  buscarClientes(nombre: string) {
    return this._clientes;
  }
}
