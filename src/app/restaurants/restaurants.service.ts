import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Restaurant } from './restaurant';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class RestaurantsService {
  restaurantURL = 'https://s3.amazonaws.com/br-codingexams/restaurants.json';
  constructor(private http: HttpClient) {

  }

  getRestaurants (): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.restaurantURL).pipe();
  }
}
