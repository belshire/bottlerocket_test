import { Component, OnInit } from '@angular/core';

import { Restaurant } from './restaurant';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurants.component.html',
  providers: [ RestaurantsService ],
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[];

  constructor() { }

  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants(): void {
    this.restrauntsService.getRestaurants().subscribe(restaurants => this.restaurants = restaurants);
  }
}
