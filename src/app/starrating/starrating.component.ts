import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-starrating',
  templateUrl: './starrating.component.html',
  styleUrls: ['./starrating.component.scss']
})
export class StarratingComponent implements OnInit {
  @Input() childMessage : any;
  iconClass = {
    0: 'far fa-star',
    0.5: 'fas fa-star-half-alt',
    1: 'fas fa-star'
  }
  stars: number[] = [0, 0, 0, 0, 0]; //five empty stars

  constructor() { }
  fillStars(){
    let starsToFill : any = Math.round(this.childMessage * 2)/2; //round to nearest 0.5
    var i = 0;
    while(starsToFill > 0.5){
      this.stars[i] = 1;
      i++;
      starsToFill--;
    }
    if(starsToFill === 0.5){
      this.stars[i] = 0.5;
    }
  }
  ngOnInit() {
   
  }
  ngOnChanges(){
    this.fillStars();
  }

}
