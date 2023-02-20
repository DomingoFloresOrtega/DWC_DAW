import { Component } from '@angular/core';
import { Gifsservice } from '../../gifs/gifsservice.module.ts.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor( private gifService: Gifsservice ) {}

  get historial() {
    this.gifService.historial = JSON.parse(localStorage.getItem('historial')!); // obtengo localStorage
    return this.gifService.historial;
  }

  buscar(txt: string) { // cuidado con string y String
    this.gifService.buscarGifs(txt);
  }
}
