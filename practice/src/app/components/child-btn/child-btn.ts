import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-btn',
  imports: [],
  templateUrl: './child-btn.html',
  styleUrl: './child-btn.css',
})
export class ChildBtn {
  @Output() clicked = new EventEmitter<boolean>();
  notifyParent() {
    this.clicked.emit(true);
  }
}
