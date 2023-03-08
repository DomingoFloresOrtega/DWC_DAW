import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    BarraLateralComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BarraLateralComponent
  ]
})
export class CompartidoModule { }
