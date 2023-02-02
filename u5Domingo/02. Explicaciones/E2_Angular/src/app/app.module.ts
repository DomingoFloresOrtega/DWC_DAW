import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppContador } from './contador/contador.component';
import { ListaLibrosComponent } from './libros/lista-libros/lista-libros.component';
import { MontesModule } from './montes/montes.module';
import { ListadoMontesComponent } from './listado-montes/listado-montes.component';

@NgModule({
  declarations: [
    AppComponent,
    AppContador,
    ListaLibrosComponent,
    ListadoMontesComponent
  ],
  imports: [
    BrowserModule,
    MontesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
