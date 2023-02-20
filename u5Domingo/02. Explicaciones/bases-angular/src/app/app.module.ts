import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LibrosModule } from './libros/libros.module';
import { ContadorModule } from './contador/contador.module';
import { MontesModule } from './montes/montes.module';
import { HttpTestComponent } from './http-test/http-test.component';
import { HttpClientModule } from '@angular/common/http';
import { ApprutasComponent } from './apprutas/apprutas.component';
import { RouterModule } from '@angular/router';
import { RutasModule } from './rutas.module';
import { FormreactivosComponent } from './formreactivos/formreactivos.component';

@NgModule({
  declarations: [
    AppComponent,
    HttpTestComponent,
    ApprutasComponent,
    FormreactivosComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    LibrosModule,
    ContadorModule,
    MontesModule,
    HttpClientModule,
    RutasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
