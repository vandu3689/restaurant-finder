import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/apiservice.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public cusine;
  public lat;
  public long;
  
  public getCoordinates1() {
    this.userService.getLocation().subscribe(coordinates => {
        this.lat = coordinates.coords.latitude;
        this.long = coordinates.coords.longitude;

        this.userService.getCusine(this.lat, this.long).subscribe(cusineList => {
          this.cusine = cusineList;
        });
   });
  }

  constructor(public userService: UserService, private http: HttpClient) { }

  ngOnInit() {
    this.getCoordinates1();
  }

}
