import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let HeaderComponent = class HeaderComponent {
    constructor(userService, http) {
        this.userService = userService;
        this.http = http;
    }
    getCoordinates() {
        this.userService.getLocation().subscribe(coordinates => {
            this.lat = coordinates.coords.latitude;
            this.long = coordinates.coords.longitude;
            console.log(this.lat);
            this.userService.getCusine(this.lat, this.long).subscribe(cusineList1 => {
                this.cusine1 = cusineList1;
                this.users = this.cusine1.cuisines;
            });
            // do something with Rep, Rep will have the data you desire.
        });
    }
    ngOnInit() {
        this.getCoordinates();
    }
};
HeaderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.scss']
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map