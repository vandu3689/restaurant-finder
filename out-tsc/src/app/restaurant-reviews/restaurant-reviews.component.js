import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let RestaurantReviewsComponent = class RestaurantReviewsComponent {
    constructor(userService, route) {
        this.userService = userService;
        this.route = route;
        this.count = 20;
        this.start = 0;
    }
    loadMoreReviews() {
        // this.count = this.count;
        this.start = this.start + 1;
        this.userService.getReviews(this.contactId, this.count, this.start).subscribe(reviewData1 => {
            this.reviews = reviewData1;
            window.scrollTo(100, 100);
        });
    }
    ngOnInit() {
        this.userService.getReviews(this.contactId, this.count, this.start).subscribe(reviewData => {
            this.reviews = reviewData;
            const tabScroll = document.getElementById("review");
            // null check to ensure that the element actually exists
            if (tabScroll) {
                tabScroll.scrollIntoView(true);
            }
            //window.scrollTo(1000, 1000);
        });
    }
};
tslib_1.__decorate([
    Input()
], RestaurantReviewsComponent.prototype, "contactId", void 0);
RestaurantReviewsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-restaurant-reviews',
        templateUrl: './restaurant-reviews.component.html',
        styleUrls: ['./restaurant-reviews.component.scss']
    })
], RestaurantReviewsComponent);
export { RestaurantReviewsComponent };
//# sourceMappingURL=restaurant-reviews.component.js.map