import {Component} from '@angular/core';
import {RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';
import {Logger} from './services/logger';
import {User} from './services/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor(private loggerService: Logger, private readonly userService: User) {
  }

  username = 'the real DoD';

  doAction() {
    this.loggerService.log("hey, this is my first service")
  }

  getAllUsers() {
    this.userService.getAllUsers()
  }
}
