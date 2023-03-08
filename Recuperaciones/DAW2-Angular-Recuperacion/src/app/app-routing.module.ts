import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BuscarViajeComponent } from './agenciaviajes/pages/buscar-viaje/buscar-viaje.component';
import { MostrarViajesComponent } from './agenciaviajes/pages/mostrar-viajes/mostrar-viajes.component';
import { NuevoViajeroComponent } from './agenciaviajes/pages/nuevo-viajero/nuevo-viajero.component';
import { ReservarComponent } from './agenciaviajes/pages/reservar/reservar.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full'
  },
  {
    path: 'buscar',
    component: BuscarViajeComponent,
  },
  {
    path: 'viajes',
    component: MostrarViajesComponent,
  },
  {
    path: 'nuevoviajero',
    component: NuevoViajeroComponent,
  },
  {
    path: 'reservar/:id',
    component: ReservarComponent,
  },
  {
    path: '**',
    redirectTo: '/buscar'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
