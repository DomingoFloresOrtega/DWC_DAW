export interface UnViaje {
  origen: string;
  destino: string;
  numDias: number;
  paradas?: string[],
  mostrarInfo: () => void;
}

export interface IntObj {
  a: string,
  b: string,
  c: number;
}

export interface ElViaje {
  nombre: string,
  origen: string,
  destino: string,
  ruta: TipoRuta,
  mostrarDestino: () => string,
  mostrarTransporte: () => string
}

export interface TipoRuta {
  transporte: string,
  paradas: string[];
}

export interface Localizacion {
  estanteria: number,
  habitacion: string;
};

export interface Libro {
  titulo: String,
  autor: string,
  anioPublicacion: number,
  localizacion: Localizacion;
}
