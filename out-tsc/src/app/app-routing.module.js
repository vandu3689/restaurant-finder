import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RecepiebodyComponent } from './recepiebody/recepiebody.component';
import { RouterModule } from '@angular/router';
const routes = [
    { path: 'restaurant-detail/:id', component: RestaurantDetailComponent },
    { path: 'all-restaurants', component: RecepiebodyComponent },
    // {path : 'reviews/:id', component : RestaurantReviewsComponent},
    { path: '', pathMatch: 'full', component: RecepiebodyComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map