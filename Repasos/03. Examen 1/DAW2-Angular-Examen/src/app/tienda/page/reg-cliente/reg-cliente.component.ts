import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Cliente } from '../../interfaces/tienda.interface'
import { max } from 'rxjs';

@Component({
  selector: 'app-reg-cliente',
  templateUrl: './reg-cliente.component.html',
  styles: [
  ]
})
export class RegClienteComponent {
  cliente: Cliente = {
    id: 0,
    nombre: '',
    edad: 0,
    genero: '',
    carrito: []
  };

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    edad: ['', [Validators.required, Validators.min(0)]],
    genero: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private service: DataService){
  }

  obtenerId() {
    return this.service.clientes.length;
  }

  insertarCliente() {
    // mostrar todos los errores
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    this.cliente.nombre = this.miFormulario.controls['nombre'].value;
    this.cliente.edad = this.miFormulario.controls['edad'].value;
    this.cliente.genero = this.miFormulario.controls['genero'].value;
    this.cliente.id = this.obtenerId() + 1;

    this.service.insertarCliente(this.cliente);
    this.miFormulario.reset();
  }
}
