import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngClassExample';
  largefont="large-font red";
  redcolor='red';
  isLargeFont=true;
  isRedFont=false;
}
