import { Component, OnInit, OnDestroy } from '@angular/core';
import {LoadingServiceService } from '../loading-service.service';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {
  loading: Boolean = false;
  loadingSubscription: Subscription;
  constructor(private loadingScreenService: LoadingServiceService) {
  }
  ngOnInit() {
    this.loadingSubscription = this.loadingScreenService.loadingStatus.pipe(
      debounceTime(500)
    ).subscribe((value) => {
      this.loading = value;
    });
  }
  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }

}
