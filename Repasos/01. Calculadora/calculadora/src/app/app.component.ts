import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';

  valor: string;
  n1: number;
  n2: number;
  resultado: number;

  constructor(){
    this.valor = "+";
    this.n1 = 2;
    this.n2 = 0;
    this.resultado = 0;
  }

  sumar() {
    this.resultado = this.n1 + this.n2;
  }

  restar() {
    this.resultado = this.n1 - this.n2;
  }

  multiplicar() {
    this.resultado = this.n1 * this.n2;
  }

  dividir() {
    this.resultado = this.n1 / this.n2;
  }

  get resultados() {
    return this.resultado;
  }
}
