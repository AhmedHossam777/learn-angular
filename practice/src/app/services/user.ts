import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserResponse {
  data: User[];
  page: number;
  count: number;
  total_count: number;
  has_more: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class User {
  private baseUserUrl = 'http://localhost:8080/api/v1/users'

  constructor(private readonly http: HttpClient) {
  }

  getAllUsers() {
    this.http.get(`${this.baseUserUrl}`).subscribe(
      {
        next: (response) => console.log(response),
        error: (err) => console.error('Error:', err),
        complete: () => console.log("Completed"),
      }
    )

  }
}
