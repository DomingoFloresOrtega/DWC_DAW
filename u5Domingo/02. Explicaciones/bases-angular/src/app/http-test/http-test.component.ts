import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gif, Gifresponse, Images } from './http-test.interface';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styles: [
  ]
})
export class HttpTestComponent {

  @ViewChild('txtquery') txtquery!:ElementRef<HTMLInputElement>;

  resultados:Gif[] = [];

  constructor( private http: HttpClient) {}

  buscar( txt: HTMLInputElement) {
    if ( !txt.value ) {
      return;
    }
    console.log(txt.value);
    txt.value = '';

    this.http.get<Gifresponse>('https://api.giphy.com/v1/gifs/search?api_key=yGhLOEEGIflLvexLsJEHF2xHpNRqIh8j&q=sorpresa&limit=10')
      .subscribe({
        next: (resp) => {
          this.resultados = resp.data;
          console.log(this.resultados);
        }
      })

  }
}
