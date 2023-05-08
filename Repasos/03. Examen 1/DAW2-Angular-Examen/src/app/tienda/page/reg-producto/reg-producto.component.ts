import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Producto } from '../../interfaces/tienda.interface';

@Component({
  selector: 'app-reg-producto',
  templateUrl: './reg-producto.component.html',
  styles: [
  ]
})
export class RegProductoComponent {
  producto: Producto = {
    nombre: '',
    precio: 0,
    cantidad: 0
  };

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    precio: ['', [Validators.required, Validators.min(0)]],
    cantidad: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private service: DataService){
  }

  insertarProducto() {
    // mostrar todos los errores
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    this.producto.nombre = this.miFormulario.controls['nombre'].value;
    this.producto.precio = this.miFormulario.controls['precio'].value;
    this.producto.cantidad = this.miFormulario.controls['cantidad'].value;

    this.service.insertarProducto(this.producto);
    this.miFormulario.reset();
  }
}
