import { Component } from '@angular/core';

/*
1. class ( data + behavior)
2. template ( UI code - html)
3. configuration / metadata
*/

//3
@Component({
  selector: 'app-main-page',
  templateUrl: './app.component.html', // 2
  styleUrls: ['./app.component.css']
})

//1
export class AppComponent {
  title = 'Application';
  date = new Date();
  day = this.date.getDay();
  subscribed: boolean = false;
  
  OnSubscribeToggle() {
    console.log(this.subscribed);
    this.subscribed = !this.subscribed;
  }
  
}
