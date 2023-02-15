import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppContador } from './contador/contador.component';
import { ListaLibrosComponent } from './libros/lista-libros/lista-libros.component';
import { MontesModule } from './montes/montes.module';
import { ListaMontesComponent } from './montes/lista-montes/lista-montes.component';
import { RutasComponent } from './rutas/rutas.component';
import { Router, RouterModule } from '@angular/router';
import { FormreactivosComponent } from './formreactivos/formreactivos.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppContador,
    ListaLibrosComponent,
    RutasComponent,
    FormreactivosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
