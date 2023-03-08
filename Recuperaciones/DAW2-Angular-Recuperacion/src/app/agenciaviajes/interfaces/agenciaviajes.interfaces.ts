export interface Viaje {
  id: number;
  destino: string;
  numDias: number;
  plazas: number;
  viajeros: number[];
};

export interface Viajero {
  id: number;
  nombre: string;
  edad: number;
}
