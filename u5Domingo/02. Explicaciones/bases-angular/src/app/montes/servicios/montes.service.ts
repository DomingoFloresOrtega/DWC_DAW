import { Injectable } from '@angular/core';

import { Monte } from '../interfaces/montes.interface';


@Injectable()
export class MontesService {

  private _montes: Monte[] = [
    {
      nombre: 'Maroma',
      altura: 2064
    },
    {
      nombre: 'Lucero',
      altura: 1778
    },
    {
      nombre: 'Navachica',
      altura: 1834
    }
  ];

  get montes(): Monte[] {
    return [...this._montes]
  }

  constructor() {
    console.log('Servicio inicializado');
  }

  agregarMonte( monte: Monte ) {
    this._montes.push(monte);
  }
}
