import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BuscarViajeComponent } from './pages/buscar-viaje/buscar-viaje.component';
import { MostrarViajesComponent } from './pages/mostrar-viajes/mostrar-viajes.component';
import { NuevoViajeroComponent } from './pages/nuevo-viajero/nuevo-viajero.component';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { ReservarComponent } from './pages/reservar/reservar.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';





@NgModule({
  declarations: [
    BuscarViajeComponent,
    MostrarViajesComponent,
    NuevoViajeroComponent,
    TablaComponent,
    ReservarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    BuscarViajeComponent,
    MostrarViajesComponent,
    NuevoViajeroComponent
  ]
})
export class AgenciaviajesModule { }
