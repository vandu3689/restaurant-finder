import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../service/apiservice.service';
import {HttpClient} from '@angular/common/http';
import { Router, NavigationExtras  } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  public users;
  public cusine1;
  public lat;
  public long;
  public searchData;
  public city = 13;
  @Input() latData: any;
  @Input() longData: any;

  submitForm = new FormGroup({
    searchTerm : new FormControl('', [Validators.required])
  });

  registrationForm = this.fb.group({
    recepie : ['', Validators.required],
    cuisine : ['', Validators.required]
  });
  constructor(public userService: UserService, private http: HttpClient, private router: Router, private fb: FormBuilder) { }
  public getCoordinates() {
    this.userService.getLocation().subscribe(coordinates => {
        this.lat = coordinates.coords.latitude;
        this.long = coordinates.coords.longitude;
        this.userService.getCusine(this.lat, this.long).subscribe(cusineList1 => {
            this.cusine1 = cusineList1;
            this.users = this.cusine1.cuisines;
        });
   },
   error => {
    // Loading Chennai city Restaurants
    this.userService.getCuisineRestaurant(this.city).subscribe(resList => {
      this.cusine1 = resList;
      this.users = this.cusine1.cuisines;
    });

  });
  }

  onSubmit = function (formData) {
    this.submitted = true;
    let navigationExtras: NavigationExtras = {
      queryParams: {
          city: formData.recepie,
          cuisine:  formData.cuisine,
          query : formData.searchTerm,
          lat : this.lat,
          long : this.long
      }
    }
    // stop the process here if form is invalid
    if (this.registrationForm.valid || this.submitForm.valid) {
      this.router.navigate(['searchRes'], navigationExtras);
    } else {
      return;
    }
 }

  ngOnInit() {
    this.getCoordinates();
  }

}
