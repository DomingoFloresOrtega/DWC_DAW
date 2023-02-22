import { Component } from '@angular/core';
import { Cliente, Producto } from '../../interfaces/tienda.interface';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent {

  clientes: Cliente[] = [];
  productos: Producto[] = [];

  constructor(private dataService: DataService) {
    this.clientes = this.dataService.obtenerClientes();
    this.productos = this.dataService.obtenerProductos();
  }

}
