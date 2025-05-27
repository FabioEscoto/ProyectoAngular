import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() datosEnviados = new EventEmitter<any>();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      edad: ['', [Validators.required, this.edadValida(18)]]
    });
  }

  edadValida(min: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      return control.value && control.value < min ? { edadInvalida: true } : null;
    };
  }

  enviar() {
    if (this.form.valid) {
      this.datosEnviados.emit(this.form.value);
      this.form.reset();
    }
  }

  tieneError(campo: string, error: string): boolean {
    return this.form.get(campo)?.hasError(error) ?? false;
  }
}

