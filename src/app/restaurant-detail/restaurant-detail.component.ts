import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { ViewportScroller } from '@angular/common';

import { UserService } from '../service/apiservice.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})

export class RestaurantDetailComponent implements OnInit {
  // zoom: number = 8;
  contact: any;
  // contactId: number;
  // loadComponent;
  // closeResult: string;
  reviews: any;
  count = 20;
  start = 0;
  zoom: number = 15;
  mapLat;
  mapLang;
  target;
  rating;
  constructor(private userService: UserService, private route: ActivatedRoute, private modalService: NgbModal) { }
  convertCoordinate(str: string): number {
    return parseFloat(str);
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.userService.getSingleRestaurant(params.get('id')).subscribe(c =>{
        this.contact = c;
        this.mapLang = +this.contact.location.longitude;
        this.mapLat = +this.contact.location.latitude;
        console.log(this.contact.location);
    });
    this.userService.getReviews(params.get('id'), this.count, this.start).subscribe(reviewData => {
      this.reviews = reviewData;

     });
});
}
loadMoreReviews(tot) {
  this.start = this.start + 1;
  this.userService.getReviews(tot, this.count, this.start).subscribe(reviewData1 => {
    this.reviews = reviewData1;
    document.querySelector('#target').scrollIntoView({ behavior: 'smooth'});
 });
}

showReview(el: HTMLElement) {
  document.querySelector('#target').scrollIntoView({ behavior: 'smooth'});
  }
}
