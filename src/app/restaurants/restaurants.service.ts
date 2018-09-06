import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {BehaviorSubject, Observable, throwError} from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Restaurant } from '../restaurant';

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

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get(this.restaurantURL).pipe(
      map((data: any) => {
        return data.restaurants;
      }), catchError(error => {
        return throwError('Unable to get restaurants');
      })
    );
  }
}
