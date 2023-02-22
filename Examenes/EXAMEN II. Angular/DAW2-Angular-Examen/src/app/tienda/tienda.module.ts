import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { RegClienteComponent } from './page/reg-cliente/reg-cliente.component';
import { RegProductoComponent } from './page/reg-producto/reg-producto.component';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormsModule } from '@angular/forms';
import { DetalleClienteComponent } from './page/detalle-cliente/detalle-cliente.component';



@NgModule({
  declarations: [
    DashboardComponent,
    RegClienteComponent,
    RegProductoComponent,
    DetalleClienteComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    DashboardComponent
  ]

})
export class TiendaModule { }
