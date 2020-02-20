import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/apiservice.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-recepiebody',
  templateUrl: './recepiebody.component.html',
  styleUrls: ['./recepiebody.component.scss']
})
export class RecepiebodyComponent implements OnInit {
  public allrestaurant;
  public err;
  public lat;
  public long;
  public count = 20;
  public searchRes;
  rating;
  constructor(public userService: UserService, private http: HttpClient) { }
  ngOnInit() {
    this.userService.getLocation().subscribe(coordinates => {
      this.lat = coordinates.coords.latitude;
      this.long = coordinates.coords.longitude;
      this.userService.getAllRestaurant(this.lat, this.long).subscribe(resList => {
           this.allrestaurant = resList;
      });
      this.userService.searchAllRestaurant(this.lat, this.long, this.count).subscribe(searchResult => {
        this.searchRes = searchResult;
      });
      // trending this week api call
    }, error => {
      this.err = true;
    });
    }
}
