import { Injectable } from '@angular/core';
import { HttpClient,  HttpParams, HttpHeaders  } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { RestaurantDetails, Restaurant } from '../models/apiinterface';

@Injectable()
export class UserService {
  apiUrl = 'https://developers.zomato.com/api/v2.1/';
  constructor(private http: HttpClient) {}

  /* retreive user list */
  getEstablishments(cityId) {
    const data = {city_id: cityId};
    return this.http.get(this.apiUrl + 'establishments', {params: data});
  }
  getLocation(): Observable<any> {
    return Observable.create(observer => {
        if(window.navigator && window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(
                (position) => {
                    observer.next(position);
                    observer.complete();
                },
                (error) => observer.error(error)
            );
        } else {
            observer.error('Unsupported Browser');
        }
    });
  }
  trendingCollections(latitude, longitude, countVal) {
    const data = {lat: latitude, lon: longitude, count : countVal};
    return this.http.get(this.apiUrl + 'collections', {params: data});
  }
  getCusine(latitude, longitude) {
    const data = {lat: latitude, lon: longitude};
    return this.http.get(this.apiUrl + 'cuisines', {params: data});
  }
  getAllRestaurant(latitude, longitude) {
    const data = {lat: latitude, lon: longitude};
    return this.http.get<RestaurantDetails[]>(this.apiUrl + 'geocode', {params: data});
  }
  getReviews(id, resCount, startOffset) {
    const data = {res_id : id, count : resCount, start : startOffset };
    return this.http.get(this.apiUrl + 'reviews', {params: data});
  }
  searchAllRestaurant(latitude, longitude, Rescount) {
    const data = {lat: latitude, lon: longitude, count : Rescount};
    return this.http.get(this.apiUrl + 'search', {params: data});
  }
  getSingleRestaurant(id) {
    const data = {res_id : id };
    return this.http.get(this.apiUrl + 'restaurant', {params: data});
  }
  getCuisineRestaurant(id) {
    const data = {city_id: id};
    return this.http.get(this.apiUrl + 'cuisines', {params: data});
  }
  searchResults(searchData1, startOffset, searchData2, entityTYpe, countVal, queryStr?, latData?, longData?, collectionID?) {
    if (queryStr !== undefined && queryStr !== '') {
      const data = {q : queryStr, start : startOffset, lat : latData, lon : longData, radius: '100m', collection_id : collectionID};
      return this.http.get(this.apiUrl + 'search', {params : data});
    } else {
        const data = {entity_id: searchData1, start: startOffset, cuisines : searchData2, entity_type : entityTYpe, count : countVal,
          collection_id : collectionID};
        return this.http.get(this.apiUrl + 'search', {params: data});
    }
  }
  locationSearch(name) {
    const data = {query: name};
    return this.http.get(this.apiUrl + 'locations', {params: data});
  }
}