import { Component, ElementRef, ViewChild } from '@angular/core';
import { Gif, Gifsresponse } from './busqueda.interfaces';
import { Gifsservice } from 'src/app/gifs/gifsservice.module.ts.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  constructor( private gifService: Gifsservice ){}

  get resultados() {
    return this.gifService.resultados; // obtengo resultados del servicio
  }

  buscar( txt: HTMLInputElement ) {

    if (!txt.value) {
      return;
    }

    // Compruebo que obtiene texto
    console.log(txt.value);

    // Obtengo datos
    this.gifService.buscarGifs(txt.value); // mando resultados al servicio

    // Limpio texto
    txt.value = '';
  }

  // @ViewChild('txtquery') txtquery!:ElementRef<HTMLInputElement>; <-- otro metodo
}
