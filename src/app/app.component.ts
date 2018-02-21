import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  
})
export class AppComponent {
  title = 'app';
  position: number[];
  
  onTitleClicked($event) {
    this.title = $event;
    console.log(this.title);
  } 
  onMousePosition($event) {
    this.position=$event;
  } 

}
