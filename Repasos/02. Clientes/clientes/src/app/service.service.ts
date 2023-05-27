import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente, Empresa } from './cliente.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // autenticacon con API REST
  client_id: string = 'qvxqcwgaiyw630r1s4e5dfqgnucxwcdicf94y8uc.api.einforma.com';
  client_secret: string = 'eHkhyz5oUWwNfkSflgxscF4JC7ZUmKzGK-iTVFrHKLk';
  grant_type: string = 'client_credentials';
  scope: string = 'buscar:consultar:empresas';

  query:string = 'bernal';
  url_auth: string = 'https://developers.einforma.com/api/v1/oauth/token';
  url_consultas: string = `https://developers.einforma.com/api/v1/companies?companySearch=${this.query}`;

  token: string = '';

  getData(token:string) {

    console.log(token);

    let headers = new HttpHeaders({
      'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Bearer '+ token
    });

    // let params = new HttpParams();
    // params.append('companySearch', 'bernal');

    this.http.get(this.url_consultas, {headers: headers})
      .subscribe({
        next: (resp) => {
          console.log(resp);
        }
      });
  };

  buscarEmpresa() {
    let params = new URLSearchParams();
    params.append('grant_type', this.grant_type);
    params.append('client_id', this.client_id);
    params.append('client_secret', this.client_secret);
    params.append('scope', this.scope);

    let headers =
      new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'});

    this.http.post(this.url_auth, params, {headers: headers}).subscribe({
      next: (token_data: any) => {
        console.log(token_data);
        this.getData(token_data.access_token);
      }
    });
};



  private _clientes: Cliente[] = [
    {
      nombre: 'Maroma',
      cif: 'A3333',
      direccion: 'C/ San San',
      grupo: {
        id: 1,
        nombre: ''
      }
    }
  ];

  private _empresas: Empresa[] = [

  ];

  get clientes(): Cliente[] {
    return [...this._clientes]
  }

  get empresasonline(): Empresa[] {
    return [...this._empresas]
  }

  constructor(private http: HttpClient) {this._clientes = JSON.parse(localStorage.getItem('clientes')!) || this._clientes} // get siempre en constructor

  agregarCliente( cliente: Cliente ) {
    this._clientes.push(cliente);
    localStorage.setItem('clientes', JSON.stringify(this.clientes)) // set en punto especifico | al agregar cliente
  }
}
