import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { User } from '../users/users';

@Component({
  selector: 'app-user-details',
  imports: [RouterLink],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetails implements OnInit {
  user: User | undefined;

  // Mock users data - ideally this should come from a service
  users: User[] = [
    { id: 1, username: 'ahmed', email: 'ahmed@email.com', age: 24 },
    { id: 2, username: 'dod', email: 'ahmed@email.com', age: 24 },
    { id: 3, username: 'hoss', email: 'ahmed@email.com', age: 24 },
    { id: 4, username: 'bob', email: 'ahmed@email.com', age: 24 },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Option 1: Using snapshot (simpler, synchronous)
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.user = this.users.find((u) => u.id === id);
  }
}
