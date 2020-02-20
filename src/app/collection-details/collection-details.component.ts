import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/apiservice.service';

@Component({
  selector: 'app-collection-details',
  templateUrl: './collection-details.component.html',
  styleUrls: ['./collection-details.component.scss']
})
export class CollectionDetailsComponent implements OnInit {
  collectionId;
  constructor(private route: ActivatedRoute, private userservice: UserService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.collectionId = params.collectionId;
  });

}

}
