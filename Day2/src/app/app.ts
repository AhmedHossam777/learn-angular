import { Component } from '@angular/core';
import { Register } from './components/register/register';

@Component({
  selector: 'app-root',
  imports: [Register],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
