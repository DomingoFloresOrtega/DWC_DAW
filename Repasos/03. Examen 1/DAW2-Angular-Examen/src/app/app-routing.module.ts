import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './tienda/page/dashboard/dashboard.component';
import { RegClienteComponent } from './tienda/page/reg-cliente/reg-cliente.component';
import { RegProductoComponent } from './tienda/page/reg-producto/reg-producto.component';
import { DetClienteComponent } from './tienda/page/det-cliente/det-cliente.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    },
    {
    path: 'nuevocliente',
    component: RegClienteComponent,
    },
    {
    path: 'nuevoproducto',
    component: RegProductoComponent,
    },
    {
    path: 'cliente/:id',
    component: DetClienteComponent
    },
    {
    path: '**',
    redirectTo: '/dashboard'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
