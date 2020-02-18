import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'https://developers.zomato.com/api/v2.1/';
    }
    /* retreive user list */
    fetchUsers() {
        // return this.http.get(`${this.apiUrl}?per_page=10`);
    }
    getLocation() {
        return Observable.create(observer => {
            if (window.navigator && window.navigator.geolocation) {
                window.navigator.geolocation.getCurrentPosition((position) => {
                    observer.next(position);
                    observer.complete();
                }, (error) => observer.error(error));
            }
            else {
                observer.error('Unsupported Browser');
            }
        });
    }
    getCusine(latitude, longitude) {
        const data = { lat: latitude, lon: longitude };
        return this.http.get(this.apiUrl + 'cuisines', { params: data });
    }
    getAllRestaurant(latitude, longitude) {
        console.log(latitude + ' == ' + longitude);
        const data = { lat: latitude, lon: longitude };
        return this.http.get(this.apiUrl + 'geocode', { params: data });
    }
    getReviews(id, resCount, startOffset) {
        const data = { res_id: id, count: resCount, start: startOffset };
        return this.http.get(this.apiUrl + 'reviews', { params: data });
    }
    searchAllRestaurant(latitude, longitude, Rescount) {
        const data = { lat: latitude, lon: longitude, count: Rescount };
        return this.http.get(this.apiUrl + 'search', { params: data });
    }
    getSingleRestaurant(id) {
        const data = { res_id: id };
        return this.http.get(this.apiUrl + 'restaurant', { params: data });
    }
    getData() {
        /*let headers = new HttpHeaders({
          'Accept': 'application/json',
          'user-key': '894946516275cc672c67117629fd3f7a'
        }); */
        return this.http.get(this.apiUrl + 'categories');
    }
};
UserService = tslib_1.__decorate([
    Injectable()
], UserService);
export { UserService };
//# sourceMappingURL=apiservice.service.js.map