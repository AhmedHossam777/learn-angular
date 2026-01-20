import {Component, Input} from '@angular/core';
import {User} from '../register/register';

@Component({
  selector: 'app-students',
  standalone:true,
  imports: [],
  templateUrl: './students.html',
  styleUrl: './students.css',
})
export class Students {
  @Input() users: User[] = []
}
