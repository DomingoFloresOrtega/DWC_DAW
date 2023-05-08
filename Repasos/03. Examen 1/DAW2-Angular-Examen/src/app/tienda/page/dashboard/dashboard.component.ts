import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Cliente, Producto } from '../../interfaces/tienda.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent {

  clientes: Cliente[] = [];
  productos: Producto[] = [];

  constructor(private dataService: DataService){
    this.clientes = this.dataService.clientes;
    this.productos = this.dataService.productos;
  }

}
