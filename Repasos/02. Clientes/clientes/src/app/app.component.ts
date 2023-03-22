import { Component } from '@angular/core';
import { Cliente } from './cliente.interface';
import { ServiceService } from './service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientes';

  constructor(  private clienteService: ServiceService ){}

}
