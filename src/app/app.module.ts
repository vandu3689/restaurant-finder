import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RecepiebodyComponent } from './recepiebody/recepiebody.component';
import { HeaderComponent } from './header/header.component';


import { AuthInterceptor } from './token.interceptor';
import { UserService } from './service/apiservice.service';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { StarratingComponent } from './starrating/starrating.component';
import { FooterComponent } from './footer/footer.component';
import { SearchresultsComponent } from './searchresults/searchresults.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { LoaderComponent } from './loader/loader.component';
import { CollectionsComponent } from './collections/collections.component';
import { CollectionDetailsComponent } from './collection-details/collection-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RecepiebodyComponent,
    HeaderComponent,
    RestaurantDetailComponent,
    StarratingComponent,
    FooterComponent,
    SearchresultsComponent,
    ErrorpageComponent,
    LoaderComponent,
    CollectionsComponent,
    CollectionDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCtNTqRfMa07OhpHq4R2XSsDxz4egsPCdU'
    })
  ],
  providers: [
  UserService,
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
