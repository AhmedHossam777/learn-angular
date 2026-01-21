import { Routes } from '@angular/router';
import { NotFound } from './components/not-found/not-found';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Users } from './components/users/users';
import { UserDetails } from './components/user-details/user-details';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'users', component: Users },
  { path: 'users/:id', component: UserDetails },
  {
    path: '**',
    component: NotFound,
  },
];
