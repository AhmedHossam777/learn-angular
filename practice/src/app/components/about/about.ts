import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  features = [
    'Built with Angular 19+',
    'Standalone components',
    'Modern routing system',
    'TypeScript support'
  ];
}
