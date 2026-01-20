import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  nameErrValidation = false;
  name = '';
  ageErrValidation = false;
  age: number | null = null;

  validateName() {
    this.nameErrValidation = this.name.trim().length === 0;
  }

  validateAge() {
    this.ageErrValidation = this.age === null || this.age <= 0;
  }
}
