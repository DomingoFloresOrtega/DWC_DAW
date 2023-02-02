import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { ListaMontesComponent } from './lista-montes/lista-montes.component';
import { MontesService } from './servicios/montes.service';
import { AgregarComponent } from './agregar/agregar.component';



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
