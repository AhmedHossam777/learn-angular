import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

export type User = {
  name: string;
  age: number | null
}

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


  @Output() registrationData = new EventEmitter<User>()

  submitRegistration() {
    this.validateName();
    this.validateAge();

    if (!this.nameErrValidation && !this.ageErrValidation) {
      this.registrationData.emit({name: this.name, age: this.age})
    }
  }
}
