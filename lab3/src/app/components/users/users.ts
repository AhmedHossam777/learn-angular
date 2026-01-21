import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

export type User = {
  id: number;
  username: string;
  email: string;
  age: number;
};

@Component({
  selector: 'app-users',
  imports: [RouterLink],
  templateUrl: './users.html',
  styleUrl: './users.css',
  standalone: true,
})
export class Users {
  users: User[] = [
    { id: 1, username: 'ahmed', email: 'ahmed@email.com', age: 24 },
    { id: 2, username: 'dod', email: 'ahmed@email.com', age: 24 },
    { id: 3, username: 'hoss', email: 'ahmed@email.com', age: 24 },
    { id: 4, username: 'bob', email: 'ahmed@email.com', age: 24 },
  ];
}
