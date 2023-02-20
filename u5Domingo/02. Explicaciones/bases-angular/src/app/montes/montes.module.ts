import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { ListaMontesComponent } from './lista-montes/lista-montes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { MontesService } from './servicios/montes.service';



@NgModule({
  declarations: [
    MainPageComponent,
    ListaMontesComponent,
    AgregarComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    MontesService
  ]
})
export class MontesModule { }
