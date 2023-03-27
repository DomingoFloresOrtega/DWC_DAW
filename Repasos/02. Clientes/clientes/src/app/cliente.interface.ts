export interface Cliente {
  nombre: string;
  cif: string;
  direccion: string;
  grupo: Grupo;
};

export interface Grupo {
  id: number;
  nombre: string;
}

export interface Empresa {
  id: string
  denominacion: string
  tipoDenominacion:	string
  denominacionBusqueda: string
  provincia: string
}
