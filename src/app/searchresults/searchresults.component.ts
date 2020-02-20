import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/apiservice.service';

@Component({
  selector: 'app-searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.scss']
})
export class SearchresultsComponent implements OnInit {
  searchRes: any;
  count = 20;
  entityid;
  err;
  startOffset = 0;
  entitytype: string;
  cuisineId;
  queryStr;
  lat;
  long;
  collectionId;
  rating;
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  loadMoreProducts() {
    this.startOffset = this.startOffset + 20;
    this.userService.searchResults(this.entityid, this.startOffset, this.cuisineId, this.entitytype,
                                  this.count, this.queryStr, this.lat, this.long, this.collectionId).subscribe(loaddata => {
      this.searchRes = loaddata;
      document.querySelector('#target').scrollIntoView({ behavior: 'smooth'});
    });
  }

  ngOnInit() {
     this.route.queryParams.subscribe(params => {
     this.cuisineId = params.cuisine;
     this.queryStr = params.query;
     this.lat =  params.lat;
     this.long = params.long;
     this.collectionId = params.collectID;

     if (params.query === undefined && params.collectID === undefined) {
       this.searchRes = {results_found: 0};
          this.userService.locationSearch(params.city).subscribe(d => {
             if (d && d !== undefined) {
             for ( let venue in d) {
                for (let locations in d[venue]) {
                if (d[venue][locations].entity_type !== undefined) {
                  this.entityid = d[venue][locations].entity_id;
                  this.entitytype = d[venue][locations].entity_type;
                  this.userService.searchResults(this.entityid,  this.startOffset, params.cuisine, this.entitytype, this.count, '', '', '').subscribe(c => {
                  this.searchRes = c;
                  }, error => {
                    this.err = true;
                  });
                }
              }
            }
          }
      })
      } else if ( params.collectID && params.collectID !== undefined) {
          console.log("collection ");
          this.userService.searchResults('',  this.startOffset, '', '', this.count, '', this.lat, this.long, params.collectID).subscribe(c => {
            this.searchRes = c;
          });  
      } 
       else {
        this.userService.searchResults('',  this.startOffset, '', '', this.count, params.query, params.lat, params.long, '').subscribe(c => {
          this.searchRes = c;
        });
      }
    });
  }
}
