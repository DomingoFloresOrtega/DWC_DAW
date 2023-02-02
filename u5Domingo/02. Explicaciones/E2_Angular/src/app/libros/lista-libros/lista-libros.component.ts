import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styles: [
  ]
})
export class ListaLibrosComponent {

  libros: string[] = ['1984', 'un mundo feliz', 'guerra y paz', 'los miserables']

}
