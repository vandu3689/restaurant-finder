import { NgModule } from '@angular/core';
import {RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import {RecepiebodyComponent } from './recepiebody/recepiebody.component';
import { SearchresultsComponent } from './searchresults/searchresults.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import {CollectionDetailsComponent} from './collection-details/collection-details.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path : 'restaurant-detail/:id', component : RestaurantDetailComponent},
  {path : 'all-restaurants', component : RecepiebodyComponent},
  {path : '', pathMatch : 'full', component : RecepiebodyComponent},
  {path : 'searchRes', pathMatch : 'full', component : SearchresultsComponent},  
  {path : 'collectionDetail', pathMatch : 'full', component : CollectionDetailsComponent},
  {path : '**', component : ErrorpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
