import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pais } from '../pais/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  resultadosPais:Pais[] = [];
  errores:boolean = false;

  constructor( private http: HttpClient ) { }

  buscarPaises( txt: string ) {
    this.http.get<Pais[]>(`https://restcountries.com/v3.1/name/${txt}`)
    .subscribe({
      next:( resp:Pais[] ) => {
        this.resultadosPais = resp;
        console.log(resp); //<-- mostramos la respuesta
      },
      error:(error) => {
        this.errores = true;
      }
    })
  }

  buscarPaisesPorRegion( txt: string ) {
    this.http.get<Pais[]>(`https://restcountries.com/v3.1/region/${txt}`)
    .subscribe({
      next:( resp:Pais[] ) => {
        this.resultadosPais = resp;
        console.log(resp); //<-- mostramos la respuesta
      },
      error:(error) => {
        this.errores = true;
      }
    })
  }

  buscarPaisesPorCapital( txt: string ) {
    this.http.get<Pais[]>(`https://restcountries.com/v3.1/capital/${txt}`)
    .subscribe({
      next:( resp:Pais[] ) => {
        this.resultadosPais = resp;
        console.log(resp); //<-- mostramos la respuesta
      },
      error:(error) => {
        this.errores = true;
      }
    })
  }

  buscarPaisesPorId( txt: string ) {
    this.http.get<Pais[]>(`https://restcountries.com/v3.1/alpha/${txt}`)
    .subscribe({
      next:( resp:Pais[] ) => {
        this.resultadosPais = resp;
        console.log(resp); //<-- mostramos la respuesta
      },
      error:(error) => {
        this.errores = true;
      }
    })
  }
}
