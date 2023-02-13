import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, Gifsresponse } from '../busqueda/busqueda/busqueda.interfaces';

@Injectable({
  providedIn: 'root'
})
export class Gifsservice {

  constructor( private http: HttpClient ) { }

  resultados:Gif[] = [];
  historial:String[] = [];

  buscarGifs( txt: String ) {

    // if (this.historial.includes(txt)) {
    //   this.historial.push(txt);
    // }

    this.http.get<Gifsresponse>(`https://api.giphy.com/v1/gifs/search?api_key=yGhLOEEGIflLvexLsJEHF2xHpNRqIh8j&q=${txt}&limit=10`)
    .subscribe({
      next:( resp:Gifsresponse ) => {
        this.resultados = resp.data;
        console.log(resp); //<-- mostramos la respuesta
      }
    })

    return this.resultados;
  }
}
