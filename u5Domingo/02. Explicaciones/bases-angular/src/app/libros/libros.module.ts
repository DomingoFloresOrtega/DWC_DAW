import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ListaLibrosComponent } from './lista-libros/lista-libros.component';



@NgModule({
  declarations: [
    ListaLibrosComponent
  ],
  exports: [
    ListaLibrosComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LibrosModule {}
