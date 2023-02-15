import { Component } from '@angular/core';
import { CountriesService } from '../servicio/countries.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css']
})
export class CapitalComponent {
  constructor(private countriesService: CountriesService) {}

  get resultados(){
    return this.countriesService.resultadosPais;
  };

  get errores() {
    return this.countriesService.errores;
  }

  buscar( txt: HTMLInputElement ) {

    if (!txt.value) {
      return;
    }

    // Compruebo que obtiene texto
    console.log(txt.value);

    // Obtengo datos
    this.countriesService.buscarPaisesPorCapital(txt.value);

    // Limpio texto
    txt.value = '';
  }
}
