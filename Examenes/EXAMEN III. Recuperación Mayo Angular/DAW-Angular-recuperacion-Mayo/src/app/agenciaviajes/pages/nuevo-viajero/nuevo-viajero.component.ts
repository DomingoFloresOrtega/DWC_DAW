import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatosService } from '../../services/datos.service';
import { Viajero } from '../../interfaces/agenciaviajes.interfaces';

@Component({
  selector: 'app-nuevo-viajero',
  templateUrl: './nuevo-viajero.component.html',
  styles: [
  ]
})
export class NuevoViajeroComponent {

  viajero: Viajero = {id: 0, nombre: '', edad: 0};

  constructor(private fb: FormBuilder, private service: DatosService) {}

  formulario: FormGroup = this.fb.group({
    nombre: [, Validators.required],
    edad: [, [Validators.required,Validators.min(0)]]
  })

  registrarViajero(){
    if (!this.formulario.controls['nombre'].errors && !this.formulario.controls['edad'].errors && this.formulario.controls['nombre'].touched && this.formulario.controls['edad'].touched) {
      let name = this.formulario.controls['nombre'].value;
      let edad = this.formulario.controls['edad'].value;
      let nuevoID = this.service.viajeros[this.service.viajeros.length-1].id + 1;

      this.viajero.id = nuevoID;
      this.viajero.nombre = name;
      this.viajero.edad = edad;

      this.service.agregarViajero(this.viajero);

      this.formulario.reset();
    } else {
      this.formulario.markAllAsTouched();
    }
  }

}
