import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gif, Gifsresponse } from './busqueda.interfaces';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  constructor( private http: HttpClient ){}

  resultados:Gif[] = [];

  buscar( txt: HTMLInputElement ) {

    if (!txt.value) {
      return;
    }

    // Compruebo que obtiene texto
    console.log(txt.value);

    // Limpio texto
    txt.value = '';

    // Obtengo datos
    this.http.get<Gifsresponse>('https://api.giphy.com/v1/gifs/search?api_key=yGhLOEEGIflLvexLsJEHF2xHpNRqIh8j&q=sorpresa&limit=10')
    .subscribe({
      next:( resp:Gifsresponse ) => {
        this.resultados = resp.data;
        console.log(resp); //<-- mostramos la respuesta
      }
    })
  }

  // @ViewChild('txtquery') txtquery!:ElementRef<HTMLInputElement>; <-- otro metodo
}
