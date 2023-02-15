import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaisComponent } from './app/pais/pais.component';
import { RegionComponent } from './app/region/region.component';
import { CapitalComponent } from './app/capital/capital.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DetallepaisComponent } from './app/pais/detallepais/detallepais.component';

@NgModule({
  declarations: [
    AppComponent,
    PaisComponent,
    RegionComponent,
    CapitalComponent,
    DetallepaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
