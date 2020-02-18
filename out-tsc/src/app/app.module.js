import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RecepiebodyComponent } from './recepiebody/recepiebody.component';
import { HeaderComponent } from './header/header.component';
import { AuthInterceptor } from './token.interceptor';
import { UserService } from './service/apiservice.service';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { StarratingComponent } from './starrating/starrating.component';
import { RestaurantReviewsComponent } from './restaurant-reviews/restaurant-reviews.component';
import { FooterComponent } from './footer/footer.component';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            NavigationComponent,
            RecepiebodyComponent,
            HeaderComponent,
            RestaurantDetailComponent,
            StarratingComponent,
            RestaurantReviewsComponent,
            FooterComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            HttpClientModule,
            NgbModule
        ],
        providers: [
            UserService,
            { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map