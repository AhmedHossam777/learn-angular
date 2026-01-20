import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound {

}
