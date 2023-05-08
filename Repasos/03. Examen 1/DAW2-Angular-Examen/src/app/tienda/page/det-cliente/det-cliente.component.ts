import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../../interfaces/tienda.interface';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-det-cliente',
  templateUrl: './det-cliente.component.html',
  styleUrls: []
})
export class DetClienteComponent {
  clienteid!: number;
  cliente!: Cliente;

  constructor( private activatedRoute: ActivatedRoute, private datas: DataService ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: ( params ) => {
        this.clienteid = params['id'];
        this.cliente = this.datas.obtenerCliente(this.clienteid);
      }
    })
  }
}
