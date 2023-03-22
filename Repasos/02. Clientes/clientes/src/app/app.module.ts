import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListarClientesComponent } from './listar-clientes/listar-clientes.component';
import { InsertarClientesComponent } from './insertar-clientes/insertar-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarClientesComponent,
    InsertarClientesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
