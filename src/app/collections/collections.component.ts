import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/apiservice.service';
import { Router, NavigationExtras  } from '@angular/router';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {
  public trendingRes;
  public lat;
  public long;
  count = 4;
  constructor(public userService: UserService, private router: Router) {}
  collectionRes(collectionID) {
    console.log(collectionID);
    const navigationExtras: NavigationExtras = {
      queryParams: {
          collectID: collectionID,
      }
    }
    this.router.navigate(['searchRes'], navigationExtras);
  }
  ngOnInit() {

    this.userService.getLocation().subscribe(coordinates => {
      this.lat = coordinates.coords.latitude;
      this.long = coordinates.coords.longitude;

      this.userService.trendingCollections(this.lat, this.long, this.count).subscribe(trendingRes => {
      this.trendingRes = trendingRes;
      
      });
    });
  }

}
