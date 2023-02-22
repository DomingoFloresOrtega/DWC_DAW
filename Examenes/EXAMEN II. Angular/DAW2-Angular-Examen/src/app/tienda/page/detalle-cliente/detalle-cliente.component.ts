import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-detalle-cliente',
  templateUrl: './detalle-cliente.component.html',
  styleUrls: []
})
export class DetalleClienteComponent {

    constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) {}

    ngOnInit() {
      this.activatedRoute.params
        .subscribe(({nombre}) => {
          this.dataService.buscarClientes(nombre);
        })
    }
}
