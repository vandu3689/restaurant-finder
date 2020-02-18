import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let StarratingComponent = class StarratingComponent {
    constructor() {
        this.iconClass = {
            0: 'far fa-star',
            0.5: 'fas fa-star-half-alt',
            1: 'fas fa-star'
        };
        this.stars = [0, 0, 0, 0, 0]; //five empty stars
    }
    fillStars() {
        let starsToFill = Math.round(this.childMessage * 2) / 2; //round to nearest 0.5
        var i = 0;
        while (starsToFill > 0.5) {
            this.stars[i] = 1;
            i++;
            starsToFill--;
        }
        if (starsToFill === 0.5) {
            this.stars[i] = 0.5;
        }
    }
    ngOnInit() {
    }
    ngOnChanges() {
        this.fillStars();
    }
};
tslib_1.__decorate([
    Input()
], StarratingComponent.prototype, "childMessage", void 0);
StarratingComponent = tslib_1.__decorate([
    Component({
        selector: 'app-starrating',
        templateUrl: './starrating.component.html',
        styleUrls: ['./starrating.component.scss']
    })
], StarratingComponent);
export { StarratingComponent };
//# sourceMappingURL=starrating.component.js.map