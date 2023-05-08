export interface Producto {
  nombre: string,
  precio: number,
  cantidad: number
}

export interface Cliente {
  id: number;
  nombre: string,
  edad: number,
  genero: string,
  carrito: Carrito[]
}

export interface Carrito {
  producto: string,
  cantidad: number
}
