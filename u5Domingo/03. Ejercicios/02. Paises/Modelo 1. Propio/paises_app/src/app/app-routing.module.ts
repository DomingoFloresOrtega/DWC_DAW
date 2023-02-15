import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisComponent } from './app/pais/pais.component';
import { CapitalComponent } from './app/capital/capital.component';
import { RegionComponent } from './app/region/region.component';
import { DetallepaisComponent } from './app/pais/detallepais/detallepais.component';

const routes: Routes = [
  { path: 'paises', component: PaisComponent},
  { path: 'pais/:id', component: DetallepaisComponent},
  { path: 'capital', component: CapitalComponent},
  { path: 'region', component: RegionComponent },
  { path: '**', redirectTo: 'pais'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
