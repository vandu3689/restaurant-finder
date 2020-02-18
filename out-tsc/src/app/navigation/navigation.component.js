import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let NavigationComponent = class NavigationComponent {
    constructor(userService, http) {
        this.userService = userService;
        this.http = http;
    }
    getCoordinates1() {
        this.userService.getLocation().subscribe(coordinates => {
            this.lat = coordinates.coords.latitude;
            this.long = coordinates.coords.longitude;
            this.userService.getCusine(this.lat, this.long).subscribe(cusineList => {
                this.cusine = cusineList;
            });
        });
    }
    ngOnInit() {
        this.getCoordinates1();
    }
};
NavigationComponent = tslib_1.__decorate([
    Component({
        selector: 'app-navigation',
        templateUrl: './navigation.component.html',
        styleUrls: ['./navigation.component.scss']
    })
], NavigationComponent);
export { NavigationComponent };
//# sourceMappingURL=navigation.component.js.map