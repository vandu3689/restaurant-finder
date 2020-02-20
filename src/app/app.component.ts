import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  location : {};
  title : 'Restaurant Search App';
  ngOnInit() {
    console.log("ng oninit loaded");
    
  }
  
}
