import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [RouterLink],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetails {
  user = {
    id: 1,
    username: 'ahmed',
    email: 'ahmed@email.com',
    age: 24,
  };
}
