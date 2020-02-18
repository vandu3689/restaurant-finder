import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let RecepiebodyComponent = class RecepiebodyComponent {
    constructor(userService, http) {
        this.userService = userService;
        this.http = http;
        this.count = 20;
    }
    ngOnInit() {
        this.userService.getLocation().subscribe(coordinates => {
            this.lat = coordinates.coords.latitude;
            this.long = coordinates.coords.longitude;
            this.userService.getAllRestaurant(this.lat, this.long).subscribe(resList => {
                this.allrestaurant = resList;
            });
            this.userService.searchAllRestaurant(this.lat, this.long, this.count).subscribe(searchResult => {
                this.searchRes = searchResult;
                console.log(this.searchRes);
            });
        });
    }
};
RecepiebodyComponent = tslib_1.__decorate([
    Component({
        selector: 'app-recepiebody',
        templateUrl: './recepiebody.component.html',
        styleUrls: ['./recepiebody.component.scss']
    })
], RecepiebodyComponent);
export { RecepiebodyComponent };
//# sourceMappingURL=recepiebody.component.js.map