import { Component } from '@angular/core';
import { Gifsservice } from '../../gifs/gifsservice.module.ts.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor( private gifService: Gifsservice ) {}

  historial: string[] = [];



  // listarHistorial(){

  //   this.gifService.historial = JSON.parse(localStorage.getItem('historial')!);

  //   localStorage.setItem('historial', JSON.stringify(this.gifService.historial));

  //   return this.gifService.historial;
  // }


}
