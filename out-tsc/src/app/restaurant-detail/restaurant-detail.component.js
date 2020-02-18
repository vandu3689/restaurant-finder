import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let RestaurantDetailComponent = class RestaurantDetailComponent {
    constructor(userService, route) {
        this.userService = userService;
        this.route = route;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            console.log(params.get('id'));
            this.userService.getSingleRestaurant(params.get('id')).subscribe(c => {
                // console.log(c);
                this.contact = c;
            });
        });
    }
    showReview(contactId, element) {
        // element.scrollIntoView({ behavior: 'smooth' } );
        this.contactId = contactId;
    }
};
RestaurantDetailComponent = tslib_1.__decorate([
    Component({
        selector: 'app-restaurant-detail',
        templateUrl: './restaurant-detail.component.html',
        styleUrls: ['./restaurant-detail.component.scss']
    })
], RestaurantDetailComponent);
export { RestaurantDetailComponent };
//# sourceMappingURL=restaurant-detail.component.js.map