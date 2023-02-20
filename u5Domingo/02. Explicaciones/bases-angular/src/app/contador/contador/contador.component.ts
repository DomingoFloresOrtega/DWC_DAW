import { Component } from '@angular/core';


@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html'
})
export class ContadorComponent {


  contador:number = 0;
  base:number = 5;

  constructor() {
    this.contador = JSON.parse(localStorage.getItem('contador')!) || 0;
  }

  cambiarContador( valor:number ):void {
    this.contador += valor;
    localStorage.setItem('contador', JSON.stringify(this.contador));
  }

}
