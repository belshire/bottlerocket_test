import { Component, OnInit } from '@angular/core';

import { Restaurant } from './restaurant';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  providers: [ RestaurantsService ],
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  restaurants: Restaurant[];

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants(): void {
    this.restaurantsService.getRestaurants().subscribe(restaurants => this.restaurants = restaurants);
  }
}
