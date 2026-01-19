import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-app-greeting',
  imports: [],
  templateUrl: './app-greeting.html',
  styleUrl: './app-greeting.css',
})
export class AppGreeting {
  @Input() personName: string = ''
}
