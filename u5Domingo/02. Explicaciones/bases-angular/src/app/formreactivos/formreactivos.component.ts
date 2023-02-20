import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formreactivos',
  templateUrl: './formreactivos.component.html',
  styles: [
  ]
})
export class FormreactivosComponent {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('Federico')
  // })

  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', [ Validators.required,Validators.minLength(5)] ],
    nacimiento: [ , [Validators.required, Validators.min(1920)]],
    tieneHijos: [ 'S', Validators.required ]
  })

  constructor( private fb: FormBuilder ){}

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset({'tieneHijos':'N'});
  }
}
