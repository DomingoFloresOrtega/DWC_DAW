import { Injectable } from "@angular/core";
import { Monte } from "../interfaces/montes.interface";

@Injectable()
export class MontesService {

  private _montes: Monte[] = [
    {
      nombre: 'Maroma',
      altitud: 2064
    },
    {
      nombre: 'Lucero',
      altitud: 1778
    },
    {
      nombre: 'Navachica',
      altitud: 1834
    }
  ];

  get montes():  Monte[] {
    return [...this._montes]
  }

  constructor(private http: HttpClient) {
    console.log('Servicio activo')
  }

  agregarMonte( monte: Monte ) {
    this._montes.push(monte);
  }
}
