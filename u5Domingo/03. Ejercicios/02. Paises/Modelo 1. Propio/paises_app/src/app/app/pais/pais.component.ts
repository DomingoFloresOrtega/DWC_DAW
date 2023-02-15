import { Component } from '@angular/core';
import { Pais } from './pais.interfaces';
import { CountriesService } from '../servicio/countries.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent {
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
    this.countriesService.buscarPaises(txt.value);

    // Limpio texto
    txt.value = '';
  }
}
