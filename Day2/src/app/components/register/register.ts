import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';

export type User = {
  name: string;
  age: number | null
}

@Component({
  selector: 'app-register',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  standalone: true,
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  registerForm: FormGroup;

  @Output() registrationData = new EventEmitter<User>()

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
      age: [null, [Validators.required, Validators.min(1)]]
    })
  }

  submitRegistration() {
    if (this.registerForm.valid) {
      this.registrationData.emit(this.registerForm.value)
      this.registerForm.reset()
    }
  }

  get name() {
    return this.registerForm.get('name')
  }

  get age() {
    return this.registerForm.get('age')
  }
}
