import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../servicio/countries.service';

@Component({
  selector: 'app-detallepais',
  templateUrl: './detallepais.component.html',
  styleUrls: ['./detallepais.component.css']
})
export class DetallepaisComponent {
  constructor(private activatedRoute: ActivatedRoute, private countries: CountriesService) {}

  get resultados(){
    return this.countries.resultadosPais;
  };

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(({id}) => {
        this.countries.buscarPaisesPorId(id);
      })
  }
}
