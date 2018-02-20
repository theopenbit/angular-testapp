import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mouse-cursor',
  templateUrl: './mouse-cursor.component.html',
  styleUrls: ['./mouse-cursor.component.css']
})
export class MouseCursorComponent implements OnInit {
  @Output() mousePosition = new EventEmitter<number[]>();
  x: number;
  y: number;
  constructor() { }

  ngOnInit() {
  }
  onMouseMove($event: MouseEvent) {
    this.x = $event.clientX;
    this.y = $event.clientY;
    this.mousePosition.emit([  this.x, this.y]  );
  }





}
