import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-viajero',
  templateUrl: './nuevo-viajero.component.html',
  styles: [
  ]
})
export class NuevoViajeroComponent {
  formulario: FormGroup = this.fb.group({
    nombre: [ 'Federico', [Validators.required]],
    edad: [ 32, [Validators.required, Validators.min(0)] ]
    })
    constructor(private fb: FormBuilder) {}

}
