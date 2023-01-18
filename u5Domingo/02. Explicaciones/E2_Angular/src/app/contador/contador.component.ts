import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html'
})

export class AppContador {
  contador:number = 50;
  base:number = 5;

  calcular(opcion:string):void {
    if (opcion == "sumar"){
      this.contador += this.base;
    } else {
      this.contador -= this.base;
    }
  }
}
