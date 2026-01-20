import { Component } from '@angular/core';
import {Register, User} from './components/register/register';
import {Students} from './components/students/students';

@Component({
  selector: 'app-root',
  imports: [Register, Students],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  usersArray: User[] = []
  handleRegisterData(user:User){
    this.usersArray.push(user)
    console.log(this.usersArray)
  }
}
