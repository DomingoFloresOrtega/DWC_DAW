import { Component } from '@angular/core';
import { CountriesService } from '../servicio/countries.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent {

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
    this.countriesService.buscarPaisesPorRegion(txt.value);

    // Limpio texto
    txt.value = '';
  }
}
