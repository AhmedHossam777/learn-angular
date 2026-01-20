import { Component } from '@angular/core';
import { AppGreeting } from './components/app-greeting/app-greeting';
import { User, UserProfile } from './components/user-profile/user-profile';
import { ChildBtn } from './components/child-btn/child-btn';

@Component({
  selector: 'app-root',
  imports: [AppGreeting, UserProfile, ChildBtn],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  username = 'the real DoD';
  admin: User = {
    id: 1,
    name: 'Ahmed Hossam',
    email: 'ahmed@example.com',
    avatar: '👨‍💻',
    role: 'admin',
    isOnline: true,
    joinDate: new Date('2023-01-15'),
  };

  regularUser: User = {
    id: 2,
    name: 'Sara Mohamed',
    email: 'sara@example.com',
    avatar: '👩‍🎨',
    role: 'user',
    isOnline: false,
    joinDate: new Date('2023-06-20'),
  };

  isLiked = false;
  handleChildBtnClick() {
    this.isLiked = true;
  }
}
