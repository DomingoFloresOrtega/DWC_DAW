import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styles: [
  ]
})
export class ListaLibrosComponent {

  libros: string[] = ['1984', 'un mundo feliz', 'guerra y paz', 'los miserables']

  libroBorrado: string = '';
  libroid!: string;

  constructor( private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.params
      .subscribe({
        next: ( params ) => {
          console.log(params);
          this.libroid = params['id'];
          console.log(this.libroid);
        }
      })
  }

}
